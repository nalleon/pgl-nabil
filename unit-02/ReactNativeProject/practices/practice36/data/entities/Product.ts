import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Category } from "./Category";

@Entity('product')
export class Product extends BaseEntity{
    @PrimaryColumn('text') name: string;
    @Column('float') price: number;
    @Column('int') stock: number;
    @Column('boolean') discontinued: boolean;
    @ManyToOne(()=> Category, (cat) => cat.products)
    category: Category;

}