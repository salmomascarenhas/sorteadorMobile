import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';

const stackNavigator = createStackNavigator({
    Home: {
        screen: App,
        navigationOptions: {
            title: 'Sorteador'
        }
    }
});

export default createAppContainer(stackNavigator);