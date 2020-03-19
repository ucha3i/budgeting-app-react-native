import React, { Component } from 'react'
import styled from "styled-components/native"
import { Ionicons, FontAwesome } from '@expo/vector-icons'
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
      return (<TextBig> You have {this.props.accounts[0].saldo} kr on your {this.props.accounts[0].name} account. </TextBig>)
    }
    else {
      return (<TextBig> Add account and keep track of your expenses! </TextBig>)
    }
  }

  render() {
    return (

      <View>
        <View style={styles.container}>
        { this.welcomeMessage() }
        </View>
        
        <View style={styles.bottom}>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Expense")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-add"
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
              name="ios-card"
            />
          </IconButton>
        </View>

      </View>
    )
  }}

HomeView.navigationOptions = {
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
  border-color: #e98074;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 50,
  },
  bottom: {
    maxHeight: 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    // backgroundColor: 'lightgrey'
  }
})

const mapStateToProps = state => ({
  accounts: state.accounts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAccounts: api.fetchAccountsList,
  fetchCategories: api.fetchCategoriesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeView) 