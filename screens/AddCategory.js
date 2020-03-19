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
    this.props.navigation.replace("Categories")
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
          <TextSmall>Save</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Categories")}
            color={"#5C77FF"}
            style={styles.icon}
            name="md-pricetags"
          />
          <TextSmall>Categories</TextSmall>
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Home")}
            color={"#5C77FF"}
            style={styles.icon}
            name="ios-home"
          />
          <TextSmall>Home</TextSmall>
        </IconButton>
      </View>
    </View>
  )
}}

AddCategory.navigationOptions = {
  headerStyle: {
    backgroundColor: "#5C77FF"
  },
  headerTitle: "Add category",
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
  color: #5C77FF;
  fontFamily: "Avenir Next"
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
    fontFamily: 'Avenir Next'
  },
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  categories: state.categories
})

export default connect(mapStateToProps)(AddCategory)  