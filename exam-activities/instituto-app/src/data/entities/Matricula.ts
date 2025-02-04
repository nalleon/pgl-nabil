import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Alumno } from "./Alumno";
import { Asignatura } from "./Asignatura";

@Entity('matriculas')
export class Matricula extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('integer')
    year: number;

    @ManyToOne(() => Alumno, (alumno) => alumno.matriculas)
    alumno: Alumno;

    @ManyToMany(() => Asignatura, (asignatura) => asignatura.matriculas)
    @JoinTable(
    {
      name: 'asignaturas_matriculas',
      joinColumn: { 
        name: 'idmatricula',
        referencedColumnName: 'id'
      },
      inverseJoinColumn: { 
        name: 'idasignatura',
        referencedColumnName: 'id',
      }
    })
    asignaturas: Asignatura[];

}