import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import './CSS/auth.css';


export default function Auth(props) {

  return (
    <div>
      <div className='auth-container'>
        <div id='sign-in'>
          <SignIn setCurrentUser={props.setCurrentUser} setTourGuide={props.setTourGuide} />
        </div>
        <div id='separator' />
        <div id='sign-up'>
          <SignUp setCurrentUser={props.setCurrentUser} setTourGuide={props.setTourGuide} />
        </div>
      </div>

    </div>
  );
}
