import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../redux/actions/user.action';

function Login() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(userSignIn, navigate));
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
      >
        <legend>User Sign In</legend>
        <div className="mb-3">
          <input
            onChange={changeHandler}
            value={userSignIn.email}
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={changeHandler}
            value={userSignIn.password}
            type="password"
            name="password"
            placeholder="Pass"
          />
        </div>

        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
