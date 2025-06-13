import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import acservice from '../../assets/images/acservice.jpg';

const { width, height } = Dimensions.get('window');

const Vendordetails = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('quick'); // 'quick' or 'image'

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <LinearGradient
        colors={['#B10A10', '#1B1B1B']}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Vendor Details</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={styles.mainHeading}>Minsways</Text>
        <Image source={acservice} style={styles.fullImage} resizeMode="cover" />

        <Text style={styles.sectionHeading}>Description</Text>
        <Text style={styles.description}>
          An air cooler is a device that uses water and air to cool down a room or an area.
        </Text>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <FontAwesome name="star" size={16} color="green" />
            <Text style={styles.infoText}>45.5</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="person-circle" size={18} color="#333" />
            <Text style={styles.infoText}>Vengatesh S</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="calendar" size={16} color="#333" />
            <Text style={styles.infoText}>9 months ago</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="eye" size={16} color="#333" />
            <Text style={styles.infoText}>100 views</Text>
          </View>
        </View>

        <View style={styles.addressContainer}>
          <View style={styles.addressHeader}>
            <Entypo name="location-pin" size={20} color="#B10A10" />
            <Text style={styles.addressTitle}>Address</Text>
          </View>
          <Text style={styles.addressText}>
            NO 204, 5th Cross Street, Pallavaram, Chennai - 600066
          </Text>
        </View>

        {/* Touch to Show Tab Buttons */}
        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'quick' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('quick')}
          >
            <Text style={styles.tabText}>Quick Info</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'image' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('image')}
          >
            <Text style={styles.tabText}>Image</Text>
          </TouchableOpacity>
        </View>

        {/* Conditional Rendering */}
        {activeTab === 'quick' ? (
          <View style={styles.quickInfo}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>test@gmail.com</Text>
            <Text style={styles.infoLabel}>Mobile</Text>
            <Text style={styles.infoValue}>6745678976</Text>
          </View>
        ) : (
          <View style={styles.imageBox}>
            <Image source={acservice} style={styles.infoImage} resizeMode="cover" />
          </View>
        )}

        <TouchableOpacity onPress={() => router.push('/components/Enquirynow')} style={styles.enquiryWrapper}>
  <LinearGradient
    colors={['#B10A10', '#1B1B1B']}
    style={styles.enquiryButton}
  >
    <Text style={styles.enquiryText}>Enquiry now</Text>
  </LinearGradient>
</TouchableOpacity>


<View style={styles.actionButtonsContainer}>
  <TouchableOpacity style={styles.plainButton} onPress={() => console.log('WhatsApp tapped')}>
    <Ionicons name="logo-whatsapp" size={18} color="#25D366" style={styles.buttonIcon} />
    <Text style={styles.plainButtonText}>WhatsApp</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.plainButton} onPress={() => console.log('Call tapped')}>
    <Ionicons name="call" size={18} color="#B10A10" style={styles.buttonIcon} />
    <Text style={styles.plainButtonText}>Call</Text>
  </TouchableOpacity>
</View>




      </ScrollView>
    </View>
  );
};

export default Vendordetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 60,
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fullImage: {
    width: '100%',
    height: height * 0.22,
    borderRadius: 10,
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    color: '#333',
    marginBottom: 12,
  },
  infoRow: {
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 4,
  },
  addressContainer: {
    marginTop: 10,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  addressText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    marginBottom: 12,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#e6e6e6',
  },
  activeTab: {
    backgroundColor: '#B10A10',
  },
  tabText: {
    color: '#fff',
    fontWeight: '600',
  },
  quickInfo: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    padding: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  imageBox: {
    backgroundColor: '#F4F4F4',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  infoImage: {
    width: '100%',
    height: height * 0.18,
    borderRadius: 8,
  },
  enquiryWrapper: {
  marginTop: 20,
  alignSelf: 'center',
  width: '100%',
},

enquiryButton: {
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
},

enquiryText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

actionButtonsContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
  marginTop: 16,
},

plainButton: {
  width: 150,       // fixed width
  height: 48,       // fixed height
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  backgroundColor: '#f2f2f2',
},

buttonIcon: {
  marginRight: 6,
},

plainButtonText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#000',
},



});





