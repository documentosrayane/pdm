import { View } from 'react-native';

//componente
const Box = (props) => {
  //estilo inline
  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    //flex:1,
    backgroundColor: props.color,
    
  };
  return <View style={boxStyle}></View>;
};

export default Box;