import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Register = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Registrar</Text>

      <Controller
        name="nome"
        control={control}
        rules={{ required: 'Nome é obrigatório', minLength: { value: 3, message: 'Nome deve ter pelo menos 3 caracteres' } }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Nome"
            mode="outlined"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type="error" visible={errors.nome}>
        {errors.nome && errors.nome.message}
      </HelperText>

      <Controller
        name="email"
        control={control}
        rules={{ required: 'Email é obrigatório', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Email"
            mode="outlined"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type="error" visible={errors.email}>
        {errors.email && errors.email.message}
      </HelperText>

      <Controller
        name="senha"
        control={control}
        rules={{ required: 'Senha é obrigatória', minLength: { value: 6, message: 'A senha deve ter pelo menos 6 caracteres' } }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      <HelperText type="error" visible={errors.senha}>
        {errors.senha && errors.senha.message}
      </HelperText>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Registrar
      </Button>
    </View>
  );
};

export default Register;