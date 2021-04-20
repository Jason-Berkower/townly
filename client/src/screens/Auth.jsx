import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Layout from "../components/Layout"


export default function Auth(props) {

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
  );
}
