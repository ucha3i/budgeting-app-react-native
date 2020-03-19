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
      return (<TextBig style={{ color: "#111111", fontWeight: "500" }}> You have <TextBig style={{ color: "#FFB722", fontWeight: "600" }}>{this.props.accounts[0].saldo} kr</TextBig> on your {this.props.accounts[0].name} account. </TextBig>)
    }
    else {
      return (<TextBig style={{ fontWeight: "500" }}> Add account and keep track of your expenses! </TextBig>)
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
              color={"#FFB722"}
              style={styles.icon}
              name="ios-add"
            />
            <TextSmall>Add expense</TextSmall>
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Expenses")}
              color={"#FFB722"}
              style={styles.icon}
              name="ios-list"
            />
            <TextSmall>Expenses</TextSmall>
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Accounts")}
              color={"#FFB722"}
              style={styles.icon}
              name="ios-cash"
            />
            <TextSmall>Accounts</TextSmall>
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => this.props.navigation.replace("Incomes")}
              color={"#FFB722"}
              style={styles.icon}
              name="ios-card"
            />
            <TextSmall>Incomes</TextSmall>
          </IconButton>
        </View>

      </View>
    )
  }}

HomeView.navigationOptions = {
  headerStyle: {
    backgroundColor: "#FFB722"
  },
  headerTitle: ""
}

const View = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
`

const TextBig = styled.Text`
  font-size: 40; 
  text-align: center;
  padding-right: 25;
  padding-left: 25;
  margin-bottom: 15;
  line-height: 60;
  fontFamily: "Avenir Next"
`

const IconButton = styled.TouchableOpacity`
  width: 70;
  border-radius: 10;
  align-items: center;
`

const TextSmall = styled.Text`
  font-size: 11; 
  color: #FFB722;
  fontFamily: "Avenir Next"
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 48,
  },
  bottom: {
    maxHeight: 90,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    // backgroundColor: '#A1A5B9'
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