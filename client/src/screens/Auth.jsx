import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';


export default function Auth() {

  return (
    <div>
      <Layout user={props.user}>

      <div id='sign-in'>
        <SignIn />
      </div>
      <div id='separator' />
      <div id='sign-up'>
        <SignUp />
      </div>
      </Layout>
    </div>
  )
}