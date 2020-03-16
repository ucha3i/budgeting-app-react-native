import React, { Component } from 'react'
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import api from '../api'
import { bindActionCreators } from 'redux'

class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchAccounts } = this.props
    fetchAccounts()
  }

  render() {
    return (

      <View>

        <TextBig> Your daily budget is {this.props.accounts[0].saldo} kr </TextBig>

        <View style={{ maxHeight: 80, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
          <IconButton>
            <Ionicons onPress={() => props.navigation.replace("Expense")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-add-circle"
            />
          </IconButton>
          <IconButton>
            <Ionicons onPress={() => props.navigation.replace("Expenses")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-list"
            />
          </IconButton>

          <IconButton>
            <Ionicons onPress={() => props.navigation.replace("Accounts")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-cash"
            />
          </IconButton>

          <IconButton>
            <Ionicons onPress={() => props.navigation.replace("Incomes")}
              color={"#e85a47"}
              style={styles.icon}
              name="ios-list-box"
            />
          </IconButton>
        </View>

      </View>
    )
  }
}

HomeView.navigationOptions = {
  headerTitle: "Keep track of your expenses",
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
  fetchAccounts: api.fetchAccountsList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeView) 