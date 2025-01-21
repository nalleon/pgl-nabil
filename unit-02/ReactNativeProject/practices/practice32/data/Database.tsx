import {DataSource} from 'typeorm';
import { Persona } from './entities/Persona';


export const dataSource = new DataSource({
    database: 'personasdb.db',
    entities: [Persona],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',
});


export const PersonaRepository = dataSource.getRepository(Persona);