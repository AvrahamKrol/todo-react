// Core
import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { todosActions, getSelectedTagId } from '../../lib/redux';

type Props = {
    color: string;
    bg: string;
    id: string;
    name: string;
    onGetTagId: (id: string) => void;
};


export const Tag: FC<Props> = ({
    color, bg, id, name, onGetTagId,
}) => {
    const dispatch = useDispatch();
    const selectedTagId = useSelector(getSelectedTagId);
    // eslint-disable-next-line
    console.log(selectedTagId);

    return (
        <span
            className = { `tag ${selectedTagId === id ? 'selected' : ''}` }
            style = { { color, background: bg } }
            onClick = { () => {
                onGetTagId(id);
                dispatch(todosActions.setSelectedTagId(id));
            }
            }>{ name }</span>
    );
};
