import SignIn from './SignIn';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    token: state.token,
  };
}

export default connect(mapStateToProps)(SignIn);
