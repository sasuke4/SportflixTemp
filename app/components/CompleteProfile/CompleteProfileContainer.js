import CompleteProfile from './CompleteProfile';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    api: state.api,
    token: state.token,
    status: state.status,
    location: state.location,
  };
}

export default connect(mapStateToProps)(CompleteProfile);
