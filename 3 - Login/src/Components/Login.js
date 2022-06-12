import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import UserPool from '../UserPool';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('login success', result);
      },
      onFailure: (err) => {
        console.log('login failure', err);
      },
      newPasswordRequired: (data) => {
        console.log('new password required', data);
      },
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        Email:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
