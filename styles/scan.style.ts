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

    scan: {
        height: '80%',
    },
    inputCase: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    TextInput: {
        width: '95%',
        height: 45,
        borderRadius: 5,
        borderColor: '#7a7a7a',
        borderWidth: 1.5,
        padding: 10,
        fontSize: 20,

    },

    btCase: {
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
    },

    btScan:{
        width: '49%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 5,
        
    },
    labelBt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 10,
      },
    

})
export {styles}