// @flow
import Text from '../text/text';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

// $FlowFixMe
export const Tab = createBottomTabNavigator();

interface Props {
    children: ?React$Node;
}

const Navigator = (props: Props): React$Element<any> => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'rgba(7, 45, 82, 0.9)',
                tabBarInactiveBackgroundColor: 'rgba(10, 65, 120, 0.9)',
                tabBarItemStyle: { borderTopWidth: 4, borderTopColor: '#db2a82' },
                tabBarIcon: () => void 0,
                tabBarIconStyle: { display: 'none' },
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    color: 'white',
                },
                tabBarStyle: {
                    backgroundColor: '#222222',
                },
            }}
        >
            {props.children}
        </Tab.Navigator>
    );
};

export default Navigator;
