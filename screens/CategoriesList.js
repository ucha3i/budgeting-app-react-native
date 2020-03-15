import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Category } from "../components/Category"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import expenses from "../reducers/expenses"
import { Ionicons } from '@expo/vector-icons'

const Categories = (props) => {
  return (
    <View style={{ backgroundColor: '#eae7dc', minHeight: '100%' }}>
      {props.categories.map(category => {
        return (<Category key={category["id"]} name={category.name} />);
      })}

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'center' }}>
        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Category")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-add-circle"
          />
        </IconButton>

        <IconButton>
          <Ionicons onPress={() => props.navigation.replace("Home")}
            color={"#e85a47"}
            style={styles.icon}
            name="ios-home"
          />
        </IconButton>
      </View>


    </View>
  )
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
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

export const CategoriesList = connect(
  mapStateToProps
)(Categories)