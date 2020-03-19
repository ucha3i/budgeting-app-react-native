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

      <View style={{ height: "89%" }}>  
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
          <TextSmall>Add expense</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Category")}
            color={"#FC387A"}
            style={styles.icon}
            name="ios-add-circle"
          />
          <TextSmall>Add category</TextSmall>
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
    backgroundColor: "#FC387A",
  },
  headerTitle: "Expenses",
  headerTitleStyle: {
    fontFamily: 'Avenir Next'
  }
}

const IconButton = styled.TouchableOpacity`
  width: 85;
  border-radius: 10;
  align-items: center;
`

const TextSmall = styled.Text`
  font-size: 11; 
  color: #FC387A;
  fontFamily: "Avenir Next"
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  expenses: state.expenses
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchExpenses: api.fetchExpensesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Expenses) 