import homeimg from './../img/home.jpeg';
import { Link, useNavigate } from 'react-router-dom';
export default function Home(){
	const navigate = useNavigate();
	let user;

	try{
		user = JSON.parse(sessionStorage.getItem('user'))
	}catch(error){

	}

	const logout = () =>{
		sessionStorage.clear();
		navigate('/');
	}
	
	return(
		<div>
			<div className='banner'>
				<div className='home-write-up'>
					<h3>Role base authourization using react router dom outlet</h3>
					<p>this project demostrate role base authourization using react router dom outlet. there are two dashboard (admin and user), guess only have access to homepage, user has access to only user dashboard, admin has access to only admin dashboard, while super admin has access to both user and admin dashboard. below are three login details</p>
					{
						user?<button onClick={logout} style={{color:'white'}} className='btn'>logout</button>:<Link to='/login'><button style={{color:'white'}} className='btn'>login</button></Link>
					}
					
				</div>
				<div className='home-img-holder'>
					<img src={homeimg} className='homeimg' alt=''/>
				</div>
			</div>
			<div>
				<h2 className='user'>Users</h2>
				<div className='userinfo-holder'>
					<div className='userinfo'>
						<p>Name: sara</p>
						<p>Password:123</p>
						<p>Role: user </p>
						<p>sara has access to user dashboard only</p>
					</div>
					<div className='userinfo'>
						<p>Name: john</p>
						<p>Password:123</p>
						<p>Role: admin </p>
						<p>john has access to admin dashboard only</p>
					</div>
					<div className='userinfo'>
						<p>Name: ola</p>
						<p>Password:123</p>
						<p>Role: superadmin </p>
						<p>ola has access to both user and dashboard</p>
					</div>
				</div>
			</div>
		</div>
		)
}