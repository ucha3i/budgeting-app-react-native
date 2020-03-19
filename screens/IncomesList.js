import React, { Component } from "react"
import styled from "styled-components/native"
import { Income } from "../components/Income"
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import api from '../api'

class Incomes extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchIncomes } = this.props
    fetchIncomes()
  }

  render() {
  return (
    <View style={{ backgroundColor: '#F5F5F5', minHeight: '100%' }}>

      <View style={{ height: "89%" }}> 
      {this.props.incomes.map(income => {
        return (<Income key={income["_id"]} income={income.description} amount={income.amount} account={income.account}/>)})}
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Income")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-add-circle"
          />
          <TextSmall>Add income</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Accounts")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-cash"
          />
          <TextSmall>Accounts</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Expenses")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-list"
          />
          <TextSmall>Expenses</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-home"
          />
          <TextSmall>Home</TextSmall>
        </IconButton>
      </View>
    </View>
  )
}}

Incomes.propTypes = {
  incomes: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      account: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

Incomes.navigationOptions = {
  headerStyle: {
    backgroundColor: "#15BB87"
  },
  headerTitle: "Incomes",
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
  color: #15BB87;
  fontFamily: "Avenir Next"
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  incomes: state.incomes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIncomes: api.fetchIncomesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Incomes) 