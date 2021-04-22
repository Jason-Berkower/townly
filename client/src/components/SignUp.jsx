import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../services/users';
import './CSS/SignUp.css';


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

  const handleCheck = (event) => {
    setInput((prevInput) => ({
      ...prevInput,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(input);
    let res = await signIn(input);
    if (res.payload.is_tourGuide === true) {
      props.setTourGuide(res.payload)
    } else {
      props.setCurrentUser(res.payload)
    }
    history.push('/');
  };

  return (
    <div className='sign-up-container'>
      <h3>Sign Up</h3>
      <form id="sign-up-form"onSubmit={handleSubmit}>
        <div id='username'>
          
          <input name='username' value={input.username} placeholder='Enter username...' onChange={handleChange} />
        </div>
        <div id='email'>
          
          <input type='email' name='email' value={input.email} placeholder='Enter email...' onChange={handleChange} />
        </div>
        <div id='password'>
          
          <input type='password' name='password' value={input.password} placeholder='Enter password...' onChange={handleChange} />
        </div>
        <div id='confirm-password'>
          
          <input type='password' name='passwordConfirmation' value={input.passwordConfirmation} placeholder='Reenter password...' onChange={handleChange} />
        </div>
        <div id='checkbox'>
          <input type='checkbox' id='is_tourGuide' name='is_tourGuide' value={input.is_tourGuide} onChange={handleCheck} />
          <label>Tour Guide</label><br />
        </div>
        <div>
          <button className='submit' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  )
};