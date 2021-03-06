import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";
import { remindersService } from "@service/reminders.service";

export class remindersController {
  private responseParser: ResponseParser;
  private remindersService: remindersService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.remindersService = new remindersService();
  }

  public addReminder = async (req: Request, res: Response): Promise<void> => {
    const {
      body: {
        userId,
        reminderName,
        description,
        reminderDate,
        status
      },
    } = req;
    const response = await this.remindersService.addReminder(
        userId,
        reminderName,
        description,
        reminderDate,
        status
    ); // gets all the devices present in the db
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_CREATED)
      .setBody(response)
      .setMessage(i18n.__('reminder_added_successfully'))
      .send(res);
  };

  public updateReminder = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { 
        userId,
        reminderId,
        reminderName,
        description,
        reminderDate,
        status
       },
    } = req;
    const response = await this.remindersService.updateReminder(
        userId,
        reminderId,
        reminderName,
        description,
        reminderDate,
        status
    ); // gets all the devices present in the db
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_CREATED)
      .setBody(response)
      .setMessage(i18n.__('reminder_updated_successfully'))
      .send(res);
  };
//   public defaultCheck = (req: Request, res: Response): void => {
//     this.responseParser
//       .setHttpCode(constant.HTTP_STATUS_OK)
//       .setBody({})
//       .setMessage(i18n.__("SUCCESS"))
//       .send(res);
//   };

//   public createBusinessCategory = async (req: Request, res: Response): Promise<void> => {
//     const {
//       body: {businessCategory}
//     } = req;
//     const response = await this.businessCategoryService.createBusinessCategory(businessCategory);
//     this.responseParser
//       .setStatus(true)
//       .setHttpCode(constant.HTTP_STATUS_CREATED)
//       .setBody(response)
//       .setMessage(i18n.__("Business_Category_registeration_successful"))
//       .send(res);
//   };

//   public getAllBusinessCategory = async (req: Request, res: Response): Promise<void> => {
//     const response = await this.businessCategoryService.getAllBusinessCategory();
//     this.responseParser
//       .setStatus(true)
//       .setHttpCode(constant.HTTP_STATUS_CREATED)
//       .setBody(response)
//       .setMessage(i18n.__("Businesses_Category_fetched_successfully"))
//       .send(res);
//   };

//   public deleteBusinessCategory = async (req: Request, res: Response): Promise<void> => {
//     const {
//         body: {businessCategory},
//       } = req;
//     const response = await this.businessCategoryService.deleteBusinessCategory(businessCategory);
//     this.responseParser
//       .setStatus(true)
//       .setHttpCode(constant.HTTP_STATUS_CREATED)
//       .setBody(response)
//       .setMessage(i18n.__("Business_Category_deleted_successfully"))
//       .send(res);
//   };

}
