// @flow
import Participants from '../../features/participants/participants';
import { useDispatch, useSelector } from 'react-redux';
import { tasteSlice } from '../../store/store';
import type { Participant } from '../../../data/participants';

const TasteScreen = (): React$Element<typeof Participants> => {
    const dispatch = useDispatch();

    const data = useSelector(tasteSlice.selectors.selectItems);
    const onDragEnd = ({ data }: { data: Array<Participant> }) => dispatch(tasteSlice.actions.setItems(data));

    return (
        <Participants
            onDragEnd={onDragEnd}
            data={data}
        />
    );
};

export default TasteScreen;
