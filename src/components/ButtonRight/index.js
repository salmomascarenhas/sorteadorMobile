import React, { Components } from 'react';
import { View, Button, Text } from 'react-native';


export default ButtonRight = props => {
    return <View style={{ paddingRight: 5 }}><Button
        onPress={() => alert('pressionado')/*props.navigation.navigate('About')*/}
        title="..."
    />
    </View>;
}