import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { createContext, useContext, useState } from 'react';
import { Provider } from '@/components/context/taskProvider';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from "@/components/Button"

export default function HomeScreen() {
  const [tasks,setTasks] = useState(["Lavar","volar","rolav"])
  return (
    <View>
      <Provider>
      <Button />
      </Provider>
      <View style={styles.wrapper}>
        {
          tasks.map((el)=><Text style={styles.items}>{el}</Text>)
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
