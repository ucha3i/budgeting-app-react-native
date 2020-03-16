import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Income } from "../components/Income"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import incomes from "../reducers/incomes"
import { Ionicons } from '@expo/vector-icons'

const Incomes = (props) => {
  return (
    <View style={{ backgroundColor: '#eae7dc', minHeight: '100%' }}>
      {props.incomes.map(income => {
        return (<Income key={income["id"]} income={income.category} amount={income.amount} account={income.account}/>);
      }
      )}

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Income")}
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
          <Ionicons onPress={() => props.navigation.replace("Accounts")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-cash"
          />
        </IconButton>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    incomes: state.incomes
  };
}

Incomes.propTypes = {
  incomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      account: PropTypes.string.isRequired,
      // category: PropTypes.string.isRequired
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

export const IncomesList = connect(
  mapStateToProps
)(Incomes)