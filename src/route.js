import {
    MainPage,
    TestPage,
    NotFoundPage,
} from './pages'

export const routes = [
    {path: '/', component: MainPage, exact: true},
    {path: '/test', component: TestPage},
    {path: '*', component: NotFoundPage}
]
