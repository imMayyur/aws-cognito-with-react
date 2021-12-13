import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'Enter your Userpool ID',
  ClientId: 'Enter your Client ID',
};

export default new CognitoUserPool(poolData);
