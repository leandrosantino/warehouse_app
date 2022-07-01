import React, {useState} from 'react';
import { 
  View, 
  Text,
  TextInput, 
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Alert,

} from 'react-native';



import {styles} from '../styles/home.style'
import {useNavigation, useRoute} from '@react-navigation/native'
import {MaterialIcons} from '@expo/vector-icons'
import { DataIten } from '../components/DataIten';

export function Home() {
  const navigation = useNavigation()
  const route = useRoute()

  const data = {
    nome: 'Sensor Sick 458965',
    quant: 12,
    endereco: 'A2303',
    min: '15',
    max: '50',
    datasheet: '',
    status: true
  }

  const [dataIten, setdataIten] = useState({status:false})
  const [itenCode, setitenCode] = useState('')
  const [datasheet, setdatasheet] = useState('')
  const [Quant, setQuant] = useState('')

  function openScan(){
    navigation.navigate('QrScan', {
      setitenCode,
      setdatasheet,
      scanned: true
    })
  }

  function SearchBar(){
    if(itenCode != ''){
      data.datasheet = datasheet
      setdataIten(data)
      setQuant(String(data.quant))
      Keyboard.dismiss()
    }else{
      Alert.alert( 'Atenção!','O campo "Código do item" esta vazio!!')
    }
  }

  function send(){
    if(dataIten.status){
      if(Quant != ''){
        Alert.alert('Atualizar Item', 'Realmente deseja reslizar esta ação?', [
          {
            text: 'Não',
            onPress: ()=>{},
          }, 
          {
            text: 'Sim',
            onPress: ()=>{
              setdataIten({status:false})
              setitenCode('')
              setQuant('')
              Keyboard.dismiss()
            },
          }
        ])
      }else{
        Alert.alert( 'Atenção!','O campo "Quantidade" esta vazio!!')
      }
    }else{
      Alert.alert( 'Atenção!','Nenhum Produto foi selecionado!')
    }
  }

  return (
    <View style={styles.container}>

      <View style={{
        ...styles.search,
        ...styles.children
      }}>

        <View style={styles.inputTextCase}>

          <TextInput
            style={styles.inputText}
            placeholder='Código do Item'
            onChangeText={setitenCode}
          >
            {itenCode}
          </TextInput>

          <TouchableOpacity 
            style={styles.btScan} 
            onPress={openScan}
          >
            <MaterialIcons
              name='qr-code-scanner'
              color={'black'}
              size={30}
            />
          </TouchableOpacity>
          
        </View>

        <TouchableOpacity 
          style={styles.btSearch}
          onPress={SearchBar}  
        >
          <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Buscar</Text>
          <MaterialIcons
            name='search'
            color={'#fff'}
            size={25}
            style={{marginLeft: 4}}
          />
        </TouchableOpacity>

      </View>


      <View style={{
        ...styles.send,
        ...styles.children
      }}>

        <TextInput
          style={styles.inputNumber}
          keyboardType = 'numeric'
          placeholder='Quantidade'
          onChangeText={setQuant}
        >
          {Quant}
        </TextInput>

        <TouchableOpacity 
          style={styles.btSearch}
          onPress={send}
        >
          <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>Enviar</Text>
          <MaterialIcons
            name='send'
            color={'#fff'}
            size={25}
            style={{marginLeft: 4}}
          />
        </TouchableOpacity>

      </View>

      <View style={{
        ...styles.data,
        ...styles.children
      }}>

        <View style={styles.dataLabelCase}>
          <Text style={styles.dataLabel} >Especificações do Iten:</Text>
        </View>
        

        <ScrollView style={styles.dataCase}>
          <DataIten data={dataIten} />
        </ScrollView>

      </View>
      
    </View>
  );
}
