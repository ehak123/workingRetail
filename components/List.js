import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TextInput, TouchableOpacity, } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Constants from 'expo-constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//TODO: Edit-funktion
//TODO: Publicera & skriv ur barcode-funktion
//TODO: Funktion som talar om när utgångsdatumet är kommet => SLÄNG varorna
//TODO: fungera på hur listan kan göras "snyggare" dvs mindre fyrkantig

const WasteData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Felix Tomatketchup',
    price: '23',
    bbd: '2022-04-29'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Bröd',
    price: '15.50',
    bbd: '2022-04-29'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Majonäs',
    price: '32',
    bbd: '2022-04-29'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Bullens korvkaka',
    price: '18.50',
    bbd: '2022-04-29'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Trasiga skor',
    price: '22.90',
    bbd: '2022-04-29'
  },
];

const AdvertisedData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ruttna Lingon',
    price: '26',
    discountprice: '13',
    rabatt: '50',
    bbd: '2022-04-29'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Järpfilé',
    price: '31',
    discountprice: '15.50',
    rabatt: '50',
    bbd: '2022-04-29'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Kolja från Älvdalen',
    price: '44',
    discountprice: '22',
    rabatt: '25',
    bbd: '2022-04-29'
  },
];


export default function List() {
  
  let row = [];
  let prevOpenedRow;
  const [WasteScreen, SetWasteScreen] = useState(true);
  const [AdvertisedScreen, SetAdvertisedScreen] = useState(false);
  const [Price, SetNewPrice] = useState('');


  const onPressHandlerWasteScreen = () => {
    if (!WasteScreen){
      SetWasteScreen(!WasteScreen);
      SetAdvertisedScreen(!AdvertisedScreen);
    }
  }
  
  const onPressHandlerAdvertisedScreen = () => {
    if (!AdvertisedScreen){
      SetAdvertisedScreen(!AdvertisedScreen);
      SetWasteScreen(!WasteScreen);
    }
  }


  const [listDataWaste, setListDataWaste] =  useState(WasteData);

  const [listDataAdvertised, setListDataAdvertised] =  useState(AdvertisedData);

  

  const renderItem = ({ item, index }, onClick) => {

    const closeRow = (index) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };


    const renderRightActions = (progress, dragX, onClick) => {
      return (
          <>
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 80,
            hight: 100,
          }}>
            <Button color="red" onPress={onClick} title="Delete"></Button>
        </View>
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 50,
            hight: 100,
          }}>
            <Button color="green" title="Edit"></Button>
        </View>
        </>
      );
    };

    return (
      <>
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}>
          <View
          style={{
              margin: 7,
              borderColor: 'grey',
              borderWidth: 1,
              padding: 9,
              backgroundColor: 'white',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 5,
          }}>
              <View
                  style={{
                  borderColor: 'grey',
                  borderWidth: 1,
                  flex: 1,
                  textAlign: 'center',
                  justifyContent: 'center',
                      }}>
                <Text>     BILD   </Text>
              </View>
              
              <View
                  style={{
                  margin: 10,
                  flex: 2,
                  justifyContent: 'center',
                  }}>
                  <Text style={{
                  fontWeight: 'bold',
                      }}>
                    {item.title}</Text>
                  <Text>Bäst-före: {item.bbd}</Text>
                  { WasteScreen ? <Text>Normalpris: {item.price} kr</Text> : <Text>Normalpris: {item.price} kr Rabattpris: {item.discountprice} kr </Text> }

              </View>
              <View
                  style={{
                  margin: 10,
                  flex: 1.2,
                  justifyContent: 'center',
                  }}>
                  <Text>Nytt pris i SEK:</Text>
                  <TextInput 
                      style={styles.input} 
                      placeholder='t.ex. 19.90'
                      onChangeText = {(value) => SetNewPrice(value)}
                  />
              </View>
        </View>
      </Swipeable>
      </>
    );
  };

  const deleteItem = ({ item, index }) => {
    if (WasteScreen){
      let a = listDataWaste;
      a.splice(index, 1);
      setListDataWaste([...a])
    }
    else {
      let a = listDataAdvertised;
      a.splice(index, 1);
      setListDataAdvertised([...a])
    }
  };

      return (
      <View style={styles.container}>

        <View style={styles.topButtonContainer}>
          <TouchableOpacity
            style={WasteScreen && !AdvertisedScreen ? styles.buttonActive : styles.button}
            onPress={onPressHandlerWasteScreen}
            activeOpacity={0.7}
            >
            <Text style={styles.text}> 
              Svinn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={AdvertisedScreen && !WasteScreen ? styles.buttonActive : styles.button}
            onPress={onPressHandlerAdvertisedScreen}
            activeOpacity={0.7}
            >
            <Text style={styles.text}> 
              Publicerade
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={WasteScreen ? listDataWaste : listDataAdvertised}
          renderItem={(v) =>
            renderItem(v, () => {
              deleteItem(v);
            })
          
          }
          keyExtractor={(item) => item.id}>
        </FlatList>
        
        <View style={styles.bottomButtonContainer}>
            <TouchableOpacity
              style={styles.bottomButton}
              activeOpacity={0.7}
            >
                <Text style={styles.text}> 
                <FontAwesome5
                  name='print'
                  size='17'
                  style={styles.text}
                />
                {'  '}
                Publicera och skriv ut ny barcode
                {'  '}
                <FontAwesome5
                  name='barcode'
                  size='17'
                  style={styles.text}
                />
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    topButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
    },
    button: {
      margin: 10,
      width: 120,
      height: 38,
      backgroundColor: '#84C171',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonActive: {
      margin: 10,
      width: 120,
      height: 38,
      backgroundColor: '#65b14e',
      alignItems: 'center',
      borderWidth: 0.5,
      borderRadius: 5,

    },
    text: {
      color: '#000000',
      fontSize: 15,
      margin: 10,
    },  
    input: {
      borderWidth: 1,
      padding: 3,
      borderRadius: 5,
    },
    bottomButton: {
      margin: 15,
      width: 300,
      height: 38,
      backgroundColor: '#84C171',
      alignItems: 'center',
      borderRadius: 5,
    },
    bottomButtonContainer: {
      flexDirection: 'row',
      textAlign: 'center',
      justifyContent: 'center',
    }
  })
