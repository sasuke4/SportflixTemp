import PerfilCreate from './PerfilCreate';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    api: state.api,
    avatar: state.avatar,
    token: state.token,
  };
}

export default connect(mapStateToProps)(PerfilCreate);
