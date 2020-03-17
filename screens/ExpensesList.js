import React, { Component, useEffect } from "react"
import styled from "styled-components/native"
import { SingleExpense } from "../components/SingleExpense"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import api from '../api'

class Expenses extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchExpenses } = this.props
    fetchExpenses()
  }

  render() {


  return (
    <View style={{ backgroundColor: '#eae7dc', minHeight: '100%' }}>
      {this.props.expenses.map(expense => {
        return (<SingleExpense key={expense["_id"]} category={expense.category} amount={expense.amount} account={expense.account}/>);
      }
      )}

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Expense")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-add-circle"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Categories")}
            color={"#e85a47"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton>
      </View>
    </View>
  )
}
}

/* const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
} */

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.object.isRequired
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

const mapStateToProps = state => ({
  expenses: state.expenses
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchExpenses: api.fetchExpensesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Expenses) 

/* export const ExpensesList = connect(
  mapStateToProps
)(Expenses) */