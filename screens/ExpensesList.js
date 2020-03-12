import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { SingleExpense } from "../components/SingleExpense"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import expenses from "../reducers/expenses"
import { Ionicons } from '@expo/vector-icons'

const Expenses = (props) => {
  return (
    <View style={{ backgroundColor: '#eae7dc', minHeight: '100%' }}>
      {props.expenses.map(expense => {
        // console.log("jestem wydatkiem")
        // console.log(expense)
        return ( <SingleExpense key={expense["id"]} expense={expense}/>);
      }
      )}

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => saveData()}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-add"
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
          <Ionicons onPress={() => props.navigation.replace("Category")}
            color={"#e85a47"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton>
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
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

export const ExpensesList = connect(
  mapStateToProps
)(Expenses)