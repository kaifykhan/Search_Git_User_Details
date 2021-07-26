import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({children,data, ...rest}) => {
    return (
        <Route {...rest}
        render={()=> data?(children):<Redirect to="/Login" />}
        />
    )
}

export default PrivateRoute
