// @flow

import type { Participant as TParticipant } from '../../../data/participants';

import { Dimensions, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(7, 45, 82, 0.9)',
        padding: 10,
    },
    text: {
        color: 'white',
    },
    startingPosition: {
        fontSize: 30,
        opacity: 0.5,
        marginRight: 10,
    },
    icon: {
        marginRight: 10,
    },
    titleAndName: {
        flexShrink: 1,
    },
    title: {
        fontFamily: 'Verdana-Bold',
    },
    name: {
        fontSize: 12,
    },
});

const Participant = ({ country, icon, id, name, title }: TParticipant): React$Element<any> => {
    return (
        <View style={styles.view}>
            <Text style={[styles.text, styles.startingPosition]}>{id.toString().padStart(2, '0')}</Text>
            <Text style={[styles.text, styles.icon]}>{icon}</Text>
            <View style={styles.titleAndName}>
                <Text
                    numberOfLines={1}
                    style={[styles.text, styles.title]}
                >
                    {title}
                </Text>
                <Text style={[styles.text, styles.name]}>{name}</Text>
            </View>
        </View>
    );
};

export default Participant;
