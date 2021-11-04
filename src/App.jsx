import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import ViewLoading from './views/ViewLoading/ViewLoading';
import NotFound from './views/NotFound/NotFound';
import { useDispatch } from 'react-redux';
import { task_actions } from './actions/taskActions';

const LazyHome = React.lazy(()=>import('./views/ViewHome/ViewHome'));

const App = () => {
    const dispatch = useDispatch();

    // use get tasks
    useEffect(() => {
        dispatch(task_actions.updateTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ? route with layout
    function RouteWrapper({
        component: Component, 
        layout: Layout, 
        ...rest
    }) {
        return (
            <Route {...rest} render={(props) =>
                <Layout {...props}>
                <Component {...props} />
                </Layout>
            } />
        );
    }

    // * return
    return (
        <Router>
            <Switch>
                {/* load Home */}
                <RouteWrapper exact path='/' layout={ MainLayout }>
                    <Suspense fallback={ <ViewLoading /> }>
                        <LazyHome />
                    </Suspense>
                </RouteWrapper>
                {/* load Not Found */}
                <Route component={ NotFound } />
            </Switch>
        </Router>
    )
}

export default App;