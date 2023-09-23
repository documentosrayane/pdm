import { NavigationContainer } from '@react-navigation/native';

import NavegacaoPilha from './routs/NavegacaoPilha';
import NavegacaoAba from './routs/NavegacaoAba';
import NavegacaoGaveta from './routs/NavegacaoGaveta'
const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoAba />
    </NavigationContainer>
  );
};

export default App;
