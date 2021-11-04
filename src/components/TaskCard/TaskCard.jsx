import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';

import './task_card.scss';

import ItemTaskCard from './ItemTaskCard/ItemTaskCard';
import { useDispatch } from 'react-redux';
import { task_actions } from '../../actions/taskActions';

const TaskCard = () => {
    const { tasks } = useSelector(state => state.tasks_reducer);
    const dispatch = useDispatch();

    const new_task_ref = useRef();
    const [new_task, setNewTask] = useState('');

    // ? add task
    const handleAddTask = e => {
        e.preventDefault();

        
        if(new_task_ref?.current && new_task.trim() !== '') {
            dispatch(task_actions.addTask({ 
                title: new_task.trim(),
                completed: false 
            }));
            new_task_ref.current.value = '';
        }
    }
    
    // * return
    return (
        <div className='task-card'>
            <h2 className='task-card_title'>TO-DO</h2>
            <p className='task-card_task-count'>{ `${ tasks?.length ? tasks.length : '0' } tasks` }</p>
            <form className='task-card-form' onSubmit={ handleAddTask } action=''>
                <input ref={ new_task_ref } className='form_input' type='text' maxLength='50' placeholder='new task' onChange={ e => setNewTask(e.target.value) }/>
                <input className='form_submit' type='submit' value='add' />
            </form>
            <div className='task-card_task-container'>
                { tasks?.length > 0 && tasks.map((task, key) => (
                    <ItemTaskCard key={ key } item_data={ task } />
                ))}
            </div>
        </div>
    )
}

export default TaskCard;