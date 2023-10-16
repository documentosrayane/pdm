import { NavigationContainer } from '@react-navigation/native';
import Main from './components/routes/Main';
import AuthProvider from './components/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
    <AuthProvider>
      <Main />
    </AuthProvider>
    </NavigationContainer>
  );
};

export default App;