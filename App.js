// @flow
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar as ReactNativeStatusBar, StyleSheet, View } from 'react-native';
import Navigation from './src/components/navigation-container/navigation-container';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from './src/components/text/text';
import TippScreen from './src/screens/tipp/tipp-screen';
import NavigationContainer from './src/components/navigation-container/navigation-container';
import TasteScreen from './src/screens/taste/taste-screen';
import Navigator from './src/components/navigator/navigator';
import { Tab } from './src/components/navigator/navigator';

export default function App(): React$Element<any> | null {
    const [areFontsLoaded, fontError] = useFonts({
        'Verdana-Bold': require('./assets/fonts/Verdana-Bold.ttf'),
        Verdana: require('./assets/fonts/Verdana.ttf'),
    });

    if (!areFontsLoaded && !fontError) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <SafeAreaView style={styles.view}>
                    <Navigator>
                        <Tab.Screen
                            name={'Tipp'}
                            component={TippScreen}
                        />
                        <Tab.Screen
                            name={'Taste'}
                            component={TasteScreen}
                        />
                    </Navigator>
                    <StatusBar style="inverted" />
                </SafeAreaView>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#222222',
        paddingTop: ReactNativeStatusBar.currentHeight,
    },
});
