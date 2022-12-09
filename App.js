import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const saveData = async (value) => {
  console.log(value, 'log: le numero saisi')
  const jsonValue =JSON.stringify(value)
  try {
    await AsyncStorage.setItem('@storage_Key', jsonValue)
    alert('Bien enregister !')
  }catch (e) {
    console.log(e, 'log: Erreurs pendant la sauvegarde !')
  }
}