import React, {useState}from 'react';
import { View, Text } from 'react-native';
import Scanner from '../components/Scanner';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Params, Response} from '../types'

export function QrScan() {
  const navigation = useNavigation()
  const route = useRoute()
  const {setdatasheet, setitenCode, scanned} = route.params as Params
  let scan = scanned

  const onScanned = (response: Response) => {
    scan = false
    const {data} = response    
    const _data = data.split('|')
    console.log(_data)
    navigation.navigate('home')
    setitenCode(_data[0]?_data[0]:'')
    setdatasheet(_data[1]?_data[1]:'')
  };

  return (
    <View>
        <Scanner
          style={{
            width: '100%',
            height: '100%'
          }}
          onScanned={scan?onScanned:undefined}
        />
    </View>
  );
}