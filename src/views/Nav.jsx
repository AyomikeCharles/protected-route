import { Link, useNavigate } from 'react-router-dom';
import { useRef,useState } from 'react';
import { HambergerMenu, CloseSquare} from 'iconsax-react';

export default function Nav(){
	const navigate = useNavigate();
	let user = '';

	const [menu, setMenu] = useState(false)

	const menuRef = useRef()

	try{
		user = JSON.parse(sessionStorage.getItem('user'));
	}catch(error){

	}

	const logout = () =>{
		sessionStorage.clear();
		navigate('/login');
	}

	const toggleMenu = () =>{
		if(menuRef.current.style.height == '0px'){
			menuRef.current.style.height = '100px'
			setMenu(false)
		}else{
			menuRef.current.style.height = '0';
			setMenu(true)
		}
	
	}

	return(
		<div className='nav'>
			<div className='bar'>
				<div className='brand'>LOGO</div>
				<div className='menu' ref={menuRef}>
					<div className='item'><Link to='/'>Home</Link></div>
					{user?
						<div className='item' onClick={logout} style={{cursor:'pointer'}}>logout</div>
						: 
						<div className='item'><Link to='/login'>Login</Link></div>

					}
					<div className='item'><Link to='/user'>User Dashboard</Link></div>
					<div className='item'><Link to='/admin'>Admin Dashboard</Link></div>
				</div>
			</div>
			<div onClick={toggleMenu} className='menubar'>{menu?<HambergerMenu />:<CloseSquare/>}</div>
		</div>
		)
}