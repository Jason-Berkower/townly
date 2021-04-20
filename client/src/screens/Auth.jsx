import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default function Auth() {

  return (
    <div>
      <div id='sign-in'>
        <SignIn />
      </div>
      <div id='separator' />
      <div id='sign-up'>
        <SignUp />
      </div>
    </div>
  )
}