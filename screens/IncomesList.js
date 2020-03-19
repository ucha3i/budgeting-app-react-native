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

      <View style={{ height: "90%" }}> 
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
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Accounts")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-cash"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Expenses")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-list"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#15BB87"}
            style={styles.icon}
            name="ios-home"
          />
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
  headerTitle: "Incomes"
}

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #15BB87;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
  }
})

const mapStateToProps = state => ({
  incomes: state.incomes
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchIncomes: api.fetchIncomesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Incomes) 