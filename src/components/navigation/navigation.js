import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="f3 link dimblack underline pa3 pointer"
        >
          Log Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p
            onClick={() => onRouteChange('signin')}
            className="f3 link dimblack underline pa3 pointer"
          >
            Log Out
          </p>
          <p
            onClick={() => onRouteChange('register')}
            className="f3 link dimblack underline pa3 pointer"
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
