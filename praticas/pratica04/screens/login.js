import { useState } from 'react';
import { View, Text}  from 'react-native';
import { TextInput, Button  } from 'react-native-paper';

const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <Text style={{fontSize:24, fontWeight:'bolt', paddingBottom:16}}> Login </Text>
  <TextInput label="Email"value={email} onChangeText={text => setEmail (text)}/>
  <TextInput label="Senha"value={senha} onChangeText={text => setSenha (text)}
secureTextEntry={true}/>
  <Button onPress={()=> {}}>Entrar</Button>
  </View>;
};
export default Login;