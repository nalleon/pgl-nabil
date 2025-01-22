import {DataSource} from 'typeorm';
import { Product } from './entities/Product';
import { Category } from './entities/Category';


export const dataSource = new DataSource({
    database: 'shopdb2.db',
    entities: [Product, Category],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',
});


export const ProductRepository = dataSource.getRepository(Product);
export const CategoryRepository = dataSource.getRepository(Category);