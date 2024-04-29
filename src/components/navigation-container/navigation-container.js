// @flow
import { NavigationContainer as ReactNativeNavigationContainer, DefaultTheme } from '@react-navigation/native';

interface Props {
    children?: ?React$Element<any>;
}

const NavigationContainer = (props: Props): React$Element<typeof ReactNativeNavigationContainer> => {
    return (
        <ReactNativeNavigationContainer
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    border: '#db2a82',
                    card: 'rgba(10, 65, 120, 0.9)',
                    primary: 'white',
                },
            }}
        >
            {props.children}
        </ReactNativeNavigationContainer>
    );
};

export default NavigationContainer;
