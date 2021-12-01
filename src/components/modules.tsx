import Login from './Login/Login';
import Browse from '../components/Browse/Browse';
import RequestRouter from './Request/RequestRouter';

const modules = {
    browse: {
        authRequired: false,
        component: <Browse />
    },
    request: {
        authRequired: true,
        component: <RequestRouter />
    },
    login: {
        authRequired: false,
        component: <Login />
    },
};

export default modules;
