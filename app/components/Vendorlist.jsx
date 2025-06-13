import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import acservice from '../../assets/images/acservice.jpg';

const { width, height } = Dimensions.get('window');

const Vendorlist = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Gradient Header */}
      <LinearGradient
        colors={['#B10A10', '#1B1B1B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={width * 0.06} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Vendor List</Text>
        </View>
      </LinearGradient>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search vendors..."
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Filters */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterBox}>
          <Text style={styles.filterText}>Type</Text>
          <Ionicons name="chevron-forward" size={16} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBox}>
          <Text style={styles.filterText}>Sort</Text>
          <Ionicons name="swap-vertical" size={16} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBox}>
          <Text style={styles.filterText}>Top Rated</Text>
          <Ionicons name="star" size={16} color="gold" />
        </TouchableOpacity>
      </View>

      {/* Vendor Box */}
      {/* Vendor Box - Made Entirely Touchable */}
    <TouchableOpacity 
     style={styles.vendorContainer}
     onPress={() => router.push('/components/Vendordetail')}
    >
        <View style={styles.vendorBox}>
          <View style={styles.vendorLeft}>
            <Text style={styles.vendorTitle}>AC Service</Text>
            <Image source={acservice} style={styles.vendorImage} />
          </View>

          <View style={styles.vendorRight}>
            <Text style={styles.vendorCompany}>Minsway</Text>

            <View style={styles.infoRow}>
              <Ionicons name="cash" size={14} color="green" />
              <Text style={styles.infoText}>₹2324</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="person" size={14} color="#555" />
              <Text style={styles.infoText}>Vengatesh</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="location" size={14} color="#888" />
              <Text style={styles.infoText} numberOfLines={2}>
                address no 23 pallavarm ....
              </Text>
            </View>

            <View style={styles.bottomRow}>
              <View style={styles.infoRow}>
                <Ionicons name="calendar" size={13} color="#aaa" />
                <Text style={styles.infoSubText}>9 months ago</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="eye" size={13} color="#aaa" />
                <Text style={styles.infoSubText}>8 views</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Action Buttons Row */}
        {/* <View style={styles.vendorActions}>
            
          <TouchableOpacity onPress={() => console.log('Enquiry tapped')}>
           <LinearGradient colors={['#B10A10', '#1B1B1B']} style={styles.actionButton}>
          <Text style={styles.actionButtonText}> Enquiry now </Text>
          </LinearGradient>
          </TouchableOpacity>


          <TouchableOpacity style={styles.actionButtonOutline}>
            <Ionicons name="logo-whatsapp" size={16} color="green" />
            <Text style={styles.actionButtonIconText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButtonOutline}>
            <Ionicons name="call" size={16} color="#333" />
            <Text style={styles.actionButtonIconText}>Call</Text>
          </TouchableOpacity>
        </View> */}

        {/* Action Buttons Row */}
<View style={styles.vendorActions}>
  <View style={styles.actionWrapper}>
    <TouchableOpacity onPress={() => router.push('/components/Enquirynow')}>
      <LinearGradient colors={['#B10A10', '#1B1B1B']} style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Enquiry now</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>

  <View style={styles.actionWrapper}>
    <TouchableOpacity style={styles.actionButtonOutline}>
      <Ionicons name="logo-whatsapp" size={16} color="green" />
      <Text style={styles.actionButtonIconText}>WhatsApp</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.actionWrapper}>
    <TouchableOpacity style={styles.actionButtonOutline}>
      <Ionicons name="call" size={16} color="#333" />
      <Text style={styles.actionButtonIconText}>Call</Text>
    </TouchableOpacity>
  </View>
</View>

      </TouchableOpacity>
    </View>
  );
};

export default Vendorlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + height * 0.02 : height * 0.07,
    paddingHorizontal: width * 0.04,
    paddingBottom: height * 0.02,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: width * 0.03,
  },
  title: {
    fontSize: width * 0.055,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.015,
  },
  searchInput: {
    backgroundColor: '#f2f2f2',
    borderRadius: width * 0.01,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.05,
    fontSize: width * 0.04,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.02,
  },
  filterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: width * 0.01,
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.04,
    flex: 1,
    marginHorizontal: width * 0.01,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  filterText: {
    fontSize: width * 0.035,
    marginRight: width * 0.015,
    color: '#333',
  },
  vendorContainer: {
    paddingHorizontal: width * 0.04,
    marginTop: height * 0.03,
  },
  vendorBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: width * 0.025,
    padding: width * 0.03,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    minHeight: height * 0.28,
  },
  vendorLeft: {
    flex: 1,
    marginRight: width * 0.03,
  },
  vendorRight: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  vendorTitle: {
    fontSize: width * 0.034,
    fontWeight: '600',
    marginBottom: height * 0.01,
  },
  vendorImage: {
    width: '100%',
    height: height * 0.12,
    borderRadius: width * 0.015,
  },
  vendorCompany: {
    fontSize: width * 0.035,
    fontWeight: '600',
    marginBottom: height * 0.01,
    color: '#111',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.004,
  },
  infoText: {
    fontSize: width * 0.026,
    color: '#333',
    marginLeft: width * 0.015,
    flexShrink: 1,
  },
  infoSubText: {
    fontSize: width * 0.026,
    color: '#555',
    marginLeft: width * 0.01,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.01,
  },
  actionWrapper: {
  flex: 1,
  marginHorizontal: width * 0.01,
},
  vendorActions: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: height * 0.02,
  paddingHorizontal: width * 0.04, // optional for spacing
  alignItems: 'center',
  bottom:70
  },
  actionButton: {
  paddingVertical: height * 0.012,
  borderRadius: width * 0.015,
  alignItems: 'center',
  justifyContent: 'center',
  height: height * 0.055,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: width * 0.033,
    fontWeight: '600',
  },
  actionButtonOutline: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: width * 0.015,
  paddingVertical: height * 0.012,
  height: height * 0.055,
  },
  actionButtonIconText: {
    marginLeft: width * 0.015,
    fontSize: width * 0.033,
    color: '#333',
    fontWeight: '500',
  },
});






