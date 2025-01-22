import {DataSource} from 'typeorm';
import { Task } from './entities/Task';


export const dataSource = new DataSource({
    database: 'todolist.db',
    entities: [Task],
    location: 'default',
    logging: [],
    //logging: ['error', 'query', 'schema'],
    synchronize: true,
    type: 'react-native',
});


export const TaskRepository = dataSource.getRepository(Task);