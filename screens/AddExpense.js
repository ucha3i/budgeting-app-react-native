import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import styled from "styled-components"
import { connect } from 'react-redux'

export const AddExpense = (props) => {
  const [expense, setExpense] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const saveData = () => {
    if (expense == "") {
      Alert.alert("Fill the expense")
      return
    }
    
    if (category == "") {
      Alert.alert("Fill the category")
      return
    }
  
    expenses.push(new expense(lastId + 1, expense, description, { 'category': category, }))
    Alert.alert('Expense saved!')
  }

  return (
    
    
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Amount'}
          onChangeText={number => {
            setExpense(number)
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
          onChangeText={text => {
            setDescription(text)
          }}
        />

        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Category'}
          onChangeText={text => {
            setCategory(text)
          }}
        />

        <Button onPress={() => saveData()}>
          <ButtonText> Save expense! </ButtonText>
        </Button>

        <Button onPress={() => props.navigation.replace("Expenses")}>
          <ButtonText> All expenses </ButtonText>
        </Button>

        <Button onPress={() => props.navigation.replace("Home")}>
          <ButtonText> Back </ButtonText>
        </Button>

      </View>

    </View>
  )
}

const Button = styled.TouchableOpacity`
  background-color: transparent;
  border: solid #fff;
  border-radius: 4;
  margin-top: 30;
  margin-left: 0;
  margin-right: 0;
  padding-top: 10;
  padding-bottom: 10;
  padding-right: 8;
  padding-left: 8;
`
const ButtonText = styled.Text`
    color: #c70d3a;
    font-size: 22; 
    text-align: center;
`
const styles = StyleSheet.create({
  container: {
    /* backgroundColor: "pink", */
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
  },
  formInput: {
    backgroundColor: 'transparent',
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderWidth: 1,
    fontSize: 24,
    color: 'white',
  },

  formPicker: {
    margin: 10,
    padding: 10,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },

  upper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lower: {
    color: '#f4b0c7',
  },
  title: {
    color: '#413c69',
    fontSize: 21,
    fontWeight: 'bold',
  },
  description: {
    color: '#413c69',
    fontSize: 18,
  },
  icon: {
    fontSize: 50,
  },
  iconsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }

})