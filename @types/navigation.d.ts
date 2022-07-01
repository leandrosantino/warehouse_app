import {Params} from '../types'

type RootStackParamList = {
    add: undefined;
    home: undefined;
    QrScan: Params;
    scan: undefined;
    user: undefined;
    
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}