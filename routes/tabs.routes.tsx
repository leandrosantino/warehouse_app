import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'

const {Screen, Navigator} = createBottomTabNavigator();


import {Scan} from '../screens/Scan'
import {Login} from '../screens/User'

import {Add} from './stack.routes'

export function TabRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#213242',
                tabBarInactiveTintColor: '#517490',
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                tabBarStyle: {
                    backgroundColor: '#E1E9EA',
                },
                headerTitleStyle:{fontSize:22},
                headerStyle:{
                    backgroundColor: '#E1E9EA',
                },
            }}
        >
            <Screen
                name='add'
                component={Add}
                options={{
                    title:'Atualizar Itens', 
                    tabBarLabel: 'Add Itens',
                    tabBarIcon: ({color, size})=> (
                        <MaterialIcons 
                            name='add-box'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Screen
                name='scan'
                component={Scan}
                options={{
                    title:'Scanner', 
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({color, size})=> (
                        <MaterialIcons 
                            name='qr-code-scanner'
                            color={color}
                            size={size}
                        />
                    ),
                }}
                
            />
            <Screen
                name='user'
                component={Login}
                options={{
                    title:'Usuário', 
                    tabBarLabel: 'Usuário',
                    tabBarIcon: ({color, size})=> (
                        <MaterialIcons 
                            name='person'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

        </Navigator>
    )
}