import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Casa } from "./Casa";
import { JoinTable } from "typeorm/browser";

@Entity('propietario')
export class Propietario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;
    @Column('text')
    name: string;

  @ManyToMany(() => Casa, (casa) => casa.propietarios)
  @JoinTable(
    {
      name: 'propietarios_casas',
      joinColumn: { 
        name: 'propietarios',
        referencedColumnName: 'id'
      },
      inverseJoinColumn: { 
        name: 'casas',
        referencedColumnName: 'refCastatal',
      }
    }
  )
  casas: Casa[];
  

}