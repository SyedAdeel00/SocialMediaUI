import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import LogoBox from '../component/LogoBox';
// import { BOTTOM_NAVIGATOR_TAB } from '../../constants/routes';

const OnBoardingScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LogoBox />
      <View>
        <View style={{ marginTop: 30, marginLeft: 30 }}>
          <Text style={{ fontSize: 30, marginTop: 10, color: '#021452' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Klinic - </Text>No
          </Text>
          <Text style={{ fontSize: 30, color: '#021452' }}>appoitmemts or</Text>
          <Text style={{ fontSize: 30, color: '#021452' }}>video calls recorded</Text>
          <Text style={{ fontSize: 14, marginTop: 30 }}>Start quickly and discreetly, whenever</Text>
          <Text style={{ fontSize: 13, marginLeft: 10, marginTop: 5 }}>works best for you and get a treatment</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.skipButton}
          onPress={() => {
            navigation.navigate("LogInScreen");
          }}
        >
          <Text style={styles.buttonText}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  skipButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#021452',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnBoardingScreen1;
