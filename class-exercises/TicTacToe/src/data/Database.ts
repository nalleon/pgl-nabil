
import {DataSource} from 'typeorm';

import { UserEntity } from './entity/UserEntity';



export const dataSource = new DataSource({
  database: 'tictactoe.db',
  entities: [
    UserEntity
  ],
  location: 'default',
  //logging: [],
  logging: ['error', 'query', 'schema'],
  synchronize: true,
 
  type: 'react-native',
});


export const UserRepository = dataSource.getRepository(UserEntity);









