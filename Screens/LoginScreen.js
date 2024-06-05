import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you've</Text>
      <Text style={styles.p1}>been missed!</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#626262"
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#626262"
        secureTextEntry
      />
      
      <TouchableOpacity onPress = {() => navigation.push('ForgotPassword')} style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.push('Register')}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>
      
      <Text style={styles.continueText}>Or continue with</Text>
      
      <View style={styles.socialIcons}>
        <FontAwesome name="google" size={24} color="black" />
        <FontAwesome name="facebook" size={24} color="black" style={styles.icon} />
        <FontAwesome name="twitter" size={24} color="black" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  p1: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 100,
  },

  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: '#F1F4FF',
  },

  forgotPasswordContainer: {
    width: '100%', 
    alignItems: 'flex-end', // Memposisikan ke kanan
    marginBottom: 30,
    marginTop: 10,
  },

  forgotPassword: {
    fontWeight: 'bold',
    color: '#1D4ED8',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#004AAD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccount: {
    fontSize: 18,
    color: '#000',
    marginBottom: 70,
    fontWeight: 'bold',
  },
  continueText: {
    color: '#004AAD',
    marginBottom: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  icon: {
    marginLeft: 20,
  },
});