import userimg from './../img/user.jpeg';
import Nav from './Nav';
export default function User(){
	let user;
	try{
		user = JSON.parse(sessionStorage.getItem('user'))
	}catch(error){
		console.log(error)

	}

		console.log(user)

	return(
		<>
		<Nav/>
		<div className='dashboard'>
			<div className='user-info'>
				<h2>{user.username} Dashbord</h2>
				<h2>Role: {user.role.length>1?'Superadmin':user.role}</h2>
				<img className='userimg' src={userimg} alt=''/>
			</div>
		</div>
		</>
		)
}