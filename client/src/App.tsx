import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState<string>('Loading...');

  useEffect(() => {
    (async () => {
      const res = await fetch('https://go-cors-test-production.up.railway.app/hello', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers'
        },
      });

      setText(await res.text());
    })();
  }, []);

  return (
    <h1>{text}</h1>
  );
};

export default App;
