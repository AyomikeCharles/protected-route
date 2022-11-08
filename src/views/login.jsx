import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import img from './../img/pic.jpeg';
import fb from './../img/fblogo.png';
import go from './../img/glogo.png';


const users = [
	{
		username:'john',password:'123',role:['admin']
	},
	{
		username:'sara',password:'123',role:['user']
	},
	{
		username:'ola',password:'123',role:['user', 'admin']
	}
]

export default function Login(){

	const [user, setUser] = useState({
		username:'',
		password:'',
	})

	const navigate = useNavigate();

	const handleChange = e =>{
		setUser(previous=>({
			...previous,
			[e.target.name]:e.target.value
		}))
	}

	const {username, password} = user;

	const submit = e =>{
		e.preventDefault()

		const userData = {
			username,
			password
		}

		const user = users.find(user => user.username === userData.username )

		if(user){

			if(user.password===userData.password){
			
				if(user.role[0]==='user'){
					const loginUser = sessionStorage.setItem('user', JSON.stringify(user))
					navigate('/user')
				}else{
					const loginAdmin = sessionStorage.setItem('user', JSON.stringify(user))
					navigate('/admin')
				}

			}else{
				alert('incorrect password')
			}
		
		}else{
			alert('incorrect username')
		}


	}




	return(
		<div className='login'>
			<div className='text'>
				<div className='text-overlay'></div>
				<img className='imgstyle' src={img} alt='Image by storyset on Freepik'/>
			</div>
			<div className='input-holder'>
				<div>
					<div className='welcome'>
						<h3>Welcome !</h3>
						<span>Not a member? <a style={{cursor:'pointer'}}>Register</a></span>
					</div>
					<form onSubmit={submit}>

					<div className='inputDiv'>
						<div><label><b>Username</b></label></div>
						<input 
							type='text' 
							value={user.username}
							name='username'
							placeholder='username'
							onChange={handleChange}
						/>
					</div>
					

					<div className='inputDiv'>
						<div><label><b>Password</b></label><a style={{float:'right',cursor:'pointer'}}>forget password</a></div>
						
						<input 
							type='password'
							value={user.password} 
							name='password'
							placeholder='password'
							onChange={handleChange}
						/>
					</div>
						

						<button className='submitbtn'>submit</button>

						<div className='separator'>or login with</div>
						<div className='sm-holder'>
							<button className='sm'>
								<img className='logostyle' src={fb} alt='Image by storyset on Freepik'/>
									Facebook
							</button>
							<button className='sm'>
								<img className='logostyle' src={go} alt='Image by storyset on Freepik'/>
								Google
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		)
}