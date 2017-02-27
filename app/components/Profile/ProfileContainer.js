import Profile from './Profile';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const { api, token, location, accountInfo } = state;
  return {
    api,
    token,
    location,
    accountInfo,
  };
}

export default connect(mapStateToProps)(Profile);
