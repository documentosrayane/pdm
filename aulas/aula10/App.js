import { View, Button } from 'react-native';

import { doGet, doPost, doPut, doDelete } from './services/api';
const App = () => {
  const handleGet = async() => {
    await doGet('https://jsonplaceholder.typicode.com/posts/');
    console.log('processa. resposta doGet')
  };

  const handlePost = () => {
    doPost('https://jsonplaceholder.typicode.com/posts/', {
      title:'foo',
      body:'bar',
      userId:1,
    });
  };

  const handlePut = () => {
    doPut('', '');
  };

  const handleDelete = () => {
    doDelete('', '');
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'center' }}>
      <Button title="Get" onPress={handleGet} />
      <Button title="Post" onPress={handlePost} />
      <Button title="Pul" onPress={handlePut} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default App;

