import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Category } from "../components/Category"
import { View, StyleSheet, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import expenses from "../reducers/expenses"

const Categories = (props) => {
  return (
    <View>
      {props.categories.map(category => {
        return (<Category key={category["id"]} name={category.name} />);
      })}
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

export const CategoriesList = connect(
  mapStateToProps
)(Categories)