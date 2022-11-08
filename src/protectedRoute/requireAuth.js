import { Outlet, useLocation, Navigate } from 'react-router-dom';

const ProtectedRoute = ({roles}) => {

	const location = useLocation();
	const user = JSON.parse(sessionStorage.getItem('user'));

	return(
		user?.role?.find(role => roles?.includes(role)) ? 
		<Outlet/>
		:user
		?<Navigate to='/unauthorize' state = {{ location }} replace/>
		:<Navigate to='/unauthorize' state = {{ location }} replace/>
		)

}

export default ProtectedRoute;