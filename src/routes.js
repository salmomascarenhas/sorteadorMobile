import { createStackNavigator, createAppContainer } from 'react-navigation';


import App from './';
import About from './screens/About/';

const stackNavigator = createStackNavigator({
    Home: {
        screen: App
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'Sobre',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }
    }
},

    {
        initialRouteName: 'Home'
    }
);

export default routes = createAppContainer(stackNavigator);