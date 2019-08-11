import { createStackNavigator, createAppContainer } from 'react-navigation';

import App from './';
import About from './components/About/';

const stackNavigator = createStackNavigator({
    Home: {
        screen: App
    },
    About: {
        screen: About
    }
},

    {
        initialRouteName: 'Home'
    }
);

export default routes = createAppContainer(stackNavigator);