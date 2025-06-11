import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Platform,
  StatusBar,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Import images
import acservice from '../../assets/images/acservice.jpg';
import lawyer from '../../assets/images/lawyer.jpg';
import saloon from '../../assets/images/saloon.jpg';
import electrician from '../../assets/images/electrician.jpg';
import plumber from '../../assets/images/plumber.jpg';
import gym from '../../assets/images/gym.jpg';
import packers from '../../assets/images/packers.jpg';
import accupuncture from '../../assets/images/accupuncture.jpg';
import electrician1 from '../../assets/images/electrician.jpg';
import plumber1 from '../../assets/images/plumber.jpg';
import fitnessbackgroung from '../../assets/images/fitnessbackgroung.jpg';
import football from '../../assets/images/football.jpg';
import yoga from '../../assets/images/yoga.jpg';
import ads from '../../assets/images/ads.png';
import dentist from '../../assets/images/dentist.png';
// Category data
const categories = [
  { title: 'AC Service', image: acservice },
  { title: 'Lawyer', image: lawyer },
  { title: 'Salon', image: saloon },
  { title: 'Electrician', image: electrician },
  { title: 'Plumber', image: plumber },
  { title: 'Gym', image: gym },
  { title: 'Packers', image: packers },
  { title: 'Acupuncture', image: accupuncture },
  { title: 'Electrician', image: electrician1 },
  { title: 'Plumber', image: plumber1 },
  { title: 'Packers1', image: packers },
  { title: 'More', image: null, isMore: true },
];

const fitnessCategories = [
  { title: 'Gym', image: gym },
  { title: 'Football', image: football },
  { title: 'Yoga', image: yoga },
  { title: 'Gym1', image: gym },
  { title: 'Football1', image: football },
  { title: 'Yoga1', image: yoga },
];

const homeServices = [
  { title: 'Electrician', image: electrician },
  { title: 'AC Service', image: acservice },
  { title: 'packers', image: packers },
  { title: 'Plumber', image: plumber1 },
  { title: 'Electrician 2', image: electrician },
  { title: 'Plumber', image: plumber1 },
];

const recentSearches = [
  { title: 'Yoga', image: yoga },
  { title: 'Football', image: football },
  { title: 'Salon', image: saloon },
  { title: 'Electrician', image: electrician },
  { title: 'Plumber', image: plumber },
  { title: 'Gym', image: gym },
  { title: 'Packers', image: packers },
  { title: 'Acupuncture', image: accupuncture },
  { title: 'Electrician1', image: electrician1 },
];

const recentAds = [
  { id: 1, image: ads },
  { id: 2, image: ads },
  { id: 3, image: ads },
  { id: 4, image: ads },
];

const trendingCategories = [
  { id: 1, title: 'Dentist', image: dentist },
  { id: 2, title: 'Salon', image: saloon },
  { id: 3, title: 'Dentist 2', image: dentist },
  { id: 4, title: 'Salon 2', image: saloon },
];





export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Header */}
      <LinearGradient
        colors={['#B10A10', '#1B1B1B']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
      </LinearGradient>

      {/* Scrollable Body */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <Text style={styles.heading}>Categories</Text>

        {/* Grid of Categories */}
        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          initialNumToRender={12}
          removeClippedSubviews={true}
          scrollEnabled={false} // Disable FlatList scrolling inside ScrollView
          contentContainerStyle={styles.grid}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.gridItem}>
              {item.isMore ? (
                <>
                  <View style={styles.moreBox}>
                    <Ionicons name="chevron-forward" size={24} color="#000" />
                  </View>
                  <Text style={styles.itemText}>{item.title}</Text>
                </>
              ) : (
                <>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </>
              )}
            </TouchableOpacity>
          )}
        />

        {/* Fitness Section */}
        <View style={styles.fitnessSection}>
            <View style={styles.fitnessHeader}>
              <Text style={styles.fitnessTitle}>Fitness</Text>
              <TouchableOpacity>
                <Ionicons name="chevron-forward-circle" size={24} color="#B10A10" />
              </TouchableOpacity>
            </View>
          <ImageBackground
            source={fitnessbackgroung}
            style={styles.fitnessBackground}
            imageStyle={{ opacity: 0.3, borderRadius: 12 }}
          >
            

            <FlatList
              data={fitnessCategories}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.fitnessList}
              renderItem={({ item }) => (
                <View style={styles.fitnessItem}>
                  <Image source={item.image} style={styles.fitnessImage} />
                  <Text style={styles.fitnessItemText}>{item.title}</Text>
                </View>
              )}
            />
          </ImageBackground>
        </View>
              {/* Home Services Section */}
<View style={styles.homeServicesSection}>
  <View style={styles.homeServicesHeader}>
    <Text style={styles.fitnessTitle}>Home Services</Text>
    <TouchableOpacity>
      <Ionicons name="chevron-forward-circle" size={24} color="#B10A10" />
    </TouchableOpacity>
  </View>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.homeServicesList}
  >
    {homeServices.map((item, index) => (
      <View key={index} style={styles.homeServiceItem}>
        <Image source={item.image} style={styles.homeServiceImage} />
        <Text style={styles.homeServiceText}>{item.title}</Text>
      </View>
    ))}
  </ScrollView>
</View>

{/* Recent Search Section */}
<View style={styles.recentSearchSection}>
  <View style={styles.recentSearchHeader}>
    <Text style={styles.fitnessTitle}>Recent Search</Text>
    <TouchableOpacity>
      <Ionicons name="chevron-forward-circle" size={24} color="#B10A10" />
    </TouchableOpacity>
  </View>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.recentSearchList}
  >
    {recentSearches.map((item, index) => (
      <LinearGradient
        key={index}
        colors={['#B6F6EF', '#DEF4F2']}
        style={styles.recentSearchItem}
      >
        <TouchableOpacity style={styles.closeIcon}>
          <Ionicons name="close" size={12} color="#000" />
        </TouchableOpacity>
        <Image source={item.image} style={styles.recentSearchImage} />
        <Text style={styles.recentSearchText}>{item.title}</Text>
      </LinearGradient>
    ))}
  </ScrollView>
</View>

{/* Recent Ads Section */}
<View style={styles.recentAdsSection}>
  <View style={styles.recentAdsHeader}>
    <Text style={styles.fitnessTitle}>Recent Ads</Text>
    <TouchableOpacity>
      <Ionicons name="chevron-forward-circle" size={24} color="#B10A10" />
    </TouchableOpacity>
  </View>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.recentAdsList}
  >
    {recentAds.map((item) => (
      <Image
        key={item.id}
        source={item.image}
        style={styles.recentAdImage}
        resizeMode="cover"
      />
    ))}
  </ScrollView>
</View>


{/* Trending Categories Near You */}
<View style={styles.trendingSection}>
  <View style={styles.trendingHeader}>
    <Text style={styles.fitnessTitle}>Trending Categories Near You</Text>
    <TouchableOpacity>
      <Ionicons name="chevron-forward-circle" size={24} color="#B10A10" />
    </TouchableOpacity>
  </View>

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.trendingList}
  >
    {trendingCategories.map((item) => (
      <TouchableOpacity key={item.id} style={styles.trendingItem}>
        <Image source={item.image} style={styles.trendingImage} />
        <Text style={styles.trendingText}>{item.title}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>



      </ScrollView>




      {/* Footer */}
      <View style={styles.footerContainer}>
        <SafeAreaView edges={['bottom']} style={styles.footerSafeArea}>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem}>
              <Ionicons name="home" size={24} color="#fff" />
              <Text style={styles.footerText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
              <Ionicons name="grid" size={24} color="#fff" />
              <Text style={styles.footerText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
              <Ionicons name="chatbox" size={24} color="#fff" />
              <Text style={styles.footerText}>Enquiry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem}>
              <Ionicons name="person" size={24} color="#fff" />
              <Text style={styles.footerText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const itemSize = (windowWidth - 32 - 32) / 4; // 32 = horizontal padding (16*2), 32 = total margin (8*4)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 140,
    bottom:60
  },
  menuIcon: {
    marginRight: 12,
    top:30
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    top:30
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  scrollContent: {
    paddingBottom: 20,
    bottom:9
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 16,
    color: '#333',
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  gridItem: {
    width: itemSize,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 6,
  },
  itemText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#333',
    marginTop: 4,
  },
  moreBox: {
    width: 60,
    height: 60,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  fitnessSection: {
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  fitnessBackground: {
    padding: 12,
    borderRadius: 12,
  },
  fitnessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  fitnessTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fitnessList: {
    flexDirection: 'row',
  },
  fitnessItem: {
    alignItems: 'center',
    marginRight: 46,
  },
  fitnessImage: {
  width: 80,
  height: 110,
  borderRadius: 6,
  marginBottom: 6,
  borderWidth: 2,
  borderColor: '#fff',
  },
  fitnessItemText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },

  homeServicesSection: {
  marginHorizontal: 16,
  marginBottom: 20,
},

homeServicesHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

homeServicesList: {
  flexDirection: 'row',
  paddingLeft: 2,
},

homeServiceItem: {
  alignItems: 'center',
  marginRight: 20,
},

homeServiceImage: {
  width: 75,
  height: 100,
  borderRadius: 8,
  marginBottom: 6,
  borderWidth: 2,
  borderColor: '#fff',
},

homeServiceText: {
  fontSize: 12,
  color: '#333',
  fontWeight: 'bold',
},

recentSearchSection: {
  marginHorizontal: 16,
  marginBottom: 20,
},

recentSearchHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

recentSearchList: {
  flexDirection: 'row',
},

recentSearchItem: {
  width: 110,
  height:140,
  padding: 10,
  marginRight: 12,
  borderRadius: 10,
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
},

recentSearchImage: {
  width: 80,
  height: 80,
  borderRadius: 40,
  marginBottom: 6,
},

recentSearchText: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
},

closeIcon: {
  position: 'absolute',
  top: 6,
  right: 6,
  width: 16,
  height: 16,
  borderRadius: 8,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
},

recentAdsSection: {
  marginHorizontal: 16,
  marginBottom: 20,
},

recentAdsHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

recentAdsList: {
  flexDirection: 'row',
},

recentAdImage: {
  width: 360,
  height: 150,
  borderRadius: 6,
  marginRight: 12,
},

trendingSection: {
  marginHorizontal: 16,
  marginBottom: 20,
},

trendingHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

trendingList: {
  flexDirection: 'row',
},

trendingItem: {
  alignItems: 'center',
  marginRight: 20,
},

trendingImage: {
  width: 165,
  height: 130,
  borderRadius: 10,
  marginBottom: 6,
},

trendingText: {
  fontSize: 12,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
},




  footerContainer: {
    backgroundColor: '#B10A10',
  },
  footerSafeArea: {
    backgroundColor: '#B10A10',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});




