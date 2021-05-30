import React from "react";
import { View, Text, FlatList ,Dimensions} from "react-native";
import style from "./styles";
import cars from "./cars";
import CarItem from "../carItem/index";

const CarsList = (props) => {
  return (
    <View style={style.container}>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={cars} 
      renderItem={({ item }) => <CarItem car={item} />}
      snapToAlignment={'start'} 
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}/>
    </View>
  );
};
export default CarsList;
