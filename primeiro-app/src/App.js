import React, { useState } from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

function App() {
  const [contador, setContador] = useState(0);
  function handleContadorInc() {
    setContador(contador + 1);
  }

  function handleContadorDec() {
    setContador(contador - 1);
  }
  return (
    <div>
      <h1 className="count">Contador: {contador}</h1>
      <div className="button">
        <Button variant="contained" onClick={handleContadorInc}>
          incrementa
        </Button>
        <Button variant="contained" onClick={handleContadorDec}>
          decrementa
        </Button>
      </div>
    </div>
  );
}

export default App;
