import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('product')
export class Product extends BaseEntity{
    @PrimaryColumn('text') name: string;
    @Column('float') price: number;
    @Column('int') stock: number;
    @Column('boolean') discontinued: boolean;
}