import {createNativeStackNavigator} from '@react-navigation/native-stack'

const {Screen, Navigator} = createNativeStackNavigator();

import {QrScan} from '../screens/QrScan'
import {Home} from '../screens/Home'

export function Add(){
    return(
        <Navigator
        screenOptions={{
            headerShown: false,
        }}>

            <Screen
                name='home'
                component={Home}
            />
            <Screen
                name='QrScan'
                component={QrScan}
            />

        </Navigator>
    )
}