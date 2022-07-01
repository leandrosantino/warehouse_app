import React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/home.style'

export function DataIten({data}) {
  return (
		<View style={styles.container}>

			<Text style={styles.dataLabel} >Nome:
				<Text style={{fontWeight: 'normal'}} > {data.nome}</Text>
			</Text>

			<Text style={styles.dataLabel} >Quantidade em Estoque:
				<Text style={{fontWeight: 'normal'}} > {data.quant}</Text>
			</Text>

			<Text></Text>

			<Text style={styles.dataLabel} >Endereço:
				<Text style={{fontWeight: 'normal'}} > {data.endereco}</Text>
			</Text>

			<Text style={styles.dataLabel} >Estoque Mínimo: 
				<Text style={{fontWeight: 'normal'}} > {data.min}</Text>
			</Text>

			<Text style={styles.dataLabel} >Estoque Máximo: 
				<Text style={{fontWeight: 'normal'}} > {data.max}</Text>	
			</Text>
				
			<Text></Text>

			<Text style={styles.dataLabel} >DataSheet: 
				<Text style={{fontWeight: 'normal'}} > {data.datasheet}</Text>
			</Text>

		</View>
  );
}