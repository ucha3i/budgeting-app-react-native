import React from 'react'
import styled from "styled-components/native"
// import ImageBackground from 'react-native'

export const HomeView = (props) => {
  return (
    <View>
      
      <Text>Budget</Text>
      <SubText>Keep track of your expenses</SubText>
      <Button onPress={() => props.navigation.replace("Expense")}>
        <ButtonText> New expense</ButtonText>
      </Button>
      <Button onPress={() => props.navigation.replace("Category")}>
        <ButtonText> New category</ButtonText>
      </Button>
      
    </View>
  )
}

HomeView.navigationOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: "papayawhip"
  }
}

const View = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: 30px;
  color: purple;
  padding-bottom: 10px;
`

const SubText = styled.Text`
    color: purple;
    font-size: 25; 
`

const Button = styled.TouchableOpacity`
    background-color: transparent;
    border: solid #fff;
    border-radius: 4;
    margin-top: 30;
    margin-left: 15;
    margin-right: 15;
    width: 200;
    padding-top: 12;
    padding-bottom: 12;
    padding-right: 15;
    padding-left: 15;
`

const ButtonText = styled.Text`
    color: #c70d3a;
    font-size: 22; 
    text-align: center;
`

export default HomeView