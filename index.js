/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React,{Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './apps/home';
import Ilaclar from './apps/ilaclar';
import IlacSorgu from './apps/ilacsorgu';
import Nobetci from './apps/nobetci';
import Yakin from './apps/yakin';
import Login from './apps/login';
import Ayarlar from './apps/ayarlar';
import Hakkinda from './apps/hakkinda';
import Satin from './apps/satin';
import Eczane from './apps/eczane';
import Explain from './apps/explain';

const map = (SomeComponent) => {
    return class extends Component {
        static navigationOptions = SomeComponent.navigationOptions;
        render() {
            const {navigation: {state: {params}}} = this.props
            return <SomeComponent {...params} {...this.props} />
        }
    }
}


const AppNavigator = createStackNavigator({
    login: { screen: map(Login),
        navigationOptions : ({navigation}) => ({
            header : null,
            gesturesEnabled : false
        })
        },
    home: { screen: map(Home),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    ilaclar : { screen: map(Ilaclar),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    ilacsorgu : { screen: map(IlacSorgu),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    nobetci : { screen: map(Nobetci),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    yakin : { screen: map(Yakin),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    hakkinda : { screen: map(Hakkinda),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    ayarlar : { screen: map(Ayarlar),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    satin: { screen: map(Satin),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    eczane: { screen: map(Eczane),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
    explain : { screen: map(Explain),
    navigationOptions : ({navigation}) => ({
        header : null,
        gesturesEnabled : false
    })
    },
});


AppRegistry.registerComponent(appName, () => AppNavigator);
