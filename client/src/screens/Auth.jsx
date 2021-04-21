import { Link } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Layout from "../components/Layout";


export default function Auth(props) {

  return (
    <div>
      

        <div id='sign-in'>
          <SignIn setCurrentUser={props.setCurrentUser} setTourGuide={props.setTourGuide} />
        </div>
        <div id='separator' />
        <div id='sign-up'>
          <SignUp setCurrentUser={props.setCurrentUser} setTourGuide={props.setTourGuide}/>
        </div>
      
    </div>
  );
}
