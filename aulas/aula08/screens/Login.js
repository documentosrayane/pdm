import { View } from 'react-native';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Login</Text>
      <Controller
        control={control}
        rules={{ required: { value: true, message: 'Email é obrigatorio' }, pattern: { 
        value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, message: 'Email invalido'
        } }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label={'Email'}
            mode={'outlined'}
            onChangeText={onChange}
            keyboardType={'email-address'}
            value={value}
          />
        )}
        name={'email'}
      />
      {errors.email && (
        <HelperText type="error" visible={true}>
          {errors.email.message}
        </HelperText>
      )}
      <Controller
        control={control}
        rules={{
          required: { value: true, message: 'Senha é obrigatorio' },
          minLength: {
            value: 6,
            message: 'Senha deve conter no minimo 6 caracteres',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label={'Senha'}
            mode={'outlined'}
            onChangeText={onChange}
            secureTextEntry={true}
            value={value}
          />
        )}
        name="senha"
      />
      {errors.senha && (
        <HelperText type="error" visible={true}>
          {errors.senha.message}
        </HelperText>
      )}
      <Button mode={'contained'} onPress={handleSubmit(onSubmit)}>
        Entrar
      </Button>
    </View>
  );
};

export default Login;
