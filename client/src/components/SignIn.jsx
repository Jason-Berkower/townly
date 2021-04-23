import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/users';
import './CSS/SignIn.css'


export default function SignIn(props) {
  const defaultInput = {
    username: '',
    password: '',
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
    let res = await signIn(input);
    console.log(res)
    if (res.payload.is_tourGuide === true) {
      props.setTourGuide(res.payload)
    } else {
      props.setCurrentUser(res.payload)
    }
    history.push('/');
  };

  return (
    <div className='sign-in-container'>
      <h3 id='sign-in'>Sign In</h3>
      <form id='sign-in-form' onSubmit={handleSubmit}>
        <input className='sign-in-input' name='username' value={input.username} placeholder='Enter username...' onChange={handleChange} />
        <input className='sign-in-input' type='password' name='password' value={input.password} placeholder='Enter password' onChange={handleChange} />
        <div>
          <button className='submit' type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  )
};