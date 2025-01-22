import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity('category')
export class Category extends BaseEntity
{
    @PrimaryGeneratedColumn() id:number;
    @Column('text') name: string;

    @OneToMany(()=> Product, (pr) => pr.category)
    products: Product[];
}