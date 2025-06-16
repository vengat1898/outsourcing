// components/DrawerContent.jsx
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';

const DrawerContent = ({ navigation }) => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      
      <View style={styles.menuItems}>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => {
            navigation.closeDrawer();
            router.push('/');
          }}
        >
          <Ionicons name="home" size={20} color="#333" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            navigation.closeDrawer();
            router.push('/components/ContactUs');
          }}
        >
          <Ionicons name="mail" size={20} color="#333" />
          <Text style={styles.menuText}>Contact Us</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            navigation.closeDrawer();
            router.push('/components/AboutUs');
          }}
        >
          <Ionicons name="information-circle" size={20} color="#333" />
          <Text style={styles.menuText}>About Us</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            navigation.closeDrawer();
            router.push('/components/TermsConditions');
          }}
        >
          <Ionicons name="document-text" size={20} color="#333" />
          <Text style={styles.menuText}>Terms & Conditions</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => {
            navigation.closeDrawer();
            // Add your logout logic here
            console.log('Logout pressed');
          }}
        >
          <Ionicons name="log-out" size={20} color="#333" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default DrawerContent;