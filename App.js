import { StyleSheet, View } from 'react-native';
import StackNavigation from './navigation/stack-navigation';

export default function App() {
   return (
      <View style={styles.container}>
         <StackNavigation></StackNavigation>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
});
