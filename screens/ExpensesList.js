import React, { Component } from "react"
import styled from "styled-components/native"
import { SingleExpense } from "../components/SingleExpense"
import { View, StyleSheet } from 'react-native'
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
    <View style={{ backgroundColor: '#F5F5F5', minHeight: '100%' }}>

      <View style={{ height: "90%" }}>  
      {this.props.expenses.map(expense => {
        return (<SingleExpense key={expense["_id"]} category={expense.category} amount={expense.amount} account={expense.account}/>)})}
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Expense")}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-add"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Category")}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-add-circle"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Categories")}
            color={"#FC387A"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
      </View>
    </View>
  )
}}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      category: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
}

Expenses.navigationOptions = {
  headerStyle: {
    backgroundColor: "#FC387A"
  },
  headerTitle: "Expenses"
}

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #FC387A;
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