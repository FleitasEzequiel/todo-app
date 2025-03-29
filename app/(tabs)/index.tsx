import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const tareas = ["Lavar","volar","rolav"]
  return (
    <View>
      <View style={styles.wrapper}>
        {
          tareas.map((el)=><Text style={styles.items}>{el}</Text>)
        }
      </View>
      <Text>Holas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    alignSelf:"center",
    flexDirection:"column",
    gap:20
  },
  items:{
    backgroundColor:"red",
    height:50,
    
  }
});
