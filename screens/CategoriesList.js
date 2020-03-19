import React, { Component } from "react"
import styled from "styled-components/native"
import { Category } from "../components/Category"
import { View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import api from '../api'

class Categories extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { fetchCategories } = this.props
    fetchCategories()
  }

  render() {
  return (
    <View style={{ backgroundColor: '#F5F5F5', minHeight: '100%' }}>

      <View style={{ height: "89%" }}> 
      {this.props.categories.map(category => {
        return (<Category key={category["_id"]} name={category.name} />)})}
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Category")}
            color={"#5C77FF"}
            style={styles.icon}
            name="ios-add-circle"
          />
          <TextSmall>Add category</TextSmall>
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

Categories.navigationOptions = {
  headerStyle: {
    backgroundColor: "#5C77FF"
  },
  headerTitle: "Categories",
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
  color: #5C77FF;
  fontFamily: "Avenir Next"
`

const styles = StyleSheet.create({
  icon: {
    fontSize: 48,
  }
})

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCategories: api.fetchCategoriesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Categories) 