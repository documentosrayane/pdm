import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'

const Login = () => {
  return (
    <ImageBackground
    source={require('../Backgrund.png')}
      style={estilos.backgroundImage}
>
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Login</Text>
      <TextInput style={estilos.Input} placeholder="Email" keyboardType="email-address"/>
      <TextInput style={estilos.Input} placeholder="Senha" secureTextEntry={true} />
   <Button
              title="ENTRAR"
              icon={{
                name: 'home',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
  </View>
  </ImageBackground>
  );
};

const estilos = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can change the resizeMode as needed
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  
  },
  titulo: {
    fontSize: 26,
    fontWeight: '400',
    textAlign: "center",
    marginBottom: 24,
    color: "white"

  },
  Input: {
    color:"white",
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16,
  
  }
});

export default Login;