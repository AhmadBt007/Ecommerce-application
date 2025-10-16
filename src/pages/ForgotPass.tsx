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
// icons
import BackArrow from '../assets/images/backArrow.svg'; // ✅ SVG import
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ForgotPass: React.FC = () => {
  const navigation =useNavigation()
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
        <Text style={styles.heading}>Forgot Password</Text>

        {/* Input Fields */}
        <View>
          
          <Text style={styles.label}>Please enter your email address.you will receive a link to create a new password via email</Text>
          <TextInput
            placeholder="yourEmail@gmail.com"
            placeholderTextColor="#999"
            style={styles.input}
          />

        </View>

        
        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Send</Text>
        </TouchableOpacity>

        

         
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001233' },
  scrollContainer: { paddingHorizontal: 0, paddingBottom: 50 },
  backArrow: { fontSize: 22, marginTop: 10, color: '#0466c8' },
  heading: { fontSize: 40, fontWeight: '900', marginTop: 10, marginBottom: 20, color: '#0466c8', paddingLeft: 13 },
  formContainer: { width: '100%', paddingLeft: 10, paddingRight: 10,borderColor:'white',borderWidth:10 },
  label: { fontSize: 15, color: '#979dac', marginBottom: 17, marginLeft: 6,marginTop:100 },
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
    marginLeft:10,
    marginRight:10
  },
  loginRedirect: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  redirectText: { color: '#e3f2fd', textDecorationLine: 'underline', textDecorationColor: 'red', fontSize: 15 },
  signUpBtn: {
    backgroundColor: '#2a6f97',
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
