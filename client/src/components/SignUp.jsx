import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../services/users';


export default function SignUp(props) {
  const defaultInput = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    is_tourGuide: false,
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
    event.preventDefault();
    await signUp(input);
    let res = await signIn(input);

    props.setCurrentUser(res.payload);
    history.push('/');
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input name='username' value={input.username} placeholder='Enter username...' onChange={handleChange} />
        <label>Email</label>
        <input type='email' name='email' value={input.email} placeholder='Enter email...' onChange={handleChange} />
        <label>Password</label>
        <input type='password' name='password' value={input.password} placeholder='Enter password...' onChange={handleChange} />
        <label>Confirm Password</label>
        <input type='password' name='passwordConfirmation' value={input.passwordConfirmation} placeholder='Reenter password...' onChange={handleChange} />
        <input type='checkbox' id='is_tourGuide' name='is_tourGuide' value={input.is_tourGuide} onChange={handleChange} />
        <label>Tour Guide</label><br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
};