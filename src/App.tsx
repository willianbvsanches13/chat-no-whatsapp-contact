import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function openWhatsapp() {
    var regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;

    if (regex.test(number)) {
      window.open(`https://wa.me/55${number.replace(/\D/g, '')}`);
    } else {
      setErrorMessage('Número inválido');
    }
  }

  function setPhone(text: string) {
    setErrorMessage('');
    setNumber(phoneMask(text));
  }

  function phoneMask(phone: string) {
    return phone
      .replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{5})(\d{1,5})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }

  return (
    <>
      <img src={new URL('assets/whatsapp.png', import.meta.url).href} alt='Whatsapp' style={{ maxWidth: 300, marginBottom: 20 }} />
      <div>
        <input
          value={number}
          type="text"
          placeholder='(11) 99999-8888'
          onChange={(e) => setPhone(e.target.value)}
        />
        <button style={{ marginLeft: 10 }} type="button" onClick={openWhatsapp}>
          Aplicar
        </button>
      </div>
      <div className="error-message">{errorMessage}</div>
    </>
  );
}

export default App;
