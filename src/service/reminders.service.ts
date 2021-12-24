import { getManager } from "typeorm";
import i18n from 'i18n';
import createError from "http-errors";
import { TIMEZONE } from "@config/secret";
import moment from "moment-timezone";
import { UserRepo } from "@database/repository/user.repository";
import { RemindersRepo } from "@database/repository/reminders.repository";
// import { BusinessCategoryRepo } from "@database/repository/businessCategory.repository";


export class remindersService {
  constructor() {
    moment.tz.setDefault(TIMEZONE);
  }

  /**
    * @param  {number} page
    * @param  {number} size
    * @returns Promise
    */

  public async addReminder(
    userId: string,
    reminderName: string,
    description: string,
    reminderDate: string,
    status: string

  ): Promise<any> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    const reminderRepo = getManager().getCustomRepository(RemindersRepo);

    const checkUser = await userRepo.findOne({ id: userId });
    if (!checkUser) {
      throw new createError.BadRequest(i18n.__('user_not_found')); //device check error handling using deviceId
    }

    const reminder = await reminderRepo.save({
      user:checkUser,
      reminderName,
      description,
      reminderDate,
      status
    });
    return reminder
  }

  /**
    * @param  {number} page
    * @param  {number} size
    * @returns Promise
    */

  public async updateReminder(
    userId: string,
    reminderId: string,
    reminderName?: string,
    description?: string,
    reminderDate?: string,
    status?: string

  ): Promise<any> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    const reminderRepo = getManager().getCustomRepository(RemindersRepo);

    const checkUser = await userRepo.findOne({ id: userId });
    if (!checkUser) {
      throw new createError.BadRequest(i18n.__('user_not_found')); //device check error handling using deviceId
    }

    const checkReminder = await reminderRepo.findOne({id: reminderId})
    if (!checkReminder) {
      throw new createError.BadRequest(i18n.__('reminder_not_found')); //device check error handling using deviceId
    }
    reminderName? reminderName: checkReminder.reminderName
    description? description: checkReminder.description
    reminderDate? reminderDate: checkReminder.reminderDate
    status? status: checkReminder.status

    const reminder = await reminderRepo.update(reminderId,{
      user:checkUser,
      reminderName,
      description,
      reminderDate,
      status
    });
    return reminder
  }
    //   // public async createBusinessCategory(businessCategory:string): Promise<any> {
    //   //   const businessCategoryRepo = getManager().getCustomRepository(BusinessCategoryRepo);
    //   //   const businessExists = await businessCategoryRepo.findOne({businessCategory: businessCategory})
    //   //   if(businessExists){
    //   //       throw new createError.BadRequest('Business Category already exists');
    //   //   }
    //   //   const addProfileCategory = await businessCategoryRepo.save({
    //   //       businessCategory
    //   //   });
    //   //   return addProfileCategory
    //   // }

    //   // public async getAllBusinessCategory(): Promise<any> {
    //   //   const businessCategoryRepo = getManager().getCustomRepository(BusinessCategoryRepo);
    //   //   const business = await businessCategoryRepo.find()
    //   //   return business
    //   // }

    //   // public async deleteBusinessCategory(businessCategory:string): Promise<any> {
    //   //   const businessCategoryRepo = getManager().getCustomRepository(BusinessCategoryRepo);
    //   //   const businessCategoryExists = await businessCategoryRepo.findOne({businessCategory: businessCategory})
    //   //   if(!businessCategoryExists){
    //   //       throw new createError.BadRequest('Business_Category_does_not_exists');
    //   //   }
    //   //   await businessCategoryRepo.delete({businessCategory:businessCategory});
    //   //   return {businessCategory:businessCategory, message: "Business_Category_deleted_successfully"};
    //   // }

  }
