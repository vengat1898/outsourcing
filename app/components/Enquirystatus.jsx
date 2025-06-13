import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Enquirystatus = () => {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState('Pending');
  const buttons = ['Pending', 'Accepted', 'Rejected'];

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
          <Text style={styles.title}>EnquiryStatus</Text>
        </View>
      </LinearGradient>

      {/* Status Buttons */}
      <View style={styles.buttonRow}>
        {buttons.map((label) => {
          const isSelected = label === selectedStatus;

          return (
            <TouchableOpacity
              key={label}
              style={styles.statusButton}
              onPress={() => setSelectedStatus(label)}
            >
              {isSelected ? (
                <LinearGradient
                  colors={['#B10A10', '#1B1B1B']}
                  style={styles.gradientButton}
                >
                  <Text style={styles.buttonTextSelected}>{label}</Text>
                </LinearGradient>
              ) : (
                <View style={styles.unselectedButton}>
                  <Text style={styles.buttonTextUnselected}>{label}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Top Row */}
        <View style={styles.cardHeader}>
          <Text style={styles.cardName}>vengat</Text>
          <Text style={styles.cardTime}>12:30</Text>
        </View>

        {/* Inner Box */}
        <View style={styles.innerBox}>
          <View style={styles.innerBoxLeft}>
            <Text style={styles.locationText}>chennai</Text>
            <Text style={styles.serviceText}>ac service</Text>
          </View>
          <View style={styles.innerBoxRight}>
            <Ionicons name="logo-whatsapp" size={20} color="#25D366" style={styles.iconSpacing} />
            <Ionicons name="call" size={20} color="#1B1B1B" />
          </View>
        </View>
        {/* Bottom Status */}
      <View style={styles.bottomStatus}>
        <Text style={styles.statusText}>Pending</Text>
      </View>
      </View>
    </View>
  );
};

export default Enquirystatus;

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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  statusButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  gradientButton: {
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  unselectedButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B10A10',
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonTextSelected: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  buttonTextUnselected: {
    color: '#B10A10',
    fontWeight: '600',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#F2F2F2',
    margin: 16,
    borderRadius: 5,
    padding: 12,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cardTime: {
    fontSize: 14,
    color: '#666',
  },
  innerBox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    elevation: 1,
  },
  innerBoxLeft: {
    flex: 1,
  },
  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  serviceText: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
  },
  innerBoxRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 10,
  },
  bottomStatus: {
    alignItems: 'left',
    marginTop: 20,
  },
  statusText: {
    fontSize: 16,
    color: '#B10A10',
    fontWeight: 'bold',
  },
});



