import React, { useState, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
const languageWords = {
  english: {
    contactMe: 'contact me',
    messagePlaceholder: 'Type your message here...',
    nameLabel: 'Name :',
    emailLabel: 'Email Address :',
    messageLabel: 'Message :',
    submit: 'submit',
  },
  turkish: {
    contactMe: 'BENİMLE İLETİŞİME GEÇİN',
    messagePlaceholder: 'Mesajınızı buraya yazın...',
    nameLabel: 'İsminiz :',
    emailLabel: 'Email Adresiniz :',
    messageLabel: 'Messajınız :',
    submit: 'GÖNDER',
  },
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [mailinfo, setMailinfo] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleOnSubmit = e => {
    e.preventDefault();
  };
  const handleOnChange = e => {
    setMailinfo({ [e.target.name]: e.target.value });
  };
  return (
    <div className='contact'>
      <form className='contact-form' onSubmit={handleOnSubmit}>
        <h2>{languageWords[language].contactMe}</h2>
        <div className='inputfield'>
          <label htmlFor='name'>{languageWords[language].nameLabel}</label>
          <input
            name='name'
            type='text'
            value={mailinfo.name}
            required
            onChange={handleOnChange}
            placeholder='John Doe'
          />
        </div>
        <div className='inputfield'>
          <label htmlFor='email'>{languageWords[language].emailLabel}</label>
          <input
            name='email'
            type='email'
            value={mailinfo.email}
            required
            onChange={handleOnChange}
            placeholder='johndoe@example.com'
          />
        </div>
        <div className='inputfield'>
          <label htmlFor='message'>
            {languageWords[language].messageLabel}
          </label>
          <textarea
            value={mailinfo.message}
            name='message'
            cols='30'
            rows='3'
            onChange={handleOnChange}
            placeholder={languageWords[language].messagePlaceholder}
          />
        </div>
        <button type='submit'>{languageWords[language].submit}</button>
      </form>
    </div>
  );
};

export default Contact;
