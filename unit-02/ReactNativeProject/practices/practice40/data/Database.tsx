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


export const CasaRepository = dataSource.getRepository(Casa).extend({
    async saveAtOnce(casas: Casa[]): Promise<void> {
        await dataSource.transaction(async (transactionalEntityManager) => {
            for (const casa of casas) {
            await transactionalEntityManager.getRepository(Casa).save(casa);
            }
        });
        },
    });
export const PropietarioRepository = dataSource.getRepository(Propietario);