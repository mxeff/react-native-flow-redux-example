// @flow

import { StatusBar, StyleSheet, View } from 'react-native';
import Text from '../text/text';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(10, 65, 120, 0.9)',
        paddingTop: StatusBar.currentHeight,
        padding: 16,
        borderBottomColor: '#db2a82',
        borderBottomWidth: 4,
        marginBottom: 10,
    },
    text: {
        color: 'white',
    },
});

const Navigation = (): React$Element<any> => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Navigation</Text>
        </View>
    );
};

export default Navigation;
