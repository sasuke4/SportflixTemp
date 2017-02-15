import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    status: state.status,
  };
}

export default connect(mapStateToProps)(App);
