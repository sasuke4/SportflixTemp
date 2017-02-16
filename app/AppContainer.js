import App from './App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    status: state.status,
    location: state.location,
    api: state.api,
  };
}

export default connect(mapStateToProps)(App);
