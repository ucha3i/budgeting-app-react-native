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
      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Category name'}
          onChangeText={name => {
            this.setState({ name: name })
          }}
        />
        <TextInput
          autoCorrect={false}
          style={styles.formInput}
          placeholder={'Description'}
          onChangeText={text => {
            this.setState({ description: text })
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.saveData()}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-save"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Categories")}
            color={"#e85a47"}
            style={styles.icon}
            name="md-pricetags"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
      </View>
    </View>
  )
}}

const IconButton = styled.TouchableOpacity`
  width: 60;
  border: 1px;
  border-color: #d8c3a5;
  border-radius: 5;
  align-items: center;
`

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eae7dc',
    flex: 1,
    justifyContent: "center",
  },
  form: {
    flexDirection: 'column',
    margin: 15,
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
  },
  formInput: {
    backgroundColor: 'transparent',
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderWidth: 1,
    fontSize: 24,
    color: '#8e8d8a',
  },
  formPicker: {
    margin: 10,
    padding: 10,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1
  },
  upper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lower: {
    color: '#8e8d8a',
  },
  title: {
    color: '#413c69',
    fontSize: 21,
    fontWeight: 'bold',
  },
  description: {
    color: '#413c69',
    fontSize: 18,
  },
icon: {
    fontSize: 50,
  }
})

const mapStateToProps = state => ({
  categories: state.categories
})

export default connect(mapStateToProps)(AddCategory)  