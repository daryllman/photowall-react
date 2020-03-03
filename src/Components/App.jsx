import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router' //tiny thing that helps Main component to recognise the Routing that has changed, and connect to routing too

function mapStateToProps(state){
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))


export default App //App is just a container - it does not contain any dom - that is Main component with access to state