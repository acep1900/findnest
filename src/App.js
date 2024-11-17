import React, { useState } from 'react';

function App() {
  const [formType, setFormType] = useState('login'); // 'login' or 'register'

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    surname: '',
    username: '',
    hobbies: '',
    edad: '',
    password: '',
  });

  const handleInputChange = (e, form) => {
    const { name, value } = e.target;
    if (form === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'login') {
      console.log('Logging in with:', loginData);
    } else {
      console.log('Registering with:', registerData);
    }
  };

  return (
    <div className="App">
      <div className="button-container">
        <button
          className={formType === 'login' ? 'active' : ''}
          onClick={() => setFormType('login')}
        >
          Login
        </button>
        <button
          className={formType === 'register' ? 'active' : ''}
          onClick={() => setFormType('register')}
        >
          Register
        </button>
      </div>
      <div className="form-container">
        {formType === 'login' ? (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={(e) => handleInputChange(e, 'login')}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, 'login')}
                required
              />
            </label>
            <button type="submit">Login</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={registerData.name}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </label>
            <label>
              Surname:
              <input
                type="text"
                name="surname"
                value={registerData.surname}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </label>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </label>
            <label>
              Hobbies:
              <input
                type="text"
                name="hobbies"
                value={registerData.hobbies}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </label>
            <label>
              Edad:
              <input
                type="number"
                name="edad"
                value={registerData.edad}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={(e) => handleInputChange(e, 'register')}
                required
              />
            </label>
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
