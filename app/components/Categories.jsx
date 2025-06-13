// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Platform,
//   StatusBar,
//   Dimensions,
//   FlatList,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRouter } from 'expo-router';

// import saloon from '../../assets/images/saloon.jpg';
// import accupuncture from '../../assets/images/accupuncture.jpg';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const homeServices = [
//   { name: 'AC Service', image: require('../../assets/images/acservice.jpg') },
//   { name: 'Packers and Movers', image: require('../../assets/images/packers.jpg') },
//   { name: 'Plumber', image: require('../../assets/images/plumber.jpg') },
//   { name: 'Electrician', image: require('../../assets/images/electrician.jpg') },
// ];

// const beautyServices = [
//   { name: 'Saloon', image: saloon },
//   { name: 'Accupuncture', image: accupuncture },
//   { name: 'Hair Spa Treatment', image: saloon },
//   { name: 'Facial and Skin Therapy', image: accupuncture },
// ];

// const allServices = [...homeServices, ...beautyServices];

// const categoriesList = ['All', 'HOME SERVICE', 'BEAUTY', 'FITNESS', 'CONSULTANTS', 'MEDICAL'];

// export default function Categories() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const getServices = () => {
//     if (selectedCategory === 'All') return allServices;
//     if (selectedCategory === 'HOME SERVICE') return homeServices;
//     if (selectedCategory === 'BEAUTY') return beautyServices;
//     return [];
//   };

//   const handleServicePress = () => {
//     router.push('/components/Vendorlist');
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <LinearGradient
//         colors={['#B10A10', '#1B1B1B']}
//         style={styles.header}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <View style={styles.headerContent}>
//           <TouchableOpacity onPress={() => router.back()}>
//             <Ionicons name="arrow-back" size={24} color="#fff" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Categories</Text>
//           <View style={{ width: 24 }} />
//         </View>
//       </LinearGradient>

//       <View style={styles.searchWrapper}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={18} color="#888" />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search categories..."
//             placeholderTextColor="#888"
//           />
//         </View>
//       </View>

//       <View style={styles.contentContainer}>
//         {/* Left Category Column */}
//         <ScrollView style={styles.categoryColumn}>
//           {categoriesList.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.categoryButton,
//                 selectedCategory === item && styles.categoryButtonActive,
//               ]}
//               onPress={() => setSelectedCategory(item)}
//             >
//               <Text
//                 style={[
//                   styles.categoryButtonText,
//                   selectedCategory === item && styles.categoryButtonTextActive,
//                 ]}
//               >
//                 {item}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* Right Service Grid */}
//         <FlatList
//           data={getServices()}
//           numColumns={2}
//           keyExtractor={(item, index) => index.toString()}
//           contentContainerStyle={styles.gridContainer}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.gridItem} onPress={handleServicePress}>
//               <Image source={item.image} style={styles.gridImage} />
//               <Text style={styles.gridText} numberOfLines={2}>
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     paddingBottom: windowHeight * 0.015,
//     paddingHorizontal: windowWidth * 0.04,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerTitle: {
//     fontSize: windowWidth * 0.05,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   searchWrapper: {
//     paddingHorizontal: windowWidth * 0.04,
//     paddingVertical: windowHeight * 0.015,
//     backgroundColor: '#f5f5f5',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     height: 40,
//     elevation: 3,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 14,
//     color: '#000',
//   },
//   contentContainer: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   categoryColumn: {
//     width: windowWidth * 0.3,
//     backgroundColor: '#f2f2f2',
//     paddingVertical: 10,
//   },
//   categoryButton: {
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 6,
//     marginHorizontal: 10,
//     elevation: 2,
//   },
//   categoryButtonActive: {
//     backgroundColor: '#B10A10',
//   },
//   categoryButtonText: {
//     fontSize: 9,
//     color: '#555',
//     textAlign: 'center',
//   },
//   categoryButtonTextActive: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   gridContainer: {
//     flexGrow: 1,
//     padding: 10,
//   },
//   gridItem: {
//     width: (windowWidth * 0.7 - 30) / 2,
//     margin: 5,
//     alignItems: 'center',
//   },
//   gridImage: {
//     width: '100%',
//     height: 90,
//     borderRadius: 10,
//     resizeMode: 'cover',
//   },
//   gridText: {
//     marginTop: 5,
//     fontSize: 10,
//     color: '#333',
//     textAlign: 'center',
//   },
// });

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import saloon from '../../assets/images/saloon.jpg';
import accupuncture from '../../assets/images/accupuncture.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const homeServices = [
  { name: 'AC Service', image: require('../../assets/images/acservice.jpg') },
  { name: 'Packers and Movers', image: require('../../assets/images/packers.jpg') },
  { name: 'Plumber', image: require('../../assets/images/plumber.jpg') },
  { name: 'Electrician', image: require('../../assets/images/electrician.jpg') },
];

const beautyServices = [
  { name: 'Saloon', image: saloon },
  { name: 'Accupuncture', image: accupuncture },
  { name: 'Hair Spa Treatment', image: saloon },
  { name: 'Facial and Skin Therapy', image: accupuncture },
];

const allServices = [...homeServices, ...beautyServices];

const categoriesList = ['All', 'HOME SERVICE', 'BEAUTY', 'FITNESS', 'CONSULTANTS', 'MEDICAL'];

export default function Categories() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const insets = useSafeAreaInsets();

  const getServices = () => {
    if (selectedCategory === 'All') return allServices;
    if (selectedCategory === 'HOME SERVICE') return homeServices;
    if (selectedCategory === 'BEAUTY') return beautyServices;
    return [];
  };

  const handleServicePress = () => {
    router.push('/components/Vendorlist');
  };

  return (
    <View style={styles.safeArea}>
      <LinearGradient
        colors={['#B10A10', '#1B1B1B']}
        style={[styles.header, { paddingTop: insets.top }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Categories</Text>
          <View style={{ width: 24 }} />
        </View>
      </LinearGradient>

      <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.container}>
        <View style={styles.searchWrapper}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color="#888" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search categories..."
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          {/* Left Category Column */}
          <ScrollView style={styles.categoryColumn}>
            {categoriesList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  selectedCategory === item && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(item)}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === item && styles.categoryButtonTextActive,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Right Service Grid */}
          <FlatList
            data={getServices()}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.gridContainer}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.gridItem} onPress={handleServicePress}>
                <Image source={item.image} style={styles.gridImage} />
                <Text style={styles.gridText} numberOfLines={2}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingBottom: windowHeight * 0.05, // Increased from 0.015 to 0.04
    paddingTop: windowHeight * 0.02, // Added additional padding at the top
    paddingHorizontal: windowWidth * 0.04,
    minHeight: windowHeight * 0.12, // Added minimum height for the header
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchWrapper: {
    paddingHorizontal: windowWidth * 0.04,
    paddingVertical: windowHeight * 0.015,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  categoryColumn: {
    width: windowWidth * 0.3,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 10,
    elevation: 2,
  },
  categoryButtonActive: {
    backgroundColor: '#B10A10',
  },
  categoryButtonText: {
    fontSize: 9,
    color: '#555',
    textAlign: 'center',
  },
  categoryButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gridContainer: {
    flexGrow: 1,
    padding: 10,
  },
  gridItem: {
    width: (windowWidth * 0.7 - 30) / 2,
    margin: 5,
    alignItems: 'center',
  },
  gridImage: {
    width: '100%',
    height: 90,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  gridText: {
    marginTop: 5,
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
  },
});




