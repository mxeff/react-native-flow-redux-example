// @flow
import Participants from '../../features/participants/participants';
import { useDispatch, useSelector } from 'react-redux';
import { tipSlice } from '../../store/store';
import type { Participant } from '../../../data/participants';

const TipScreen = (): React$Element<typeof Participants> => {
    const dispatch = useDispatch();

    const data = useSelector(tipSlice.selectors.selectItems);
    const onDragEnd = ({ data }: { data: Array<Participant> }) => dispatch(tipSlice.actions.setItems(data));

    return (
        <Participants
            onDragEnd={onDragEnd}
            data={data}
        />
    );
};

export default TipScreen;
