import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/navigation/navigation';
import { participants } from './data/participants';
import Participant from './src/components/participant/participant';

export default function App() {
    const [areFontsLoaded, fontError] = useFonts({
        'Verdana-Bold': require('./assets/fonts/Verdana-Bold.ttf'),
        Verdana: require('./assets/fonts/Verdana.ttf'),
    });

    if (!areFontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.view}>
            <ScrollView stickyHeaderIndices={[0]}>
                <Navigation />
                <View>
                    {participants.map((props) => (
                        <Participant
                            key={props.id}
                            {...props}
                        />
                    ))}
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        fontFamily: 'Verdana',
        backgroundColor: '#222222',
    },
});
