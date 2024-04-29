// @flow
import { useState } from 'react';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { participants } from '../../../data/participants';
import type { Participant as TParticipant } from '../../../data/participants';
import type { PressEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { TouchableOpacity } from 'react-native';
import Participant from '../../features/participants/participant';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    onDragEnd: (data: { data: Array<TParticipant> }) => void;
    data: Array<TParticipant>;
}

const Participants = ({ data, onDragEnd }: Props): React$Element<typeof DraggableFlatList> => {
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
            onDragEnd={onDragEnd}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    );
};

export default Participants;
