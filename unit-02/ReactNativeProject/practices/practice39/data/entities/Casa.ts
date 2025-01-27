import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Propietario } from "./Propietario";

@Entity('casa')
export class Casa extends BaseEntity
{
    @PrimaryColumn('text')
    refCastatal: string;

    @Column('double')
    metros: number;
    
    @ManyToMany(() => Propietario, (propietario) => propietario.casas)
    propietarios: Propietario[];
}