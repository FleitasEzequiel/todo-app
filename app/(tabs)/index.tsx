import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { createContext, useContext, useEffect, useState } from 'react';
import { Provider } from '@/components/context/taskProvider';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from "@/components/Button"
import { taskContext } from '@/components/context/taskContext';
import { List } from '@/components/TaskList';


export default function HomeScreen() {

  
  return (
    <View>
      <Provider>
      <Button />
      <View style={styles.wrapper}>
        <List />
      </View>
      </Provider>
      <Text>Holas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    alignSelf:"center",
    flexDirection:"column",
    gap:20,
    borderWidth: 2,
    borderCurve: "circular",
    borderRadius: 10,
    padding: 20,
    borderColor: "red",
  },
  items:{
    backgroundColor:"red",
    height:50,
    
  }
});
