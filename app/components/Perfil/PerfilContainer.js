import Perfil from './Perfil';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    token: state.token,
    api: state.api,
  };
}

export default connect(mapStateToProps)(Perfil);
