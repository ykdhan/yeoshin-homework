import { useRecoilState } from 'recoil';

import { IssueProps } from './types';
import { issueHoverState } from '../../recoil/states';

export const Issue = function (props: IssueProps) {
    const { id, title, created_at, comments } = props;
    const [ hover, setHover ] = useRecoilState(issueHoverState);

    return (
        <li 
            className={`issue-item ${hover === 0 ? 'show' : hover === id ? 'show' : ''}`}
            onMouseOver={() => setHover(id)} onMouseOut={() => setHover(0)}
        >
            <span className="id">{id}</span>
            <span className="title">{title}</span>
            <span className="created-at">{created_at.replace(/T/g, ' ').replace(/Z/g, '')}</span>
            <span className="comments">{comments}</span>
        </li>
    );
}