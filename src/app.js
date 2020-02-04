import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import routes from './routes'

class App extends React.Component{
  render(){
    return (
      <>
        <Router>
          <Switch>
            {routes.map((route, index) => {
              if(route.auth){
                return (
                  <PrivateRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                );
              }else{
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                );
              }
            })}
          </Switch>
      </Router>
      </>
    );
  }
}

function PrivateRoute({children, ...rest}){
  return (
    <Route
      {...rest} render={props => (
        localStorage.getItem('user') 
          ? ( children ) 
          : ( <Redirect to={{
                pathname:"/sign_in",
                state: { from: props.location}}}
              />)
      )}
    />
  );
}

export default App;