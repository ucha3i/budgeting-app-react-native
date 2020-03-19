import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import styled from "styled-components"
import { Ionicons } from '@expo/vector-icons'
import accounts from '../reducers/accounts'
import api from '../api'
import { connect } from 'react-redux'

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      saldo: 0
    }
  }

  saveData() {
    if (this.state.name == "") {
      Alert.alert("Fill the name!")
      return
    }

    if (this.state.saldo == 0) {
      Alert.alert("Fill saldo!")
      return
    }

    api.saveAccount({
      name: this.state.name,
      saldo: this.state.saldo
    })

    Alert.alert('New account added!')
    this.props.navigation.replace("Accounts")
  }

  render() {
  return (
    <View style={styles.container}>

      <View style={{ height: "90%", justifyContent: "center" }}>
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Account name'}
            placeholderTextColor={'#A8A8A8'}
          onChangeText={name => {
            this.setState({ name: name })
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          keyboardType='numeric'
          placeholder={'Saldo'}
            placeholderTextColor={'#A8A8A8'}
          onChangeText={saldo => {
            this.setState({ saldo: saldo })
          }}
        />
      </View>
      </View>

      <View style={styles.bottom}>
        <IconButton>
          <Ionicons onPress={() => this.saveData()}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-save"
          />
          <TextSmall>Save</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Accounts")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-cash"
          />
          <TextSmall>Accounts</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-home"
          />
          <TextSmall>Home</TextSmall>
        </IconButton>
      </View>
    </View>
  )
}}

AddAccount.navigationOptions = {
  headerStyle: {
    backgroundColor: "#FFB722"
  },
  headerTitle: "Add account",
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
  color: #FFB722;
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
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  accounts: state.accounts
})

export default connect(mapStateToProps)(AddAccount)  