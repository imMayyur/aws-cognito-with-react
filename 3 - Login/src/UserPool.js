import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-south-1_L2XRAoUpd',
  ClientId: '6nc9su68hnoqqk8i96crsvlgc4',
};

export default new CognitoUserPool(poolData);
