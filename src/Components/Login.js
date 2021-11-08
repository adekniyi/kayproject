import React,{useState} from 'react';
import {login} from "../APIs/apiCalls"
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ emailAddress: "", password: "" });
  const history = useHistory();
  
  const signIn = (e) => {
    e.preventDefault();
     login(formData, history);
     console.log(formData);
  };

  return (
    <>
      <div class='login-page-wrap'>
        <div class='login-page-content'>
          <div class='login-box'>
            <form
            //   action='/student'
            onSubmit={(e) => signIn(e)}
              class='login-form'
            >
              <div class='form-group'>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Enter usrename'
                  class='form-control'
                  value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
                />
                <i class='far fa-envelope'></i>
              </div>
              <div class='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  placeholder='Enter password'
                  class='form-control'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <i class='fas fa-lock'></i>
              </div>
              <div class='form-group'>
                <button type='submit' class='login-btn'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
