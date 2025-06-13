import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import saloon from '../../assets/images/saloon.jpg';
import accupuncture from '../../assets/images/accupuncture.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const homeServices = [
  { name: 'AC Service', image: require('../../assets/images/acservice.jpg') },
  { name: 'Packers', image: require('../../assets/images/packers.jpg') },
  { name: 'Plumber', image: require('../../assets/images/plumber.jpg') },
  { name: 'Electrician', image: require('../../assets/images/electrician.jpg') },
  { name: 'AC Service', image: require('../../assets/images/acservice.jpg') },
  { name: 'Packers', image: require('../../assets/images/packers.jpg') },
  { name: 'Plumber', image: require('../../assets/images/plumber.jpg') },
  { name: 'Electrician', image: require('../../assets/images/electrician.jpg') },
];

const beautyServices = [
  { name: 'Saloon', image: saloon },
  { name: 'Accupuncture', image: accupuncture },
  { name: 'Saloon', image: saloon },
  { name: 'Accupuncture', image: accupuncture },
  { name: 'Saloon', image: saloon },
  { name: 'Accupuncture', image: accupuncture },
];

export default function Categories() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleServicePress = () => {
    router.push('/components/Vendorlist');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#B10A10', '#1B1B1B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Categories</Text>
          <View style={styles.emptyView} />
        </View>
      </LinearGradient>

      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search categories..."
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <View style={styles.categoryTextContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'HOME SERVICE', 'Fitness', 'BEAUTY', 'CONSULTANTS', 'MEDICAL'].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(item)}
              style={{ marginRight: windowWidth * 0.05 }}
            >
              <Text style={[styles.categoryText, selectedCategory === item && styles.categoryTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Home Service Section */}
      <View style={styles.sectionWrapper}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Home Service</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {homeServices.map((item, index) => (
            <TouchableOpacity key={index} onPress={handleServicePress} style={styles.serviceItem}>
              <View style={styles.serviceImageWrapper}>
                <Image source={item.image} style={styles.serviceImage} />
              </View>
              <Text style={styles.serviceText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Beauty Section */}
      <View style={styles.sectionWrapper}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Beauty</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {beautyServices.map((item, index) => (
            <TouchableOpacity key={index} onPress={handleServicePress} style={styles.serviceItem}>
              <View style={styles.serviceImageWrapper}>
                <Image source={item.image} style={styles.serviceImage} />
              </View>
              <Text style={styles.serviceText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <SafeAreaView edges={['bottom']} style={styles.footerSafeArea}>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/components/Home')}>
              <Ionicons name="home" size={24} color="#fff" />
              <Text style={styles.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/components/Categories')}>
              <Ionicons name="grid" size={24} color="#fff" />
              <Text style={styles.footerText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/components/Enquiry')}>
              <Ionicons name="chatbox" size={24} color="#fff" />
              <Text style={styles.footerText}>Enquiry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/components/Profile')}>
              <Ionicons name="person" size={24} color="#fff" />
              <Text style={styles.footerText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.04,
    height: windowHeight * 0.11,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    padding: windowWidth * 0.01,
  },
  headerTitle: {
    fontSize: windowWidth * 0.048,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyView: {
    width: windowWidth * 0.15,
  },
  searchWrapper: {
    paddingHorizontal: windowWidth * 0.04,
    paddingTop: windowHeight * 0.01,
    paddingBottom: windowHeight * 0.02,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: windowWidth * 0.025,
    height: windowHeight * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: windowWidth * 0.015,
  },
  searchInput: {
    flex: 1,
    fontSize: windowWidth * 0.04,
    color: '#000',
  },
  categoryTextContainer: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowHeight * 0.01,
    marginHorizontal: windowWidth * 0.04,
    marginBottom: windowHeight * 0.015,
  },
  categoryText: {
    fontSize: windowWidth * 0.035,
    color: '#888',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#B10A10',
    fontWeight: '700',
  },
  sectionWrapper: {
    marginTop: windowHeight * 0.015,
    marginHorizontal: windowWidth * 0.04,
  },
  sectionHeader: {
    marginBottom: windowHeight * 0.01,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceItem: {
    marginRight: windowWidth * 0.04,
    alignItems: 'center',
  },
  serviceImageWrapper: {
    width: windowWidth * 0.18,
    height: windowWidth * 0.18,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: windowHeight * 0.005,
  },
  serviceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  serviceText: {
    fontSize: windowWidth * 0.035,
    color: '#333',
    textAlign: 'center',
    maxWidth: windowWidth * 0.22,
  },
  footerContainer: {
    backgroundColor: '#B10A10',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerSafeArea: {
    backgroundColor: '#B10A10',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: windowHeight * 0.015,
    paddingBottom: Platform.OS === 'ios' ? windowHeight * 0.03 : windowHeight * 0.015,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: windowWidth * 0.03,
    marginTop: windowHeight * 0.005,
  },
});

