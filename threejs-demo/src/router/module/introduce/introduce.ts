const Page1 = () => import(/* webpackChunkName: "Overview" */ '../../../views/page1.vue');

export default [
    {
        path: '/Page1',
        name: 'Page1',
        component: Page1,
    }
];
