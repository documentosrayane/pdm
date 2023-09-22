import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import Sobre from '../screens/Sobre'

const Stack = createNativeStackNavigator();

const NavegacaoPilha = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>

  );
};

export default NavegacaoPilha;