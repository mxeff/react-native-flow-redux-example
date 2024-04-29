import Participants from '../../features/participants/participants';
import { useDispatch, useSelector } from 'react-redux';
import { tipSlice } from '../../store/store';

const TipScreen = () => {
    const dispatch = useDispatch();

    const data = useSelector(tipSlice.selectors.selectItems);
    const onDragEnd = ({ data }) => dispatch(tipSlice.actions.setItems(data));

    return (
        <Participants
            onDragEnd={onDragEnd}
            data={data}
        />
    );
};

export default TipScreen;
