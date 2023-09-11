import {View, Text} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
const Splash = () => {
  return (
    <View
        style={{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
      }}>

      <Text style={{fontSize:24, fontWeight: 'bold'}}> Meu App</Text>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

export default Splash;