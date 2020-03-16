import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import styled from "styled-components"
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

export const AddIncome = (props) => {
  const [income, setIncome] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [account, setAccount] = useState("")

  const saveData = () => {
    if (income == "") {
      Alert.alert("Fill the amount")
      return
    }

    if (account == "") {
      Alert.alert("Fill the account")
      return
    }

    if (category == "") {
      Alert.alert("Fill the category")
      return
    }

    incomes.push(new income(lastId + 1, income, description, { 'category': category, }))
    Alert.alert('Income saved!')
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
          placeholder={'Account'}
          onChangeText={text => {
            setAccount(text)
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
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
          onChangeText={text => {
            setDescription(text)
          }}
        />
      </View>

      {/* <Button onPress={() => saveData()}>
        <ButtonText> Save expense! </ButtonText>
      </Button>

      <Button onPress={() => props.navigation.replace("Expenses")}>
        <ButtonText> All expenses </ButtonText>
      </Button>

      <Button onPress={() => props.navigation.replace("Home")}>
        <ButtonText> Back </ButtonText>
      </Button> */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => saveData()}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-save"
          />
        </IconButton>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Incomes")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-list-box"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>

        {/* <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Categories")}
            color={"#e85a47"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton> */}
      </View>

    </View>
  )

}
const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #d8c3a5;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae7dc',
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
    color: '#8e8d8a',
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
    color: '#8e8d8a',
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
  /* iconsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }  */

})