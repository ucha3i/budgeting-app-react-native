import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export const SingleExpense = (props) => {

  return (
    <View style={styles.item}>
      <Text
        style={{
          color: '#48506B',
          margin: 7,
          fontSize: 17,
        }}
      >
        {props.amount} kr from {props.account.name} on {props.category.name}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  }
})