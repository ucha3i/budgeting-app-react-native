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
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Accounts")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-cash"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
      </View>
    </View>
  )
}}

AddAccount.navigationOptions = {
  headerStyle: {
    backgroundColor: "#FFB722"
  },
  headerTitle: "Add account"
}

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #FFB722;
  border-radius: 5;
  align-items: center;
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
  },
  icon: {
    fontSize: 50,
  }
})

const mapStateToProps = state => ({
  accounts: state.accounts
})

export default connect(mapStateToProps)(AddAccount)  