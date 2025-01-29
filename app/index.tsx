import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from "react-native";
import { Colors } from "./constants/Colors";
import { useState } from "react";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

export default function Index() {
  const [minmA, setMinmA] = useState('')
  const [maxmA, setMaxmA] = useState('')
  const [minPPM, setMinPPM] = useState('')
  const [maxPPM, setMaxPPM] = useState('')
  const [checkCurrent, setCheckCurrent] = useState('')
  const [checkPPM, setcheckPPM] = useState('')
  return (
    <View style={{flex: 0, flexDirection: "column", backgroundColor: "#fefefe",}}>     
    <View style={styles.row}>
        <Image source={require('../assets/images/function.png')}></Image>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Analog Output Calculator</Text>
          <Text style={styles.genericText}>developed by Isaac 😎</Text>
        </View>
      </View>
      <View style={styles.calcBox}>
        <View style={styles.calcInnerBox}>
        <Text style={styles.titleText}>Enter your Values below!</Text>
        <View style={styles.centerGraphic}>
          <Text style={styles.titleText}>Results</Text>
          <View style={
            {
              flex: styles.row.flex,
              flexDirection: styles.row.flexDirection,
              marginTop: 35,
              columnGap: 10,
              justifyContent: "center",
            }
          }>
          <View style={styles.col}>
            <Text style={styles.resultBoxTitle}>Check PPM</Text>
            <Text style={styles.resultBox}>{checkPPM}</Text>
          </View>

          </View>
        </View>
        <View style={styles.inputBox}>
          <View style={{
            flex: styles.row.flex,
            flexDirection: styles.row.flexDirection,
            columnGap: 20,
          }}>
            <View style={styles.col}>
              <Text style={styles.inputBoxTitle}> Min mA</Text>
              <TextInput placeholder="mA"style={styles.textBox} onChangeText={text => setMinmA(text)}></TextInput>
            </View>
            <View style={styles.col}>
              <Text style={styles.inputBoxTitle}> Max mA</Text>
              <TextInput placeholder="mA"style={styles.textBox} onChangeText={text => setMaxmA(text)}></TextInput>
            </View>
          </View>
          <View style={{
            flex: styles.row.flex,
            flexDirection: styles.row.flexDirection,
            columnGap: 20,
          }}>
            <View style={styles.col}>
              <Text style={styles.inputBoxTitle}> Min ppm</Text>
              <TextInput placeholder="ppm"style={styles.textBox} onChangeText={text => setMinPPM(text)}></TextInput>
            </View>
            <View style={styles.col}>
              <Text style={styles.inputBoxTitle}> Max ppm</Text>
              <TextInput placeholder="ppm"style={styles.textBox} onChangeText={text => setMaxPPM(text)}></TextInput>
            </View>
          </View>
          <View style={{
            flex: styles.row.flex,
            flexDirection: styles.row.flexDirection,
            columnGap: 20,
          }}>
            <View style={styles.col}>
              <Text style={styles.inputBoxTitle}> Check Current </Text>
              <TextInput placeholder="Current"style={styles.textBox} onChangeText={text => setCheckCurrent(text)}></TextInput>
            </View>
          </View>

        </View>
        <View style={styles.calcButtonBox}>
          <Pressable 
          onPress={() => {
            setcheckPPM(calculate(minmA, maxmA, maxPPM, minPPM, checkCurrent));
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#2f299e' : '#2f27ce',
              transform: pressed ? 'translateY(-1px)' : 'translateY(0)'
            },
            styles.calcButton
          ]}>
          {({pressed}) => (
            <Text style={styles.calcButtonText}>{pressed ? 'Calculating!' : 'Calculate'}</Text>
          )}
            
          </Pressable>
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
    flex: 0,
    flexDirection: "column",
    marginTop: 20,
    width: "100%",
    height: "40%",
    backgroundColor: "#fbfbfe",
    textAlign: "center",
  },
  inputBox: {
    marginTop: 20,
    flex: 0,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "40%",
    borderRadius: 15,
    backgroundColor: "#efefef"
  },
  resultBox: {
    textAlign:"center",
    padding: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#005679",
    borderWidth: 1,
    margin: "auto",
    width: 130,
    height: 40,
    backgroundColor: "#abcc"
    
  },
  inputBoxTitle: {
    marginTop: 10,
    marginBottom: 1,
  },
  resultBoxTitle: {
    marginBottom: 10,
    textAlign: "center",
  },
  calcButton: {
    borderWidth: 1,
    borderColor: "#dedcff",
    padding: 4,
    width: 160,
    height: 40,
    color: "#fdfdfd",
    borderRadius: 15,
  },
  calcButtonBox: {
    marginTop: 30,
    height: 60,
    borderRadius: 10,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calcButtonText: {
    color: "#ffffff",
    alignSelf: "center",
    marginTop: 3,
  }

})
function calculate(mmA: string, mxmA: string, mxP: string, mP: string, curr: string){
  try{

  
  var value1 = parseInt(mxP) - parseInt(mP)
  var value2 = parseInt(mxmA) - parseInt(mmA)
  var quotient = value1 / value2
  var value3 = (-1 * quotient) * parseInt(mmA)
    if(isNaN((quotient * parseInt(curr)) + value3)){
      return "Error";
    }
    else{
      return ((quotient * parseInt(curr)) + value3).toString();
    }

  }
  catch{
    return "Error";
  }

}