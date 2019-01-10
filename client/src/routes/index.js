import Main from '../components/Main';
import SignupCountainer from '../containers/signup';
import SigninCountainer from '../containers/signin';

const routes = [
    {
        url: '/',
        title: 'Главная',
        component: Main,
    }, {
        url: '/signin',
        title: 'Вход',
        component: SigninCountainer,
    }, {
        url: '/signup',
        title: 'Регистрация',
        component: SignupCountainer,
    }
];

export default routes;