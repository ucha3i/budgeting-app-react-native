import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { SingleExpense } from "../components/SingleExpense"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import expenses from "../reducers/expenses"

const Expenses = (props) => {
  return (
    <View>
      {props.expenses.map(expense => {
        // console.log("jestem wydatkiem")
        // console.log(expense)
        return ( <SingleExpense key={expense["id"]} expense={expense}/>);
      }
      )}
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

export const ExpensesList = connect(
  mapStateToProps
)(Expenses)