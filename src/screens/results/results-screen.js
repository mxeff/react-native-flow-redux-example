import Participants from '../../features/participants/participants';
import { useDispatch, useSelector } from 'react-redux';
import { resultSlice } from '../../store/store';

const ResultsScreen = (): React$Element<any> => {
    const dispatch = useDispatch();

    const data = useSelector(resultSlice.selectors.selectItems);
    const onDragEnd = ({ data }) => dispatch(resultSlice.actions.setItems(data));

    return (
        <Participants
            onDragEnd={onDragEnd}
            data={data}
        />
    );
};

export default ResultsScreen;
