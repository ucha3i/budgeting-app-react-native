import React, { Component } from 'react'
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import api from '../api'
import { bindActionCreators } from 'redux'

class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchAccounts, fetchCategories } = this.props
    fetchAccounts()
    fetchCategories()
  }

  welcomeMessage() {
    if (this.props.accounts[0] !== undefined ) {
      return (<TextBig> You have {this.props.accounts[0].saldo} kr on your daily account </TextBig>)
    }
    else {
      return (<TextBig> Add account and keep track of your expenses! </TextBig>)
    }
  }

  render() {
    return (

      <View>
        { this.welcomeMessage() }
        
        <View style={{ maxHeight: 80, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Expense")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-add-circle"
            />
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Expenses")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-list"
            />
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Accounts")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-cash"
            />
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Incomes")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-list-box"
            />
          </IconButton>
        </View>
      </View>
    )
  }}

HomeView.navigationOptions = {
  headerTitle: "...",
  headerBackTitle: "Back",
  headerStyle: {
    backgroundColor: "black"
  }
}

const View = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #eae7dc;
`

const TextBig = styled.Text`
    color: #e85a47;
    font-size: 40; 
    text-align: center;
    padding-right: 25;
    padding-left: 25;
    margin-bottom: 15;
    line-height: 60;
`

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
  }})

const mapStateToProps = state => ({
  accounts: state.accounts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccounts: api.fetchAccountsList,
  fetchCategories: api.fetchCategoriesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeView) 