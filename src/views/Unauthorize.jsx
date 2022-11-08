import erpic from './../img/erpic.jpeg';
import { Link } from 'react-router-dom';

export default function Unauthorize(){
	return(
		<div className='unauthorize'>

			<div className='write-up'>
				<div>
					<h1>Ooooops !</h1>
					<h4>we cant seem to find the page you are looking for</h4>
					<Link to='/'><button style={{color:'white'}} className='btn'>Back to home</button></Link>
					<div className='circle2'></div>
					<div className='circle1'></div>

				</div>
			</div>
			<div className='img-holder'>
				<img className='img404' src={erpic} alt='Image by storyset on Freepik'/>
			</div>
		</div>
		)
}