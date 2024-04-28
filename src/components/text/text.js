// @flow

import type { PropsOf } from 'react';
import { Text as ReactNativeText } from 'react-native';
import StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Verdana',
    },
});

const Text = (props: PropsOf<ReactNativeText>): React$Element<any> => {
    return <ReactNativeText style={[props.style, styles.text]}>{props.children}</ReactNativeText>;
};

export default Text;
