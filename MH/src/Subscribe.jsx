import { useState } from 'react';

import './css/Subscribe.css';

function Subscribe({dialogRef}) {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const close = () => {
    dialogRef.current.close();
  }

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  const inputConfirmEmail = (e) => {
    setConfirmEmail(e.target.value);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const subscribe = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Please enter an email.');
    } else if (email !== confirmEmail) {
      setErrorMessage('Emails do not match.');
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
          className={`form ${errorMessage === '' ? '' : 'error'}`}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="form_row form_title">Receive the latest news.</label>
          {errorMessage && <label className="form_row error_message">{errorMessage}</label>}
          <p htmlFor={'${id}-email'} className="form_row">*Email: required</p>
          <input className="form_row" id={'${id}-email'} onChange={inputEmail} />
          <label className="form_row" htmlFor={'${id}-confirm-email'}>*Confirm Email: </label>
          <input className="form_row" id={'${id}-confirm-email'} onChange={inputConfirmEmail} />
          <button type="submit" className="form_button" onClick={subscribe}>Subscribe</button>
          <button type="button" className="form_button" onClick={close}>Close</button>
        </form>
      </dialog>
    </>
  )
}

export default Subscribe;