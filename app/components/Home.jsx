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
import { useRouter } from 'expo-router';
import topbanner from '../../assets/images/bannerimg.png';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 const router = useRouter();

// Calculate responsive sizes based on screen dimensions
const itemSize = (windowWidth - 48) / 4; // 16 padding on each side + 8 margin between items
const fitnessImageSize = windowWidth * 0.2;
const homeServiceImageSize = windowWidth * 0.18;
const recentSearchItemWidth = windowWidth * 0.28;
const recentAdImageWidth = windowWidth * 0.9;
const trendingImageWidth = (windowWidth - 48) / 2; // Two items per row with padding





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
          {/* Top Banner Image */}
     <View style={styles.bannerContainer}>
       <Image 
      source={topbanner} 
      style={styles.bannerImage}
      resizeMode="cover"
    />
    </View>
        {/* Heading */}
        <Text style={styles.heading}>Professions</Text>

        {/* Grid of Categories */}
       <FlatList
  data={categories}
  keyExtractor={(item, index) => index.toString()}
  numColumns={4}
  initialNumToRender={12}
  removeClippedSubviews={true}
  scrollEnabled={false}
  contentContainerStyle={styles.grid}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        if (item.isMore) {
          router.push('/components/Categories');
        } else {
          router.push({
            pathname: '/components/Vendorlist',
            params: { category: item.title } // Passing category name as parameter
          });
        }
      }}
    >
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
        {/* <FlatList
  data={categories}
  keyExtractor={(item, index) => index.toString()}
  numColumns={4}
  initialNumToRender={12}
  removeClippedSubviews={true}
  scrollEnabled={false}
  contentContainerStyle={styles.grid}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        if (item.isMore) {
          router.push('/components/Categories');
        }
      }}
    >
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
/> */}

        {/* Fitness Section */}
        <View style={styles.fitnessSection}>
            <View style={styles.fitnessHeader}>
              <Text style={styles.fitnessTitle}>Fitness</Text>
              <TouchableOpacity >
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
                 <TouchableOpacity 
              style={styles.fitnessItem}
      onPress={() => router.push('/components/Vendorlist')}
    >
      <Image source={item.image} style={styles.fitnessImage} />
      <Text style={styles.fitnessItemText}>{item.title}</Text>
    </TouchableOpacity>
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
      <TouchableOpacity 
    key={index} 
    style={styles.homeServiceItem}
    onPress={() => router.push('/components/Vendorlist')}
  >
    <Image source={item.image} style={styles.homeServiceImage} />
    <Text style={styles.homeServiceText}>{item.title}</Text>
  </TouchableOpacity>
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
      <TouchableOpacity 
        key={index}
        onPress={() => router.push('/components/Vendorlist')}
      >
        <LinearGradient
          colors={['#B6F6EF', '#DEF4F2']}
          style={styles.recentSearchItem}
        >
          <TouchableOpacity 
            style={styles.closeIcon}
            onPress={(e) => {
              e.stopPropagation(); // Prevent the parent TouchableOpacity from triggering
              // Add your close functionality here
              console.log('Close item:', item.title);
              // You might want to remove this item from recentSearches
            }}
          >
            <Ionicons name="close" size={12} color="#000" />
          </TouchableOpacity>
          <Image source={item.image} style={styles.recentSearchImage} />
          <Text style={styles.recentSearchText}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>

{/* Recent Ads Section */}
<View style={styles.recentAdsSection}>
  <View style={styles.recentAdsHeader}>
    <Text style={styles.fitnessTitle}>Recent Ads</Text>
    <TouchableOpacity >
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
      <TouchableOpacity key={item.id} style={styles.trendingItem} onPress={() => router.push('/components/Vendorlist')}>
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
            <TouchableOpacity style={styles.footerItem} onPress={() => router.push('/components/Categories')}>
              <Ionicons name="grid" size={24} color="#fff" />
              <Text style={styles.footerText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.footerItem} onPress={() => router.push('/components/Enquirystatus')}>
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


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: windowWidth * 0.04, // ~16px on standard screen
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: windowHeight * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight * 0.18,
    bottom: windowHeight * 0.06
  },
  menuIcon: {
    marginRight: windowWidth * 0.03,
    top: windowHeight * 0.03
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: windowWidth * 0.025,
    height: windowHeight * 0.05,
    top: windowHeight * 0.03
  },
  searchIcon: {
    marginRight: windowWidth * 0.015,
  },
  searchInput: {
    flex: 1,
    fontSize: windowWidth * 0.04,
    color: '#000',
  },
  scrollContent: {
    paddingBottom: windowHeight * 0.02,
    bottom: windowHeight * 0.01
  },
   bannerContainer: {
    marginHorizontal: windowWidth * 0.03,
    marginTop: windowHeight * 0.025,
    borderRadius: 2,
    overflow: 'hidden',
    // elevation: 3,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    alignItems: 'center', // This will center the image horizontally
  },
  bannerImage: {
    width: windowWidth * 0.90,
    height: windowHeight * 0.17, // Adjust height as needed
    borderRadius: 5,
  },
  heading: {
    fontSize: windowWidth * 0.045,
    fontWeight: 'bold',
    marginVertical: windowHeight * 0.02,
    marginHorizontal: windowWidth * 0.04,
    color: '#333',
  },
  grid: {
    paddingHorizontal: windowWidth * 0.04,
    paddingBottom: windowHeight * 0.025,
  },
  gridItem: {
    width: itemSize,
    margin: windowWidth * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    borderRadius: 8,
    marginBottom: windowHeight * 0.005,
  },
  itemText: {
    fontSize: windowWidth * 0.028,
    textAlign: 'center',
    color: '#333',
    marginTop: windowHeight * 0.005,
  },
  moreBox: {
    width: windowWidth * 0.14,
    height: windowWidth * 0.14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: windowHeight * 0.005,
  },
  fitnessSection: {
    marginHorizontal: windowWidth * 0.04,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: windowHeight * 0.025,
  },
  fitnessBackground: {
    padding: windowWidth * 0.03,
    borderRadius: 5,
  },
  fitnessHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  fitnessTitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    color: '#333',
  },
  fitnessList: {
    flexDirection: 'row',
  },
  fitnessItem: {
    alignItems: 'center',
    marginRight: windowWidth * 0.12,
  },
  fitnessImage: {
    width: fitnessImageSize,
    height: fitnessImageSize * 1.375, // Maintain aspect ratio
    borderRadius: 5,
    marginBottom: windowHeight * 0.007,
    borderWidth: 2,
    borderColor: '#fff',
  },
  fitnessItemText: {
    fontSize: windowWidth * 0.03,
    color: '#333',
    fontWeight: 'bold',
  },
  homeServicesSection: {
    marginHorizontal: windowWidth * 0.04,
    marginBottom: windowHeight * 0.025,
  },
  homeServicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  homeServicesList: {
    flexDirection: 'row',
    paddingLeft: windowWidth * 0.005,
  },
  homeServiceItem: {
    alignItems: 'center',
    marginRight: windowWidth * 0.05,
  },
  homeServiceImage: {
    width: homeServiceImageSize,
    height: homeServiceImageSize * 1.333, // 4:3 aspect ratio
    borderRadius: 8,
    marginBottom: windowHeight * 0.007,
    borderWidth: 2,
    borderColor: '#fff',
  },
  homeServiceText: {
    fontSize: windowWidth * 0.03,
    color: '#333',
    fontWeight: 'bold',
  },
  recentSearchSection: {
    marginHorizontal: windowWidth * 0.04,
    marginBottom: windowHeight * 0.025,
  },
  recentSearchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  recentSearchList: {
    flexDirection: 'row',
  },
  recentSearchItem: {
    width: recentSearchItemWidth,
    height: recentSearchItemWidth * 1.27, // Maintain aspect ratio
    padding: windowWidth * 0.025,
    marginRight: windowWidth * 0.03,
    borderRadius: 10,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentSearchImage: {
    width: recentSearchItemWidth * 0.7,
    height: recentSearchItemWidth * 0.7,
    borderRadius: recentSearchItemWidth * 0.35,
    marginBottom: windowHeight * 0.007,
  },
  recentSearchText: {
    fontSize: windowWidth * 0.03,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: windowHeight * 0.007,
    right: windowHeight * 0.007,
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
    borderRadius: windowWidth * 0.02,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  recentAdsSection: {
    marginHorizontal: windowWidth * 0.04,
    marginBottom: windowHeight * 0.025,
  },
  recentAdsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  recentAdsList: {
    flexDirection: 'row',
  },
  recentAdImage: {
    width: recentAdImageWidth,
    height: recentAdImageWidth * 0.416, // 2.4:1 aspect ratio
    borderRadius: 5,
    marginRight: windowWidth * 0.03,
  },
  trendingSection: {
    marginHorizontal: windowWidth * 0.04,
    marginBottom: windowHeight * 0.025,
  },
  trendingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  trendingList: {
    flexDirection: 'row',
  },
  trendingItem: {
    alignItems: 'center',
    marginRight: windowWidth * 0.05,
  },
  trendingImage: {
    width: trendingImageWidth,
    height: trendingImageWidth * 0.8, // 5:4 aspect ratio
    borderRadius: 5,
    marginBottom: windowHeight * 0.007,
  },
  trendingText: {
    fontSize: windowWidth * 0.03,
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




