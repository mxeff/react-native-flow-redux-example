// @flow
import Participants from '../../features/participants/participants';
import { useDispatch, useSelector } from 'react-redux';
import { resultSlice } from '../../store/store';
import type { Participant } from '../../../data/participants';

const ResultsScreen = (): React$Element<typeof Participants> => {
    const dispatch = useDispatch();

    const data = useSelector(resultSlice.selectors.selectItems);
    const onDragEnd = ({ data }: { data: Array<Participant> }) => dispatch(resultSlice.actions.setItems(data));

    return (
        <Participants
            onDragEnd={onDragEnd}
            data={data}
        />
    );
};

export default ResultsScreen;
