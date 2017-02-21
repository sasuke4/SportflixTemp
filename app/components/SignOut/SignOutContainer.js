import SignOut from './SignOut';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    token: state.token,
    api: state.api,
    previousModal: state.previousModal,
  };
}

export default connect(mapStateToProps)(SignOut);
