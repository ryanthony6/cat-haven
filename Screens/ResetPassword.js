import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Set new password</Text>
          <Text style={styles.subtitle}>Create a new password. Ensure it differs from previous ones for security</Text>
          
          <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#626262"
            secureTextEntry
          />

          <TextInput 
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#626262"
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.resetpassButton}>
            <Text style={styles.resetpassButtonText}>Update Password</Text>
          </TouchableOpacity>

          <Text style={styles.footerHeader}>
            Developed by
          </Text>
          <Text style={styles.footerTitle}>
            DEVIVE GUYS
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#004AAD',
    marginBottom: 10,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: '#F1F4FF',
  },
  resetpassButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#004AAD',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 260,
  },
  resetpassButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerHeader: {
    fontSize: 18,
    color: '#494949',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  footerTitle: {
    fontSize: 18,
    color: '#494949',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});