import express from "express";
// import { BusinessController} from "@api/controller/user.controller";
import { HttpRequestValidator } from "@middleware/http-request-validator";
import { userRegisterValidator, loginDetails, updatePassword } from "@api/validator/business.validator";
import { AuthenticateRequest } from "@middleware/authenticate-request";
import { userController } from "@api/controller/user.controller";
import { remindersController } from "@api/controller/reminders.controller";

class BaseRoute {
  public router: express.Router = express.Router();
  private userController: userController;
  private remindersController: remindersController;
  private httpRequestValidator: HttpRequestValidator;
  private authenticate;

  constructor() {
    this.userController = new userController();
    this.remindersController = new remindersController();
    this.httpRequestValidator = new HttpRequestValidator();
    const authMiddleware = new AuthenticateRequest();
    this.authenticate = authMiddleware.validate;
    this.assign();
  }

  private assign() {

    this.router.post(
      '/user',
      this.httpRequestValidator.validate('body', userRegisterValidator),
      this.userController.createUser
    );

    this.router.post(
      '/login',
      this.httpRequestValidator.validate('body', loginDetails),
      this.userController.login
    );

    this.router.post(
      '/update-password',
      this.authenticate,
      this.httpRequestValidator.validate('body', updatePassword),
      this.userController.updatePassword
    );
  }
}
export default new BaseRoute().router;
