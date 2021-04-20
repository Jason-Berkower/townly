import e from 'cors';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../services/users';
import Layout from "../components/Layout";


export default function SignUp(props) {
  const defaultInput = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isTourGuide: false,
  };

  let history = useHistory();

  const [input, setInput] = useState(defaultInput);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    e.preventDefault();
    await signUp(input);
    let res = await signIn(input);

    props.setCurrentUser(res.payload);
    history.pushState('/');
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Username</label>
        <input name='username' value={input.username} placeholder='Enter username...' />
        <label>Email</label>
        <input type='email' name='email' value={input.email} placeholder='Enter email...' />
        <label>Password</label>
        <input type='password' name='password' value={input.password} placeholder='Enter password...' />
        <label>Confirm Password</label>
        <input type='password' name='passwordConfirmation' value={input.passwordConfirmation} placeholder='Reenter password...' />
        <input type='checkbox' id='tourGuideY' name='tourGuideY' value={input.isTourGuide} />
        <label>Tour Guide</label><br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
};