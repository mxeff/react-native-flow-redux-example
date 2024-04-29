// @flow
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar as ReactNativeStatusBar, StyleSheet, View } from 'react-native';
import Navigation from './src/components/navigation-container/navigation-container';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Text from './src/components/text/text';
import TipScreen from './src/screens/tip/tip-screen';
import NavigationContainer from './src/components/navigation-container/navigation-container';
import TasteScreen from './src/screens/taste/taste-screen';
import Navigator from './src/components/navigator/navigator';
import { Tab } from './src/components/navigator/navigator';
import DeviationScreen from './src/screens/deviation/deviation-screen';
import ResultsScreen from './src/screens/results/results-screen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App(): React$Element<any> | null {
    const [areFontsLoaded, fontError] = useFonts({
        'Verdana-Bold': require('./assets/fonts/Verdana-Bold.ttf'),
        Verdana: require('./assets/fonts/Verdana.ttf'),
    });

    if (!areFontsLoaded && !fontError) {
        return null;
    }

    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                    <SafeAreaView style={styles.view}>
                        <Navigator>
                            <Tab.Screen
                                name={'Tipp'}
                                component={TipScreen}
                            />
                            <Tab.Screen
                                name={'Taste'}
                                component={TasteScreen}
                            />
                            <Tab.Screen
                                name={'Ergebnis'}
                                component={ResultsScreen}
                            />
                            <Tab.Screen
                                name={'Abweichung'}
                                component={DeviationScreen}
                            />
                        </Navigator>
                        <StatusBar style="inverted" />
                    </SafeAreaView>
                </NavigationContainer>
            </GestureHandlerRootView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#222222',
        paddingTop: ReactNativeStatusBar.currentHeight,
    },
});
