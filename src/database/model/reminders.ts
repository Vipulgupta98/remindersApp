import {Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { User } from "./user";

@Entity("reminders")
export class Reminders{
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public reminderName: string;

    @Column()
    public description: string;
    
    @Column()
    public reminderDate: string;

    @Column()
    public status: string;

    @OneToOne(() => User, (user) => user.id)
    @JoinColumn({ name: 'user', referencedColumnName: 'id' })
    public user: User;

    @CreateDateColumn({
        select: false,
      })
      public createdAt: Date;
    
    @UpdateDateColumn({
    select: false,
    })
    public updatedAt: Date;
}