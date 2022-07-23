import { atom } from 'recoil';

export const issueListState = atom({
    key: 'issueListState',
    default: []
});

export const issueHoverState = atom({
    key: 'issueHoverState',
    default: 0
});