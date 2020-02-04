import Home from './pages/Home/home'
import NotFound from './pages/NotFound/404';
import Login from './pages/Signin/signin'
import Signup from './pages/Signup/signup'

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    main: Home,
  },
  {
    path: "/sign_in",
    main: Login,
  },
  {
    path: "/sign_up",
    main: Signup,
  },
  {
    path: "*",
    main: NotFound,
  }
];

export default routes;

