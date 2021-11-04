import axios from 'axios';
import { task_types } from '../types/taskTypes';

const getTasks = async () => {
    try{
        const response = await axios.get('https://app-todo-list-backend.herokuapp.com/tasks');
        const tasks = response.data;
        // ? return tasks
        return tasks;
    }catch(err) {
        console.log(err);
    }
}

export const task_actions = {
    // ? update task - action
    updateTasks: () => {
        return async ( dispatch ) => {
            dispatch({
                type: task_types.update_tasks,
                payload: await getTasks()
            });
        }
    },
    // ? delete task - action
    deleteTask: ( id ) => {
        return async ( dispatch ) => {
            await axios.delete(`https://app-todo-list-backend.herokuapp.com/tasks/${ id }`);

            dispatch({
                type: task_types.update_tasks,
                payload: await getTasks()
            });
        }
    },
    // ? checkTask - action
    checkTask: ( id, completed ) => {
        return async ( dispatch ) => {
            const tasks = await getTasks();
            const task_id = tasks.findIndex(task => task.id === id);

            await axios.put(`https://app-todo-list-backend.herokuapp.com/tasks/${ id }`, {
                ...tasks[task_id],
                completed
            });

            dispatch({
                type: task_types.check_task,
                payload: await getTasks()
            });
        }
    },
    // ? addTask - action
    addTask: ( task ) => {
        return async ( dispatch ) => {
            await axios.post('https://app-todo-list-backend.herokuapp.com/tasks', {
                ...task
            })

            dispatch({
                type: task_types.update_tasks,
                payload: await getTasks()
            });
        }
    },
    //  updateTask - action
    updateTask: ( id, title ) => {
        return async ( dispatch ) => {
            const tasks = await getTasks();
            const task_id = tasks.findIndex(task => task.id === id);

            await axios.put(`https://app-todo-list-backend.herokuapp.com/tasks/${ id }`, {
                ...tasks[task_id],
                title
            });

            dispatch({
                type: task_types.upd_task,
                payload: await getTasks()
            });
        }
    }
}