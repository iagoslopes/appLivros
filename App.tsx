import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home></Home>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'baseline',
    verticalAlign : 'top',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    height:"90%",
    
    
  },
});
