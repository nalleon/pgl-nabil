import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn() id:number;
    @Column('text') content: string;
    @Column('boolean') completed: boolean;
}