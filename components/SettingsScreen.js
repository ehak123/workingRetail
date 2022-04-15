
    import {
      StyleSheet,
      Text,
      View,
    } from 'react-native';
    
    
    export default function SettingsScreen() {
    
      return (
          <View style={styles.mainbody}>
             <Text >
                SettingsScreen
                Non-Priorited
            </Text>
          </View>
      );
    };
    
    const styles = StyleSheet.create({
      mainbody: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
      },
      text: {
        color: '#000000',
        fontSize:20,
        margin: 20,
      },
      buttonText: {
        color: '#000000',
        fontSize:20,
        margin: 10,
      },
      textHeader: {
        color: '#000000',
        fontSize: 20,
        margin: 30,
    
      },
      inputContainer: {
        flex: 1,
        marginBottom: 40,
      },
      input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 10,
      },
      button: {
        margin: 75, 
        width: 150,
        height: 50,
        backgroundColor: '#65b14e',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      }
    });