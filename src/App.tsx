import React from 'react';
import { IssueList } from './component/issue-list';

function App() {
  return (
    <div className="app">
      <IssueList api="https://api.github.com/repos/facebook/create-react-app/issues" />
    </div>
  );
}

export default App;
