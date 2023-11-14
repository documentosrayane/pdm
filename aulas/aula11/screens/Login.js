import { useContext, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';

import { AuthContext } from '../contexts/AuthContext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { error, login } = useContext(AuthContext);

  const handleLogin = () => {
    login(email, senha);
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ScrollView style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>Login</Text>
        <HelperText type="error" visible={true}>{error}</HelperText>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <Button mode="contained" onPress={handleLogin}>
          Entrar
        </Button>
        <Button onPress={handleRegister}>Não tenho conta</Button>
      </ScrollView>
    </View>
  );
};

export default Login;
