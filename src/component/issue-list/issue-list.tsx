import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';

import { IssueListProps } from './types';
import { Issue, IssueProps } from '../issue';
import { issueListState } from '../../recoil/states';

export const IssueList = function (props: IssueListProps) {
    const { api = '' } = props;
    const [ issueList, setIssueList ] = useRecoilState(issueListState);

    useEffect(() => {
        api && axios.get(api, {})
            .then((res) => {
                const result = res.data;
                result.sort((a: IssueProps, b: IssueProps) => b.comments - a.comments);
                setIssueList(result);
            })
    }, [api, setIssueList]);

    return (
        <div className="issue">
            <div className="issue-header">
                <span className="id">이슈 번호</span>
                <span className="title">제목</span>
                <span className="created-at">작성일</span>
                <span className="comments">코멘트 수</span>
            </div>
            <ul className="issue-list">
            { 
                issueList.map((issue: IssueProps) => {
                    return (
                        <Issue id={issue.id}
                            title={issue.title} 
                            created_at={issue.created_at} 
                            comments={issue.comments} 
                        />
                    );
                })
            }
            </ul>
        </div>
    );
}