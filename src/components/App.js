import React from 'react';
import './App.css';
import CommentsList from '../containers/CommentsListContainer';
import AddCommentContainer from '../containers/AddCommentContainer';

const App = () => {
  return (
    <div className="App">
      <AddCommentContainer />
      <CommentsList />
    </div>
  );
};

export default App;