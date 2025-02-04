import {DataSource} from 'typeorm';
import { Alumno } from "./entities/Alumno";
import { Asignatura } from "./entities/Asignatura";
import { Matricula } from "./entities/Matricula";



export const dataSource = new DataSource({
    database: 'instituto.db',
    entities: [Alumno, Asignatura, Matricula],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',
});


export const AlumnoRepository = dataSource.getRepository(Alumno).extend({
    async saveAtOnce(alumnos: Alumno[]) {
        await dataSource.transaction(async (transactionalEntityManager) => {
            for (const alumno of alumnos) {
                try{
                    await transactionalEntityManager.getRepository(Alumno).save(alumno);
                } catch (error){
                    console.error(error);
                }
            }
        });
    },
});

export const AsignaturaRepository = dataSource.getRepository(Asignatura).extend({
    async saveAtOnce(asignaturas: Asignatura[]) {
        await dataSource.transaction(async (transactionalEntityManager) => {
            for (const asignatura of asignaturas) {
                try{
                    await transactionalEntityManager.getRepository(Asignatura).save(asignatura);
                } catch (error){
                    console.error(error);
                }
            }
        });
    },
});


export const MatriculaRepository = dataSource.getRepository(Matricula).extend({
    async saveAtOnce(matriculas: Matricula[]) {
        await dataSource.transaction(async (transactionalEntityManager) => {
            for (const matricula of matriculas) {
                try{
                    await transactionalEntityManager.getRepository(Matricula).save(matricula);
                } catch (error){
                    console.error(error);
                }
            }
        });
    },
});
