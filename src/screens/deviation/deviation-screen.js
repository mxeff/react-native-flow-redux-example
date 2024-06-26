// @flow
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '../../components/text/text';
import { flex } from 'deprecated-react-native-prop-types/DeprecatedLayoutPropTypes';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { resultSlice, tasteSlice, tipSlice } from '../../store/store';

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#222222',
        padding: 10,
    },
    headline: {
        color: 'white',
        fontSize: 24,
        marginBottom: 10,
    },
    subheadline: {
        color: 'white',
        fontSize: 18,
        marginBottom: 20,
    },
    table: {
        marginBottom: 30,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        flexBasis: '50%',
        flexGrow: 0,
        flexShrink: 0,
        color: 'white',
        padding: 10,
        borderColor: '#db2a82',
        borderWidth: 1,
    },
});

const selectTipDeviation = createSelector(
    [tipSlice.selectors.selectItems, resultSlice.selectors.selectItems],
    (tip, results) =>
        tip.reduce((previousValue, currentValue, index) => {
            previousValue += Math.abs(index - results.findIndex((value) => value === currentValue));

            return previousValue;
        }, 0),
);

const selectTasteDeviation = createSelector(
    [tasteSlice.selectors.selectItems, resultSlice.selectors.selectItems],
    (taste, results) =>
        taste.reduce((previousValue, currentValue, index) => {
            previousValue += Math.abs(index - results.findIndex((value) => value === currentValue));

            return previousValue;
        }, 0),
);

const DeviationScreen = (): React$Element<typeof View> => {
    const tipDeviation = useSelector(selectTipDeviation);
    const tasteDeviation = useSelector(selectTasteDeviation);

    return (
        <View style={styles.view}>
            <Text style={styles.headline}>Abweichungen</Text>
            <Text style={styles.subheadline}>Tipp</Text>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.column}>Insgesamt</Text>
                    <Text style={styles.column}>{tipDeviation}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.column}>Durchschnitt (Insgesamt / 25)</Text>
                    <Text style={styles.column}>{tipDeviation / 25}</Text>
                </View>
            </View>
            <Text style={styles.subheadline}>Taste</Text>
            <View style={styles.table}>
                <View style={styles.row}>
                    <Text style={styles.column}>Insgesamt</Text>
                    <Text style={styles.column}>{tasteDeviation}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.column}>Durchschnitt (Insgesamt / 25)</Text>
                    <Text style={styles.column}>{tasteDeviation / 25}</Text>
                </View>
            </View>
        </View>
    );
};

export default DeviationScreen;
