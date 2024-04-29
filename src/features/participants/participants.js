// @flow
import { useState } from 'react';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { participants } from '../../../data/participants';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { TouchableOpacity } from 'react-native';
import Participant from '../../features/participants/participant';

const Participants = (): React$Element<any> => {
    const [data, setData] = useState(participants);

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
                    activeOpacity={0.9}
                    onLongPress={drag}
                    disabled={isActive}
                    style={{}}
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
        <DraggableFlatList
            style={{
                backgroundColor: '#222222',
            }}
            data={data}
            onDragEnd={({ data }) => setData(data)}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

export default Participants;
