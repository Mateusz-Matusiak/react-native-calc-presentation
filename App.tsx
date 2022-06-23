import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';


export default function App() {


  return (
    
      <View style={styles.container}>
          <StatusBar style="auto" />
          <MyKeyboard/>
      </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
