import { Request, Response } from "express";
import i18n from "i18n";
import { ResponseParser } from "@util/response-parser";
import constant from "@config/constant";
import { UserService } from "@service/user.service";

export class userController {
  private responseParser: ResponseParser;
  private userService: UserService;

  constructor() {
    this.responseParser = new ResponseParser();
    this.userService = new UserService();
  }

  public defaultCheck = (req: Request, res: Response): void => {
    this.responseParser
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody({})
      .setMessage(i18n.__("SUCCESS"))
      .send(res);
  };

    /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
     public createUser = async (req: Request, res: Response): Promise<void> => {
      const {
        body: { email, firstName, lastName, password, dob },
      } = req;
      const response = await this.userService.createUser(
        firstName,
        lastName,
        email,
        password,
        dob,
      ); // creates the user in the db relative to tenant
      this.responseParser
        .setStatus(true)
        .setHttpCode(constant.HTTP_STATUS_CREATED)
        .setBody(response)
        .setMessage(i18n.__('user_created'))
        .send(res);
    };

  /**
   * @param  {Request} req
   * @param  {Response} res
   * @returns void
   */
  public login = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { email, password },
    } = req;
    const response = await this.userService.login(email, password);
    console.log(response);
    
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setToken(response.token)
      .setBody(response)
      .setMessage(i18n.__('user_login_success'))
      .send(res);
  };

  public updatePassword = async (req: Request, res: Response): Promise<void> => {
    const {
      body: { oldPassword, newPassword },
    } = req;
    const {
      user: { id },
    } = req;
    const response = await this.userService.updatePassword(String(id), oldPassword, newPassword);
    this.responseParser
      .setStatus(true)
      .setHttpCode(constant.HTTP_STATUS_OK)
      .setBody(response)
      .setMessage(i18n.__('password_updated'))
      .send(res);
  };
}
