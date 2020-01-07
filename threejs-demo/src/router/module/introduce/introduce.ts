const Introduce = () => import(/* webpackChunkName: "about" */ '../../../views/introduce/Intro.vue');

export default [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'Introduce' }
    },
    {
        path: '/introduce',
        name: 'Introduce',
        component: Introduce
    },
];
