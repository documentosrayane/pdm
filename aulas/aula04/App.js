import { useState, useEffect } from 'react';
import Splash from './screens/splash.js'
import Login from './screens/login';

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 3000);
  }, []);

  return exibeSplash ? <Splash /> : <Login />;

};

export default App;