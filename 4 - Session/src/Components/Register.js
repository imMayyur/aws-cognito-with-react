import { CognitoUser, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import UserPool from '../UserPool';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [OTP, setOTP] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      })
    );
    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't sign up");
      } else {
        console.log(data);
        setVerifyProcess(true);
        alert('User Added Successfully');
      }
    });
  };

  const verifyAccount = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });
    console.log(user);
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't verify account");
      } else {
        console.log(data);
        alert('Account verified successfully');
        window.location.href = '/login';
      }
    });
  };

  return (
    <div>
      {verifyProcess === false ? (
        <form onSubmit={onSubmit}>
          UserName:
          <input
            type="text"
            value={username.toLowerCase().trim()}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Register</button>
        </form>
      ) : (
        <form onSubmit={verifyAccount}>
          Enter the OTP:
          <input
            type="text"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <br />
          <button type="submit">Verify</button>
        </form>
      )}
    </div>
  );
}

export default Register;
