import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Alert } from 'react-native'
import styled from "styled-components"
import { Ionicons } from '@expo/vector-icons'
import api from '../api'
import { connect } from 'react-redux'

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    }
  }

  saveData() {
    if (this.state.name == "") {
      Alert.alert("Fill the category")
      return
    }

    api.saveCategory({
      name: this.state.name,
      description: this.state.description
    })

    Alert.alert('New category added!')
  } 

  render() {
  return (
    <View style={styles.container}>

      <View style={{ height: "90%", justifyContent: "center" }}>
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Category name'}
            placeholderTextColor={'#A8A8A8'}
          onChangeText={name => {
            this.setState({ name: name })
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
            placeholderTextColor={'#A8A8A8'}
          onChangeText={text => {
            this.setState({ description: text })
          }}
        />
      </View>
      </View>

      <View style={styles.bottom}>
        <IconButton>
          <Ionicons onPress={() => this.saveData()}
            color={"#5C77FF"}
            style={styles.icon}
            name="ios-save"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Categories")}
            color={"#5C77FF"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#5C77FF"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
      </View>
    </View>
  )
}}

AddCategory.navigationOptions = {
  headerStyle: {
    backgroundColor: "#5C77FF"
  },
  headerTitle: "Add category"
}

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #5C77FF;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: 'transparent',
    padding: 15,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center'
  },
  formInput: {
    borderBottomColor: "#A8A8A8",
    borderBottomWidth: 1,
    height: 70,
    fontSize: 24,
    color: '#8e8d8a',
  },
  icon: {
    fontSize: 50,
  }
})

const mapStateToProps = state => ({
  categories: state.categories
})

export default connect(mapStateToProps)(AddCategory)  