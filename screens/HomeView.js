import React from 'react'
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TextInput, Alert } from 'react-native'
// import { createMaterialBottomTabNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MainTabNavigator from 'navigation/MainTabNavigator';

// const Tab = createMaterialBottomTabNavigator();

export const HomeView = (props) => {
  return (
    
    <View>
      
      <TextBig> Your daily budget is ... kr </TextBig>

      {/* <View style={{ width: 200, maxHeight: 80, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
      <Button onPress={() => props.navigation.replace("Expense")}>
        <ButtonText> + </ButtonText>
      </Button>

      <Button onPress={() => props.navigation.replace("Category")}>
        <ButtonText> Cat </ButtonText>
      </Button>
      </View> */}
      
      <View style={{ maxHeight: 80, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center'}}>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Expense")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-add-circle"
          />
        </IconButton>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Expenses")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-list"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Accounts")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-cash"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Incomes")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-list-box"
          />
        </IconButton>
      </View>

      </View>
  )

  /* const clickedIcon = () => {
    alert("Button pressed")
  } */

}

HomeView.navigationOptions = {
  headerTitle: "Keep track of your expenses",
  headerBackTitle: "Back",
  headerStyle: {
    backgroundColor: "black"
  }
}

const View = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #eae7dc;
`

const TextBig = styled.Text`
    color: #e85a47;
    font-size: 40; 
    text-align: center;
    padding-right: 25;
    padding-left: 25;
    margin-bottom: 15;
    line-height: 60;
`

/* const Button = styled.TouchableOpacity`
    background-color: #e98074;
    border-radius: 50;
    margin-top: 30;
    width: 60;
    height: 60;
    padding-top: 16;
    padding-bottom: 6;
    padding-right: 15;
    padding-left: 15;
` */

/* const ButtonText = styled.Text`
    color: #4d4d52;
    font-size: 48;
    line-height: 18;
    margin: 0 auto;
    padding-bottom: 0;
`  */

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #d8c3a5;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
  },
  /* iconsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  } */})


export default HomeView 