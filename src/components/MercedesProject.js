import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MercedesProject = props => {
  const [authorizationCode, setAuthorizationCode] = useState('');
  const getAccessToken = authorizationCode => {
    axios({
      url: 'https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/token',
      method: 'POST',
      headers: {
        Authorization:
          'Basic acc35219-7dab-4d7d-8405-f7ba2ca48ee0:4a035516-60a4-4625-8dbd-3eedfb879bc7',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=http%3A%2F%2Flocalhost%3A3000&clientId=acc35219-7dab-4d7d-8405-f7ba2ca48ee0&clientSecret=4a035516-60a4-4625-8dbd-3eedfb879bc7`,
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };
  const accessTokenButtonStyles = authorizationCode
    ? { display: 'block' }
    : { display: 'none' };
  const authorizationCodeLinkStyles = authorizationCode
    ? { display: 'none' }
    : { display: 'block' };
  useEffect(() => {
    const _authorizationCode = props.location.search.split('?code=')[1];
    if (_authorizationCode) setAuthorizationCode(_authorizationCode);
  }, [props.location.search]);
  return (
    <div className='MercedesProject'>
      <div className='MercedesProject-container'>
        <a
          style={authorizationCodeLinkStyles}
          href='https://api.secure.mercedes-benz.com/oidc10/auth/oauth/v2/authorize?response_type=code&client_id=acc35219-7dab-4d7d-8405-f7ba2ca48ee0&redirect_uri=http://localhost:3000&scope=scope=mb:vehicle:status:general mb:user:pool:reader&prompt=login,consent'
        >
          Authorize
        </a>
        <button
          onClick={() => getAccessToken(authorizationCode)}
          style={accessTokenButtonStyles}
        >
          Get Access Token
        </button>
      </div>
    </div>
  );
};

export default MercedesProject;
