import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { task_actions } from '../../../actions/taskActions';
import './item_task_card.scss';

const ItemTaskCard = ({ item_data }) => {
    // ? dispatch
    const dispatch = useDispatch();

    // ? ref - edit
    const edit_form = useRef();
    const edit_input = useRef();

    // ? delete item
    const handleDelete = () => {
        dispatch(task_actions.deleteTask(item_data.id));
    }
    // ? update check item
    const handleCheck = () => {
        dispatch(task_actions.checkTask(item_data.id, (!item_data.completed)));
    }
    // ? open edit
    const handleOpenEdit = () => {
        edit_form.current.classList.add('active');
        edit_input.current.focus();
    }
    // ? cancel edit
    const handleCancelEdit = () => {
        edit_form.current.classList.remove('active');
        edit_input.current.value = item_data.title;
        
    }
    // ? edit task
    const handleEdit = e => {
        e.preventDefault();

        e.target.classList.remove('active');

        if(edit_input.current.value.trim() !== item_data.title) {
            dispatch(task_actions.updateTask(item_data.id, edit_input.current.value.trim()));
        }
    }

    // * return
    return (
        <div className={`item-task-card${item_data.completed ? ' completed' : ''}`}>
            <div className='item-task-card_check' onClick={ handleCheck }>[{ item_data.completed ? '/' : ' ' }]</div>
            <h2 className='item-task-card_title'>{ item_data.title }</h2>
            <div className="item-task-card_options">
                <button className='options_update' onClick={ handleOpenEdit }>U</button>
                <button className='options_delete' onClick={ handleDelete }>X</button>
            </div>

            <form ref={ edit_form } className="item-task-card_edit" action='' onSubmit={ handleEdit }>
                <input ref={ edit_input } className='edit-input' type="text" defaultValue={ item_data.title }/>
                <input className='edit-save' type="submit" value="save"/>
                <input className='edit-cancel' type="button" value="cancel" onClick={ handleCancelEdit }/>
            </form>
        </div>
    )
}

export default ItemTaskCard;