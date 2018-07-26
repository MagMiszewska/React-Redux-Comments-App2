import { connect } from 'react-redux';
import { addComment } from '../actions/actions';
import AddComment from '../components/AddComment';

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);