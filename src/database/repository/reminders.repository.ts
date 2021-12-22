import { EntityRepository, Repository } from "typeorm";
import { Reminders } from "@database/model/reminders";

@EntityRepository(Reminders)
export class RemindersRepo extends Repository<Reminders> {

// public async getBusinessCategory(businessId: string): Promise<any> {
//     const result = await this.find({
//         where: [{id: businessId }],
//         select: ['businessCategory']
//     });
//     return result;
// }
}
