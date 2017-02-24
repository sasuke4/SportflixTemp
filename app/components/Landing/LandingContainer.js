import Landing from './Landing';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    api: state.api,
    token: state.token,
    location: state.location,
  };
}

export default connect(mapStateToProps)(Landing);
