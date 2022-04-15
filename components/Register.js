import react, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default function Register() {

  const [Butiksnamn, SetButiksnamn] = useState(' ');
  const [Adress, SetAdress] = useState(' ');
  const [Postnummer, SetPostnummer] = useState(' ');
  const [Ort, SetOrt] = useState(' ');
  const [Telefonnummer, SetTelefonnummer] = useState(' ');
  const [Email, SetEmail] = useState(' ');


  const [submitted, SetSubmitted] = useState(false);

  const kontrollOnPressHandler = () => {
    SetSubmitted(!submitted);
  }

  const submitOnPressHandler = () => {
    SetSubmitted(!submitted); //skicka datan någonstanns...
  }

  const DissmissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
      <View style={styles.mainbody}>
        <Text style={styles.textHeader}>
          Skapa ditt användarkonto:
        </Text>
        <View styles={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder='Butiksnamn'
            onChangeText = {(value) => SetButiksnamn(value)}
          />
          <TextInput 
            style={styles.input} 
            placeholder='Adress'
            onChangeText = {(value) => SetAdress(value)}
          />
          <TextInput 
            style={styles.input} 
            placeholder='Postnummer'
            keyboardType='number-pad'
            onChangeText = {(value) => SetPostnummer(value)}
          />
          <TextInput 
            style={styles.input} 
            placeholder='Ort'
            onChangeText = {(value) => SetOrt(value)}
          />
            <TextInput 
            style={styles.input} 
            placeholder='Telefonnummer'
            keyboardType='number-pad'
            onChangeText = {(value) => SetTelefonnummer(value)}
          />
            <TextInput 
            style={styles.input} 
            placeholder='Email'
            keyboardType='email-address'
            onChangeText = {(value) => SetEmail(value)}
            //TODO: email control function
          />
        </View>
        
        {submitted ?          //TODO: remove commas
          <Text style={styles.text}>Du håller på att registrera dig som: {"\n"} 
          {Butiksnamn} {"\n"}{Adress}, {Postnummer}, {Ort}, {Telefonnummer}, {Email}  
          </Text>
          :
          null
        } 

        <TouchableOpacity
          style={styles.button}
          onPress={kontrollOnPressHandler}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}> 
            {submitted ? 'Bekräfta' : 'Kontrollera'} 
          </Text>

        </TouchableOpacity>
  

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