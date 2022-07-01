import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import Scanner from '../components/Scanner';
import {styles} from '../styles/scan.style'
import {Response} from '../types'
import {MaterialIcons} from '@expo/vector-icons'

export function Scan() {
  
  const [scanned, setScanned] = useState(true)
  const [itencode, setitencode] = useState('')

  const onScanned = (response: Response) => {
    setScanned(false)
    const {data} = response    
    const _data = data.split('|')
    console.log(_data)
    setitencode(String(_data[0]))
  };
  
  function send(){
    if(itencode != ''){
      Alert.alert('Enviar Item', 'Realmente deseja reslizar esta ação?', [
        {
          text: 'Não',
          onPress: ()=>{},
        }, 
        {
          text: 'Sim',
          onPress: ()=>{
            setitencode('')
            setScanned(true)
          },
        }
      ])
    }else{
      Alert.alert('Atenção!', 'Nenhum Iten foi escaneado!')
    }
  }

  return (
    <View style={styles.container}>

      <Scanner
        style={{
          ...styles.children,
          ...styles.scan
        }}
        onScanned={scanned?onScanned:undefined}
      />

      <View
        style={{
          ...styles.children,
          ...styles.inputCase
        }}
      >
        <Text
          style={styles.TextInput}     
        >
          <Text style={{
            fontWeight: 'bold'
          }} >Código do Iten: </Text>
          {itencode}
        </Text>       
      </View>

      <View
        style={{
          ...styles.children,
          ...styles.btCase
        }}
      >

        <TouchableOpacity
          style={scanned?{
            ...styles.btScan,
            backgroundColor: '#7a7a7a',
          }:{
            ...styles.btScan,
            backgroundColor: '#3C5A72',
          }}
          onPress={()=>{setScanned(true)}}
          disabled={scanned}
        >
          <Text style={styles.labelBt} >Scanear</Text>
          <MaterialIcons
            name='qr-code-scanner'
            color='#FFF'
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.btScan,
            backgroundColor: '#3C5A72',
          }}
          onPress={send}
        >
          <Text style={styles.labelBt} >Enviar</Text>
          <MaterialIcons
            name='send'
            color='#FFF'
            size={30}
          />
        </TouchableOpacity>


      </View>

    </View>
  );
}