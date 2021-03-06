import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import styled from "styled-components"
import { Ionicons } from '@expo/vector-icons'
import { Dropdown } from 'react-native-material-dropdown';
import api from '../api'

class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      account: null,
      category: null,
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

    if (this.state.category == null) {
      Alert.alert("Fill the category!")
      return
    }

    api.saveExpense({
      amount: this.state.amount,
      account: this.state.account,
      category: this.state.category,
      description: this.state.description
    })

    Alert.alert('Expense saved!')
    this.props.navigation.replace("Expenses")
  }

  render(){
  const accountData = this.props.accounts.map(account => ({value: account._id, label: account.name}))
  const categoryData = this.props.categories.map(category => ({ value: category._id, label: category.name }))

  return (
    <View style={styles.container}>
      
      <View style={{height: "90%", justifyContent: "center"}}>
      <View style={styles.form}>
        
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          keyboardType='numeric'
          placeholder={'Amount'}
            placeholderTextColor={'#A8A8A8'}
          onChangeText={number => {
            this.setState({amount: number})
          }}
        />
       
        <Dropdown
          label='Account'
            fontSize={24}
            baseColor={'#A8A8A8'}
            labelTextStyle={{fontFamily:"Avenir Next"}}
          data={accountData}
          style={styles.dropdown}
          onChangeText={account => {
            this.setState({ account: account})
          }}
        />
        
        <Dropdown
          label='Category'
            fontSize={24}
            baseColor={'#A8A8A8'}
            labelTextStyle={{ fontFamily: "Avenir Next" }}
          data={categoryData}
          style={styles.dropdown}
          onChangeText={category => {
            this.setState({ category: category })
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

          {/* <Button
            fontSize={50}
            color={"#FC387A"}
            baseColor={"#FC387A"}
            // onPress={() => this._handlePress()}
            title="Save">
            Save
          </Button> */}

      </View>

      </View>

      <View style={styles.bottom}>
        <IconButton>
          <Ionicons onPress={() => this.saveData()}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-save"
          />
          <TextSmall>Save</TextSmall>
        </IconButton>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Expenses")}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-list"
          />
          <TextSmall>Expenses</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Categories")}
            color={"#FC387A"}
            style={styles.icon}
            name="md-pricetags"
          />
          <TextSmall>Categories</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-home"
          />
          <TextSmall>Home</TextSmall>
        </IconButton>
      </View>

    </View>
  )
}}

AddExpense.navigationOptions = {
  headerStyle: {
    backgroundColor: "#FC387A"
  },
  headerTitle: "Add expense",
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
  color: #FC387A;
  fontFamily: "Avenir Next"
`

/* const Button = styled.Button`
  width: 200;
  padding-top: 100;

` */

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
    fontFamily: 'Avenir Next'
  },
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  expenses: state.expenses,
  accounts: state.accounts,
  categories: state.categories
})

export default connect(mapStateToProps)(AddExpense)  