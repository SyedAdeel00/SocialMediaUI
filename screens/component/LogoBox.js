import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoBox = () => {
  return (
    <>
    <View style={styles.parentContainer}>
        <Text style={styles.parentText}>Logo</Text>
      </View>
      <View style={styles.childContainer}>
      <Text style={styles.childText}>Ispum</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: 190,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#021452',
  },
  childContainer: {
    width: 100,
    height: 40,
    marginTop:-45,
    marginLeft:70,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childText: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:14,
    marginLeft:25,
    fontWeight:'bold'
  },
});

export default LogoBox;
