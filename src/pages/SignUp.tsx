import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// navigation
import { useNavigation } from '@react-navigation/native';
// icons
import BackArrow from '../assets/images/backArrow.svg'; // ✅ SVG import
import Google from '../assets/images/google.svg'
import Facebook from '../assets/images/fb.png'
const { width } = Dimensions.get('window');
// pages
import Login from './Login';
const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* ✅ Back Arrow (correct position & icon name) */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow width={28} height={28} fill="#979dac" style={styles.backArrow} />
        </TouchableOpacity>
        {/* Heading */}
        <Text style={styles.heading}>SignUp</Text>

        {/* Input Fields */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Mr. Muffin"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="mrmuff@gmail.com"
            placeholderTextColor="#999"
            style={styles.input}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="*** ***"
            placeholderTextColor="#999"
            style={styles.input}
          />

        </View>

        <View style={styles.loginRedirect} >
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.redirectText}>Already have account?{' '}
              <Text style={{textDecorationLine:'underline',color:'blue'}}>
                Log In
              </Text>

            </Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign up with social account</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Google />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={require('../assets/images/fb.png')}
              style={{ width: 50, height: 50 }}
            />

          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollContainer: { paddingHorizontal: 0, paddingBottom: 50 },
  backArrow: { fontSize: 22, marginTop: 10, color: '#0466c8' },
  heading: { fontSize: 40, fontWeight: '900', marginTop: 10, marginBottom: 20, paddingLeft: 13 },
  formContainer: { width: '100%', paddingLeft: 10, paddingRight: 10 },
  label: { fontSize: 18, color: '#979dac', marginBottom: 5, marginLeft: 4 },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
  },
  loginRedirect: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  redirectText: { textDecorationColor: 'red', fontSize: 15 },
  signUpBtn: {
    backgroundColor: '#8e6def',
    paddingVertical: 14,
    borderRadius: 30,
    width: width * 0.8,
    alignSelf: 'center',
    marginVertical: 15,
  },
  signUpText: { color: '#fff', fontSize: 18, fontWeight: '700', textAlign: 'center' },
  orText: { textAlign: 'center', color: '#777', marginVertical: 15, fontSize: 14 },
  socialContainer: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  socialIcon: { width: 30, height: 30, resizeMode: 'contain' },
});
