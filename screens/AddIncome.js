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
    this.props.navigation.replace("Incomes")
  }

  render() {
    const accountData = this.props.accounts.map(account => ({ value: account._id, label: account.name }))

  return (

    <View style={styles.container}>

      <View style={{ height: "90%", justifyContent: "center" }}>
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Amount'}
            placeholderTextColor={'#A8A8A8'}
          keyboardType='numeric'
          onChangeText={number => {
            this.setState({ amount: number })
          }}
        /> 

        <Dropdown
          label='Account'
            fontSize={24}
            baseColor={'#A8A8A8'}
            labelTextStyle={{ fontFamily: "Avenir Next" }}
          data={accountData}
          onChangeText={account => {
            this.setState({ account: account })
          }}
        />

        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
            placeholderTextColor={'#A8A8A8'}
          onChangeText={text => {
            this.setState({ description: text })
          }}
        /> 
      </View>
      </View>

      <View style={styles.bottom}>
        <IconButton>
          <Ionicons onPress={() => this.saveData()}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-save"
          />
          <TextSmall>Save</TextSmall>
        </IconButton>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Incomes")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-card"
          />
          <TextSmall>Incomes</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-home"
          />
          <TextSmall>Home</TextSmall>
        </IconButton>
        
      </View>
    </View>
  )
}}

AddIncome.navigationOptions = {
  headerStyle: {
    backgroundColor: "#15BB87"
  },
  headerTitle: "Add income",
  headerTitleStyle: {
    fontFamily: 'Avenir Next'
  }
}

const IconButton = styled.TouchableOpacity`
  width: 70;
  border-radius: 10;
  align-items: center;
`

const TextSmall = styled.Text`
  font-size: 11; 
  color: #15BB87;
  fontFamily: "Avenir Next"
`

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: 'transparent',
    padding: 15,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  formInput: {
    borderBottomColor: "#A8A8A8",
    borderBottomWidth: 1,
    height: 70,
    fontSize: 24,
    color: '#8e8d8a',
    fontFamily: 'Avenir Next'
  },
  dropdown: {
    fontSize: 24,
    color: '#8e8d8a',
  },
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  expenses: state.expenses,
  accounts: state.accounts,
  description: state.description
})

export default connect(mapStateToProps)(AddIncome)  