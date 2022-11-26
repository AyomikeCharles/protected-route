import erpic from './../img/erpic.png';
import { Link } from 'react-router-dom';

export default function Unauthorize(){
	return(
		<div className='unauthorize'>

			<div className='write-up'>
				<div>
					<div className='img-holder'>
						<img className='img404' src={erpic} alt='by storyset on Freepik'/>
					</div>
					<h3 style={{textAlign:'center'}}>we cant seem to find the page you are looking for</h3>
					<div className='btns'>
						<button className='btn'><Link to='/' style={{color:'white'}} >Back to home</Link></button>
					</div>
				</div>
			</div>
		</div>
		)
}