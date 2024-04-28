// @flow

import type { Participant as TParticipant } from '../../../data/participants';
import { Dimensions, StyleSheet, View } from 'react-native';
import Text from '../text/text';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(7, 45, 82, 0.9)',
        padding: 10,
        borderBottomColor: 'rgba(10, 65, 120, 0.9)',
        borderBottomWidth: 2,
    },
    text: {
        color: 'white',
    },
    position: {
        fontSize: 30,
        marginRight: 10,
    },
    startingPosition: {
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
    isActive: {
        backgroundColor: 'rgba(10, 65, 120, 0.9)',
    },
});

interface Props {
    index: number;
    isActive: boolean;
}

const Participant = ({ country, icon, id, index, isActive, name, title }: Props & TParticipant): React$Element<any> => {
    return (
        <View style={[styles.view, isActive && styles.isActive]}>
            <Text style={[styles.text, styles.position]}>{(index + 1).toString().padStart(2, '0')}</Text>
            <Text style={[styles.text, styles.startingPosition]}>#{id.toString().padStart(2, '0')}</Text>
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
