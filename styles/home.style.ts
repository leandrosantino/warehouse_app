import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

    container: {
      display: 'flex',
      paddingHorizontal: 5,
      height: '98%',
    },

    children:{
      width: '100%',
      marginVertical: 2,
      display: 'flex',
    },

    search: {
      height: '10%',
      minHeight: 65,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    send:{
      height: '10%',
      minHeight: 65,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',

      
    },      
    inputNumber: {
        borderWidth: 1.5,
        borderColor: '#7a7a7a',
        height: 40,
        width: '25%',
        borderRadius: 5,
        paddingLeft: 5,
        fontSize: 20,

    },

    data: {
      height: '78%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    dataLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    dataLabelCase: {
        height: '6%',
        minHeight: 30,
        width: '95%',
        display: 'flex',
        justifyContent: 'flex-start'

    },
    dataCase:{
        width: '95%',
        height: '50%',
        borderColor: '#7a7a7a',
        borderWidth: 1.5,
        borderRadius: 5,
        padding: 5
    },

    inputText: {
      width: '88%',
      height: '100%',
      fontSize: 16,
    },

    btScan: {
      width: '12%',
    },

    inputTextCase: {
      borderWidth: 1.5,
      borderColor: '#7a7a7a',
      width: '70%',
      height: 40,
      borderRadius: 5,
      paddingLeft: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 3,
    },

    btSearch: {
      backgroundColor: '#3C5A72',
      marginLeft: 10,
      width: '20%',
      height: 40,
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },
  })

export {styles}