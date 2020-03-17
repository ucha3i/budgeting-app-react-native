import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { SingleAccount } from "../components/SingleAccount"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import accounts from "../reducers/accounts"
import { Ionicons } from '@expo/vector-icons'

const Accounts = (props) => {
  return (
    <View style={{ backgroundColor: '#eae7dc', minHeight: '100%' }}>
      {props.accounts.map(account => {
        
        return (<SingleAccount key={account["_id"]} name={account.name} saldo={account.saldo} />);
      }
      )}

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Account")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-add-circle"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Expenses")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-list"
          />
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
      // id: PropTypes.number.isRequired,
      // name: PropTypes.text.isRequired, 
      saldo: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #d8c3a5;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
  }
})

export const AccountsList = connect(
  mapStateToProps
)(Accounts)