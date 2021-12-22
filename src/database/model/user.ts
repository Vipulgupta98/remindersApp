import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public dob: string;

  @CreateDateColumn({
    select: false,
  })
  public createdAt: Date;

  @UpdateDateColumn({
    select: false,
  })
  public updatedAt: Date;
 
}
