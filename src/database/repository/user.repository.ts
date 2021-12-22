import { EntityRepository, Repository } from "typeorm";
import { User } from "@database/model/user";

@EntityRepository(User)
export class UserRepo extends Repository<User> {

    public async updatePassword(id: string, password: string): Promise<unknown> {
        const result = await this.createQueryBuilder()
          .update()
          .set({ password })
          .where('id = :id', { id })
          .returning('id')
          .execute();
        return result;
      }
}
