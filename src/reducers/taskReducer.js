import { task_types } from "../types/taskTypes";

// * initial state
const initial_state = {
    tasks: [],
}

// * reducer
export const task_reducer = (state = initial_state, action) => {
    switch(action.type) {
        case task_types.update_tasks:
            const tasks = action.payload;
            return {...state, tasks};
        case task_types.del_tasks:
            const tasks_ = action.payload;
            return {...state, tasks: tasks_};
        case task_types.check_task:
            const tasks__ = action.payload;
            return {...state, tasks: tasks__}
        case task_types.add_task:
            const tasks___ = action.payload;
            return {...state, tasks: tasks___}
        case task_types.upd_task:
            const tasks____ = action.payload;
            return {...state, tasks: tasks____}
        default:
            return state;
    }
} 