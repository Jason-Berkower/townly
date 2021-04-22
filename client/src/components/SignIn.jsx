import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signIn } from '../services/users';


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

  //access the object of this user to find is_tourGuide
  //this user is tourguide tells us if tour guide or not

  return (
    <div className='sign-in-container'>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div id='Username'>
          <label>Username</label>
          <input name='username' value={input.username} placeholder='Enter username...' onChange={handleChange} />
        </div>
        <div id='Password'>
          <label>Password</label>
          <input type='password' name='password' value={input.password} placeholder='Enter password' onChange={handleChange} />
        </div>
        <div id='Submit'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
    </div>
  )
};