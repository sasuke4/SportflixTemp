import Avatar from './Avatar';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    api: state.api,
    token: state.token,
  };
}

export default connect(mapStateToProps)(Avatar);
