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
    const tagId = useSelector(getSelectedTagId);

    return (
        <span
            className = { `tag ${tagId === id ? 'selected' : ''}` }
            style = { { color, background: bg } }
            onClick = { () => {
                onGetTagId(id);
                dispatch(todosActions.setSelectedTagId(id));
            }
            }>{ name }</span>
    );
};
