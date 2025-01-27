import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Colors } from "./constants/Colors";
import { useState } from "react";
export default function Index() {
  return (
    <View
      style={{
        flex: 0,
        flexDirection: "column",
        backgroundColor: "#fefefe",

}}>     <View style={styles.row}>
        <Image source={require('../assets/images/function.png')}></Image>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Joshi's Calculator</Text>
          <Text style={styles.genericText}>developed by Isaac 😎</Text>
        </View>
      </View>
      <View style={styles.calcBox}>
        
        <View style={styles.calcInnerBox}>
        <Text style={styles.titleText}>Enter your Values below!</Text>
        <View style={styles.centerGraphic}></View>
        <View style={styles.inputBox}>
        <TextInput placeholder="Number"style={styles.textBox} onChangeText={newText => console.log(newText)}></TextInput>
        <TextInput placeholder="Number2"style={styles.textBox}></TextInput>
        </View>
  
        </View>
      </View>
    </View>

    
  );
}
const styles = StyleSheet.create({
  titleContainer: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#e0e0e0",

  },
  titleText: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: 200,
    textAlign: "center",
  },
  genericText: {
    color: "#efe00",
    fontWeight: 500,
    fontSize: 16,
    textAlign: "right",
    marginRight: 60,
  },
  calcBox: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#005679",
    height: "100%",
  },
  calcInnerBox: {
    borderRadius: 15,
    width: "90%",
    height: "60%",
    marginTop: "10%",
    backgroundColor: "#fdfdfd",
  },
  row: {
    flex: 0,
    flexDirection: "row",
  },
  col: {
    flex: 0,
    flexDirection: "column",
  },
  textBox: {
    padding: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#005679",
    borderWidth: 1,
    margin: "auto",
    width: 120,
    height: 40,
    backgroundColor: "#abcc"
  },
  centerGraphic: {
    marginTop: 20,
    width: "100%",
    height: "60%",
    backgroundColor: "#ace4",
  },
  inputBox: {
    marginTop: 20,
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "20%",
    borderRadius: 15,
    backgroundColor: "#efefef"
  }

})
