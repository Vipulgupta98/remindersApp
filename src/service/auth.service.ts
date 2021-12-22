import jwt from 'jsonwebtoken';
import { JWT_PRIVATE_KEY } from '@config/secret';
import bcrypt from 'bcrypt';

export class AuthService {
  constructor() {
    // nothing here
  }

  // method to generate the token
  public async generateToken(user: object, time: string): Promise<any> {
    return jwt.sign({ ...user }, JWT_PRIVATE_KEY, { expiresIn: time });
  }

  // method to verify the token
  public async verifyToken(token: string): Promise<any> {
    return jwt.verify(token, JWT_PRIVATE_KEY);
  }

  // encrypting the password
  public async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  // validates the incoming password
  public async validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}