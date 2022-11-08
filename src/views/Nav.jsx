import { Link, useNavigate } from 'react-router-dom';

export default function Nav(){
	const navigate = useNavigate();
	let user = '';

	try{
		user = JSON.parse(sessionStorage.getItem('user'));
	}catch(error){

	}

	const logout = () =>{
		sessionStorage.clear();
		navigate('/login');
	}

	return(
		<div className='nav'>
			<div className='brand'>LOGO</div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				{user?
					<li onClick={logout} style={{cursor:'pointer'}}>logout</li>
					: 
					<li><Link to='/login'>Login</Link></li>

				}
				<li><Link to='/user'>User Dashboard</Link></li>
				<li><Link to='/admin'>Admin Dashboard</Link></li>
			</ul>
		</div>
		)
}