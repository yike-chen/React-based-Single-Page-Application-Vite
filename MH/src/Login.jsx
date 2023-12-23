import { useState } from 'react';

import './css/Login.css';

function Subscribe({dialogRef, email, setEmail}) {
  const [errorMessage, setErrorMessage] = useState('');

  const close = () => {
    dialogRef.current.close();
  }

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const login = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter an email.');
      setEmail('guest');
    } else {
      console.log('Email subscribed:', email);
      setErrorMessage('');
      close();
    }
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <form
          className={`form_login ${errorMessage === '' ? '' : 'error'}`}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="form_login_row form_login_title">Login</label>
          {errorMessage && <label className="form_login_row error_message">{errorMessage}</label>}
          <p htmlFor={'${id}-email'} className="form_login_row">*Email: required</p>
          <input className="form_login_row" id={'${id}-email'} onChange={inputEmail} />
          <button type="submit" className="form_login_button" onClick={login}>Login</button>
          <button type="button" className="form_login_button" onClick={close}>Close</button>
        </form>
      </dialog>
    </>
  )
}

export default Subscribe;