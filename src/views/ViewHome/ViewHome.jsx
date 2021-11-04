import './view_home.scss';

import TaskCard from '../../components/TaskCard/TaskCard';

const ViewHome = () => {
    // * return
    return (
        <div className='home'>
            {/* task card added */}
            <TaskCard />
        </div>
    )
}

export default ViewHome;