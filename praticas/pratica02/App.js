import {View, StyleSheet} from 'react-native';
import Box from './components/box';

//componente principal do App

const App = () => (
  <View style={[styles.container, styles.flexRow, styles.justifySpaceBetween, styles.justifyCenter]}>
    <Box size={50} color="blue"></Box>
    <Box size={50} color="red"></Box>
    <Box size={50} color="yellow"></Box>
  </View>
);
//estilo objeto StyleSheet
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
});

export default App;