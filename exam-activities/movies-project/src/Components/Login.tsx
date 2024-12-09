import React, { useState, useContext } from 'react';
import { UserContext } from './Context/AppLoginContextProvider';

const Login = () => {
  const [username, setUsername] = useState('');
  const context = useContext(UserContext);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      context.login(username);
    }
  };

  return (
    <>
      <div className="container py-5">
          {!context.user || context.user.username === 'anonymous' ? (
            <div className="card card-custom">
              <form onSubmit={handleLogin}>
                <div className="row g-3  d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-9">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        className="custom-input w-100"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />  
                  </div>
                  <div className="col-12 col-md-3">
                    <button type="submit" className="custom-button w-100">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
            ) : (
              <div className="card card-custom">
                <div className="row g-3  d-flex justify-content-center align-items-center">
                  <button className="custom-button w-25" onClick={() => context.logout()}> Logout</button>
                </div>
              </div>
            )
          
          }

        </div>
    </>
  );
};

export default Login;
