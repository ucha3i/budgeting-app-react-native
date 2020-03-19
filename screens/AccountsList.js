import React from "react"
import styled from "styled-components/native"
import { SingleAccount } from "../components/SingleAccount"
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'

const Accounts = (props) => {
  return (
    <View style={{ backgroundColor: '#F5F5F5', minHeight: '100%' }}>

      <View style={{ height: "89%" }}> 
      {props.accounts.map(account => {
        return (<SingleAccount key={account["_id"]} name={account.name} saldo={account.saldo} />)})}
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Account")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-add-circle"
          />
          <TextSmall>Add account</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Expenses")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-list"
          />
          <TextSmall>Expenses</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Incomes")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-card"
          />
          <TextSmall>Incomes</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Home")}
            color={"#FFB722"}
            style={styles.icon}
            name="ios-home"
          />
          <TextSmall>Home</TextSmall>
        </IconButton>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
}

Accounts.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      saldo: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

Accounts.navigationOptions = {
  headerStyle: {
    backgroundColor: "#FFB722"
  },
  headerTitle: "Accounts",
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
  icon: {
    fontSize: 48,
  }
})

export const AccountsList = connect(
  mapStateToProps
)(Accounts)