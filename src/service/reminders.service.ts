import { getManager } from "typeorm";
import createError from "http-errors";
import { TIMEZONE } from "@config/secret";
import moment from "moment-timezone";
// import { BusinessCategoryRepo } from "@database/repository/businessCategory.repository";


export class remindersService {
  constructor() {
    moment.tz.setDefault(TIMEZONE);
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
