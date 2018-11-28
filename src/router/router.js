import Home from '../components/Home'
import Test from '../components/Test'
import News from '../components/News'

let routes = [{
  path: '/',
  component: Home,
  exact: true
},
{
  path: '/test',
  component: Test
},
{
  path: '/news',
  component: News
}
]

export default routes
