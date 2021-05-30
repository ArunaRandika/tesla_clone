import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./styles";

const CarButton =  (props) => {
    const {type,buttonText,onPress}=props;
 
    const backGroundColor =type==='primary'?'#171A20CC':'#FFFFFFA6';
    const textColor=type==='primary'?'#FFFFFF':'#171A20';



    
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[styles.button,{backgroundColor:backGroundColor}]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text,{color:textColor}]}>{buttonText}
        
        </Text>
      </Pressable>
    </View>
  );
};

export default CarButton;
