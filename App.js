import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View, ImageBackground, Image } from "react-native";
export default function App(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = ()=>
  {
    Alert.alert(`Dang nhap thanh cong voi user name = ${email}va password = ${password}` );
  }
  
  return(
    <View style={mystyle.container}>
      <ImageBackground source={require('./assets/background.png')} resizeMode="cover" style={styles.image}>
           <Image source={require('./assets/logo3.png')} style={{width: 200,height: 200, alignSelf:"center"}}/>
          <TextInput
            style={mystyle.textInput}
            onChangeText={setEmail}
            placeholder="Nhap user name"
            placeholderTextColor={"yellow"}
            value={email}
            />
          <TextInput
            style={mystyle.textInput}
            onChangeText={setPassword}
            placeholder="Nhap password"
            secureTextEntry
            placeholderTextColor={"yellow"}
            value={password}
            />
          <TouchableHighlight
            style={mystyle.button}
            onPress={onPress}
          >
            <Text style={mystyle.buttonText}>
                Login
            </Text>
          </TouchableHighlight>
          </ImageBackground>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
const mystyle = StyleSheet.create(
  {
    container: {
      flex:1,
      padding: 10
    },
    textInput: {
      borderWidth:3,
      borderColor: "yellow",
      margin:1,
      width: 1500,
      height: 70
    },
    button: {
      backgroundColor: "aqua",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      margin: 5
    },
    buttonText: {
      color: "blue",
      fontSize: 20,
      fontweight: "bold"
    },
  }
)