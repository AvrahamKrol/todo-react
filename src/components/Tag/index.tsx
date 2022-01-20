// Core
import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { todosActions, getTagId } from '../../lib/redux';

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
    const tagId = useSelector(getTagId);
    const dispatch = useDispatch();

    return (
        <span
            className = { `tag ${tagId === id ? 'selected' : ''}` }
            style = { { color, background: bg } }
            onClick = { () => {
                onGetTagId(id);
                dispatch(todosActions.setTagId(id));
            }
            }>{ name }</span>
    );
};
