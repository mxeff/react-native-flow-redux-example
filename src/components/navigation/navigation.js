// @flow

import { StatusBar, StyleSheet, Text, View } from 'react-native';

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
