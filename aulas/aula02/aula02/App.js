import {View, StyleSheet} from 'react-native';
import Box from './components/box';

//componente principal do App

const App = () => (
  <View style={styles.container}>
    <Box size={50} color="blue"></Box>
    <Box size={50} color="red"></Box>
    <Box size={50} color="yellow"></Box>
  </View>
);

//estilo objeto StyleSheet
const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column-', justifyContent:'space-evenly', alignItems:"center"},
})

export default App;
