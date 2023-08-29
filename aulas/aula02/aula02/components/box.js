import { View } from 'react-native';

//componente
const Box = (props) => {
  //estilo inline
  const boxStyle = {
    height: props.size,
    width: props.size,
    //flex:1,
    backgroundColor: props.color,
    
  };
  return <View style={boxStyle}></View>;
};

export default Box;
