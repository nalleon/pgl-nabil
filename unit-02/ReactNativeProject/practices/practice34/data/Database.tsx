import {DataSource} from 'typeorm';
import { Product } from './entities/Product';


export const dataSource = new DataSource({
    database: 'shopdb.db',
    entities: [Product],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',
});


export const ProductRepository = dataSource.getRepository(Product);