import React, { useState, useContext } from 'react';
import { UserContext } from './Context/AppLoginContextProvider';


/**
 * @author Nabil Leon Alvarez <@nalleon>
 */

const Login = () => {
  /**
   * UseState
   */
  const [username, setUsername] = useState('');
  
  /**
   * Context for user/login
   */
  const context = useContext(UserContext);

  /**
   * Function to handle the login
   * @param event 
   */
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (username.trim()) {
      context.login(username);
    }
  };

  return (
    <>
      <div className="container py-5" style={{minHeight:'100vh'}}>
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
