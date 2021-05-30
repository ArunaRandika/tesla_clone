import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get('window').height,
      },
    
      carInfoContainer: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    
      },
      carName: {
        fontSize: 40,
        fontWeight: "600",
      },
      carPrice: {
        fontSize: 16,
       color:'#5c5e62'
    
      },
      image:{
        width:'100%', 
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonContainer: {
          position:'absolute',
          bottom:50,
          width:'100%'
      },
      subtitle:{
          textDecorationLine:'underline',
       
      }
})

export default styles;