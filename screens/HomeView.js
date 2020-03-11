import React from 'react'
import styled from "styled-components/native"
import { LinearGradient } from "expo-linear-gradient";

export const HomeView = (props) => {
  return (
    <LinearGradient
      colors={["#f08", "#d5e", "#91f", "#70f", "#40f", "#05f", "#09f"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onStartShouldSetResponder={() => reset()}
    >
    <View>
    

      <Text>Budget</Text>
      <SubText>Keep track of your expenses</SubText>
      <Button onPress={() => props.navigation.replace("Expense")}>
        <ButtonText> New expense</ButtonText>
      </Button>
      <Button onPress={() => props.navigation.replace("Category")}>
        <ButtonText> New category</ButtonText>
      </Button>
      
      
    </View>
    </LinearGradient>
  )
}

HomeView.navigationOptions = {
  headerTitle: "",
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
`

const Text = styled.Text`
  font-size: 30px;
  color: purple;
  padding-bottom: 10px;
`

const SubText = styled.Text`
    color: purple;
    font-size: 25; 
`

const Button = styled.TouchableOpacity`
    background-color: transparent;
    border: solid #fff;
    border-radius: 4;
    margin-top: 30;
    margin-left: 15;
    margin-right: 15;
    width: 200;
    padding-top: 12;
    padding-bottom: 12;
    padding-right: 15;
    padding-left: 15;
`

const ButtonText = styled.Text`
    color: #c70d3a;
    font-size: 22; 
    text-align: center;
`

export default HomeView 


/* import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('assets/background.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      >

        <View style={[styles.section, styles.sectionLarge]}>

          <View style={styles.priceContainer}>
            <View style={{ flexDirection: 'row' }}>
              <Text size={30} bold white style={styles.title}>
                Your budget is 500 kr
              </Text>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
});
 */