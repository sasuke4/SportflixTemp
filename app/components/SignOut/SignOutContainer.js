import SignOut from './SignOut';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    token: state.token,
    api: state.api,
  };
}

export default connect(mapStateToProps)(SignOut);
