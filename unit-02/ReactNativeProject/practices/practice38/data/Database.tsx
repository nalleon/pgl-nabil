import {DataSource} from 'typeorm';
import { Casa } from './entities/Casa';
import { Propietario } from './entities/Propietario';


export const dataSource = new DataSource({
    database: 'shopdb2.db',
    entities: [Propietario, Casa],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',
});


export const CasaRepository = dataSource.getRepository(Casa);
export const PropietarioRepository = dataSource.getRepository(Propietario);