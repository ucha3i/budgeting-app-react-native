import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'

export const Income = (props) => {
  return (
    <View style={styles.item}>
      <Text
        style={{
          color: '#48506B',
          margin: 7,
          fontSize: 17,
        }}
      >
        {props.income}: + {props.amount} kr to {props.account.name}
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
  },
})