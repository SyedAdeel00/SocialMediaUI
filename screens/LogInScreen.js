import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import { Checkbox } from 'native-base';
import LogoBox from './component/LogoBox';
import { BOTTOM_NAVIGATOR_TAB } from '../constants/routes';

const LogInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <LogoBox/>
      </View>
      <Text style={styles.loginText}>Log In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email / Phone Number"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      <View style={styles.row}>
        <Checkbox checked={false} color="green"/>
        <Text style={styles.rememberMeText}>Remember Me</Text>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
      <Pressable
        style={styles.loginButton}
        onPress={() => {navigation.navigate(BOTTOM_NAVIGATOR_TAB)}}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </Pressable>
      <View style={styles.now}>
        <Text style={styles.registerText}>Don't Have an Account?</Text>
        <Text style={styles.registerNowText}>Register Now!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems:'center'
  },
  logo:{
    top:'-22%',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#021452',
    bottom:'10%'
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal:120,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -15
  },
  now: {
    flexDirection: 'row',
    alignItems: 'center',
    top:'10%'
  },
  rememberMeText: {
    marginLeft: 10,
    color:'gray'
  },
  forgotPasswordText: {
    flex: 1,
    textAlign: 'right',
    color: 'gray',
  },
  loginButton: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    top:'5%',
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // This is for Android shadow
  },  
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    marginRight: 5,
  },
  registerNowText: {
    color: 'green',
    fontWeight:'600'
  },
});

export default LogInScreen;
