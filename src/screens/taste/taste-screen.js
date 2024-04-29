import Participants from '../../features/participants/participants';
import { useDispatch, useSelector } from 'react-redux';
import { tasteSlice } from '../../store/store';

const TasteScreen = (): React$Element<any> => {
    const dispatch = useDispatch();

    const data = useSelector(tasteSlice.selectors.selectItems);
    const onDragEnd = ({ data }) => dispatch(tasteSlice.actions.setItems(data));

    return (
        <Participants
            onDragEnd={onDragEnd}
            data={data}
        />
    );
};

export default TasteScreen;
