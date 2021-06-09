import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  // Create a variable which is called counter
  // To change the value of the variable, I will use setCounter method....
  // counter = counter + 1 <-- In React normally you will not use this....
  // the initial value is 0
  const [counter,setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello world . This is my first app</Text>
      <Text style={styles.subHeader}>Im so happy with this app</Text>
      <StatusBar style="auto" />
      <Image style={styles.tinyLogo}
        style={styles.tinyLogo}
        source={{
          uri: 'https://th.bing.com/th/id/OIP._AmoSxeibs6WvAYgIMA2XQHaE-?pid=ImgDet&rs=1',
        }}></Image>
        <Button style={styles.button}
          title="Press me"
          onPress={() =>
            // Alert.alert('Simple Button pressed;)
            // F0r the time being to test on website
          alert('Right button pressed')}
        />
      

      <Text style={styles.subHeader}>Counter example</Text>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={()=> setCounter(counter+1)}>
      <Text style={styles.increment}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setCounter(counter-1)}>
      <Text style={styles.decrement}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setCounter(0)}>  
      <Text style={styles.reset}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:24,
    color:'#f00'
  },
  subHeader:{
    fontSize:18,
    color:'blue',
    marginTop:8
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginTop:8
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10
  },
  increment:{
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10
  },
  decrement:{
    alignItems: "center",
    backgroundColor: "red",
    width:"100%",
    padding: 10
  },
  reset:{
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    width:"100%"
  }
});
