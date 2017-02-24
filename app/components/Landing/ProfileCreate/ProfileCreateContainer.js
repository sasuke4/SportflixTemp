import ProfileCreate from './ProfileCreate';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    api: state.api,
    avatar: state.avatar,
    token: state.token,
  };
}

export default connect(mapStateToProps)(ProfileCreate);
