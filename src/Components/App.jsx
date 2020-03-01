import Main from './Main'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        posts: state
    }
}


const App = connect(mapStateToProps)(Main)


export default App //App is just a container - it does not contain any dom - that is Main component with access to state