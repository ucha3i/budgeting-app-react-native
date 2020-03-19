import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Alert, Picker } from 'react-native'
import styled from "styled-components"
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Dropdown } from 'react-native-material-dropdown';
import api from '../api'

class AddIncome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      account: null,
      description: ""
    }
  }

  saveData() {
    if (this.state.amount == 0) {
      Alert.alert("Fill the amount!")
      return
    }

    if (this.state.account == null) {
      Alert.alert("Fill the account!")
      return
    }

    if (this.state.description == null) {
      Alert.alert("Fill the description!")
      return
    }

    api.saveIncome({
      amount: this.state.amount,
      account: this.state.account,
      description: this.state.description
    })

    Alert.alert('Income added!')
  }

  render() {
    const accountData = this.props.accounts.map(account => ({ value: account._id, label: account.name }))

  return (

    <View style={styles.container}>

      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Amount'}
          keyboardType='numeric'
          onChangeText={number => {
            this.setState({ amount: number })
          }}
        /> 

        <Dropdown
          label='Account'
          data={accountData}
          onChangeText={account => {
            this.setState({ account: account })
          }}
        />

        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
          onChangeText={text => {
            this.setState({ description: text })
          }}
        /> 
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.saveData()}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-save"
          />
        </IconButton>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Incomes")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-card"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
      </View>

    </View>
  )
}}

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

const mapStateToProps = state => ({
  expenses: state.expenses,
  accounts: state.accounts,
  description: state.description
})

export default connect(mapStateToProps)(AddIncome)  