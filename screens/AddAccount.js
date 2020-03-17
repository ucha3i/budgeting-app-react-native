import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import styled from "styled-components"
import { Ionicons } from '@expo/vector-icons'
import accounts from '../reducers/accounts'

export const AddAccount = (props) => {
  const [name, setName] = useState("")
  const [saldo, setSaldo] = useState("")

  const saveData = () => {
    if (name == "") {
      Alert.alert("Fill the name!")
      return
    }

    if (saldo == "") {
      Alert.alert("Fill saldo!")
      return
    }

    accounts.push(new account(lastId + 1, { 'name': name, }, saldo))
    Alert.alert('Saldo saved!')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Account'}
          onChangeText={text => {
            setName(text)
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          keyboardType='numeric'
          placeholder={'Saldo'}
          onChangeText={Number => {
            setSaldo(Number)
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => saveData()}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-save"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Categories")}
            color={"#e85a47"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
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
  }
})