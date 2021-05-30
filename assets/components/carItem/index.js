import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles';
import CarButton from '../buttons/index';



const CarItem = (props) => {

    const {name,tagline,image,taglineCTA}=props.car;
    return(


        <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image} />
        <View style={styles.carInfoContainer}>
          <Text style={styles.carName}>{name}</Text>
          <Text style={styles.carPrice}>{tagline}&nbsp;<Text style={styles.subtitle}>{taglineCTA}</Text></Text>
        </View>

        <View style={styles.buttonContainer}> 
        <CarButton type="primary" buttonText={"CUSTOM ORDER"} onPress={
            ()=>{console.warn("Custom Order");
            }
            }/>
        <CarButton type="secondary" buttonText={"Existing Inventory"} onPress={
            ()=>{console.warn("Existing Inventory")
            }
            }/>

        </View>
      
      </View>

    );
    
    };

export default CarItem;