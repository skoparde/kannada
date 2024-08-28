import { Image, StyleSheet, Platform } from 'react-native';


import {
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Pressable
} from 'react-native';

import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Navigator, useNavigation } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/kannadakali.jpg')}
          style={styles.stepContainer}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="defaultSemiBold">ಕನ್ನಡ ಕಲಿ!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="default">Learn Kannada using Flash Cards</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="default">ಕನ್ನಡ ಕಲಿಯುವವರಿಗೆ ಸುಲಭ ಸಾಧನ! ನಿಮ್ಮ ಜ್ಞಾನ ಪರೀಕ್ಷಿಸಿಕೊಳ್ಳಿ!! ಆಯ್ಕೆ ಮಾಡಿ  </ThemedText>
        <ThemedText type="default">Select a section</ThemedText>

      </ThemedView>
  
      <Link href="/swara" asChild>
      <Button title="ಸ್ವರಗಳು"
        color="#841584"
        accessibilityLabel="kannada swara"
        
      /></Link>
       <Link href="/vyanjana" asChild>
      <Button title="ವ್ಯಂಜನಗಳು"
        color="#841584"
        accessibilityLabel="kannada vyanjana"
      />
      </Link>
      <Button title="ಕಾಗುಣಿತ"
        color="#841584"
        accessibilityLabel="kannada kagunia"
      />
      <Button title="ಒತ್ತಕ್ಷರ"
        color="#841584"
        accessibilityLabel="kannada ottakshara"
      />
      <Button title="ಸರಳ ಪದಗಳು"
        color="#841584"
        accessibilityLabel="kannada sarala padagalu"
      />
      <Button title="ಒತ್ತಕ್ಷರ ಪದಗಳು"
        color="#841584"
        accessibilityLabel="kannada ottakshara padagalu"
      />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
