import { getManager } from "typeorm";
import createError from "http-errors";
import { TIMEZONE } from "@config/secret";
import moment from "moment-timezone";
import asyncForEach from "@util/asyncForEach";
// import { BusinessDirRepo } from "@database/repository/business.repository";
// import { businessDir } from "@database/model/user";
// import { BusinessCategoryRepo } from "@database/repository/businessCategory.repository";
import { CommonFunctions } from "@util/commonFunctions";
import { Mailer } from "@util/mailer";
import { UserRepo } from "@database/repository/user.repository";
import { RemindersRepo } from "@database/repository/reminders.repository";
import { AuthService } from './auth.service';
import bcrypt from 'bcrypt';
import i18n from 'i18n';


export class UserService {
    private authService: AuthService;
  constructor() {
    moment.tz.setDefault(TIMEZONE);
    this.authService = new AuthService();
  }
  public async createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    dob: string
  ): Promise<any> {
    const userRepo = getManager().getCustomRepository(UserRepo);
      if (!email || !password) {
        throw new createError.BadRequest(i18n.__('email_password_required'));
      }
      // checking whether user exists or not
      const userExists = await userRepo.findOne({ email: email.toLowerCase() });
      if (userExists) {
        throw new createError.BadRequest(i18n.__('user_already_exists'));
      }

    let userPassword = null;
      // encrypting the password
      userPassword = await this.authService.encryptPassword(password);


    // saving the user
    const createdUser = await userRepo.save({
      email,
      lastName,
      firstName,
      password: userPassword,
      dob,
    });
    return createdUser;
  }

  /**
   * @param  {string} email
   * @param  {string} password
   * @returns Promise
   */
   public async login(email: string, password: string): Promise<any> {
    const userRepo = getManager().getCustomRepository(UserRepo);

    // checking whether user exists or not
    const user = await userRepo.findOne(
      { email: email.toLowerCase() }
    );

    if (!user) {
      throw new createError.NotFound(i18n.__('user_not_found'));
    }

    // checking whether incoming password matches with the password in db
    const validPassword = await this.authService.validatePassword(password, user.password);
    if (!validPassword) {
      throw new createError.BadRequest(i18n.__('invalid_password'));
    }
    const token = await this.authService.generateToken(user, '1d');
    
    return {user,token} ;
  }

  public async updatePassword(
    userId: string,
    oldPassword: string,
    newPassword: string
  ): Promise<any> {
    const userRepo = getManager().getCustomRepository(UserRepo);
    const userDetails = await userRepo.findOne({ id: userId });
    // comparing the passwords and if true then updating in DB
    if (bcrypt.compareSync(oldPassword, userDetails.password)) {
      // encrypting the new password
      newPassword = await this.authService.encryptPassword(newPassword);
      // updating the new password in DB
      return userRepo.updatePassword(userId, newPassword);
    } else {
      throw new createError.BadRequest(i18n.__('password_not_match'));
    }
  }


}
