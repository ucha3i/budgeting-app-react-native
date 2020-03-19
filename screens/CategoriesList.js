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
    <View style={{ backgroundColor: '#eae7dc', minHeight: '100%' }}>

      <View style={{ height: "90%" }}> 
      {this.props.categories.map(category => {
        return (<Category key={category["_id"]} name={category.name} />)})}
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => this.props.navigation.replace("Category")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-add-circle"
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

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
  }
})

const mapStateToProps = state => ({
  categories: state.categories
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCategories: api.fetchCategoriesList
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Categories) 