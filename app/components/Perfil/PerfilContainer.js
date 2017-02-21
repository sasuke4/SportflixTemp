import Perfil from './Perfil';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    api: state.api,
    token: state.token,
  };
}

export default connect(mapStateToProps)(Perfil);
