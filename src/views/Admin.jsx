import adminimg from './../img/admin.jpeg';
export default function Admin(){
	let user;
	try{
		user = JSON.parse(sessionStorage.getItem('user'))
	}catch(error){
		console.log(error)

	}

		console.log(user)

	return(
		<div className='dashboard'>
			<div className='user-info'>
				<h2>{user.username} dashbord</h2>
				<h2>Role: {user.role}</h2>
				<img className='userimg' src={adminimg} alt=''/>
			</div>
		</div>
		)
}