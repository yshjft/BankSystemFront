import {MainPage, TestPage, NotFoundPage, JoinPage} from './pages'

export const routes = [
  {path: '/', component: MainPage, exact: true},
  {path: '/join', component: JoinPage},
  {path: '/test', component: TestPage},
  {path: '*', component: NotFoundPage}
]
