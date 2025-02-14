
import {DataSource} from 'typeorm';

import { UserEntity } from './entity/UserEntity';
import { GameLocalEntity } from './entity/GameLocalEntity';



export const dataSource = new DataSource({
  database: 'tictactoe5.db',
  entities: [
    UserEntity, GameLocalEntity
  ],
  location: 'default',
  //logging: [],
  logging: ['error', 'query', 'schema'],
  synchronize: true,
  type: 'react-native',
});


export const UserRepository = dataSource.getRepository(UserEntity);
export const GameRepository = dataSource.getRepository(GameLocalEntity);









