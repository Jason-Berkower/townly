import e from 'cors';
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
    e.preventDefault();
    let res = await signIn(input);
    props.setCurrentUser(res.payload);
    history.pushState('/');
  };

  return (
    <div>
      <h3>Sign In</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Username</label>
        <input name='username' value={input.username} placeholder='Enter username...' />
        <label>Password</label>
        <input type='password' name='password' value={input.password} placeholder='Enter password' />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
};