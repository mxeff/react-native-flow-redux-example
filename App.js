// @flow

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Navigation from './src/components/navigation/navigation';
import { participants } from './data/participants';
import Participant from './src/components/participant/participant';
import { useState } from 'react';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from './src/components/text/text';

import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';

export default function App(): React$Element<any> | null {
    const [areFontsLoaded, fontError] = useFonts({
        'Verdana-Bold': require('./assets/fonts/Verdana-Bold.ttf'),
        Verdana: require('./assets/fonts/Verdana.ttf'),
    });

    const [data, setData] = useState(participants);

    if (!areFontsLoaded && !fontError) {
        return null;
    }

    const renderItem = ({
        drag,
        getIndex,
        isActive,
        item,
    }: {
        drag: (event: PressEvent) => mixed,
        getIndex: () => ?number,
        isActive: boolean,
        item: any,
    }) => {
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}
                >
                    <Participant
                        key={item.id}
                        {...item}
                        isActive={isActive}
                        index={getIndex()}
                    />
                </TouchableOpacity>
            </ScaleDecorator>
        );
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.view}>
                <Navigation />
                <DraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => setData(data)}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
                <StatusBar style="auto" />
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#222222',
    },
});
