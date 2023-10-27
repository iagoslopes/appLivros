import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <AppNavigator/>
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
