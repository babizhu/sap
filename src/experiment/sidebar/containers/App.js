/**
 * Created by liu_k on 2015/12/29.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchSidebarData } from '../actions'
import Sidebar  from '../components/sidebar'

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchSidebarData());
        //console.log("componentDidMount selectedReddit=" + selectedReddit);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            //console.log("nextProps.selectedReddit !== this.props.selectedReddit");
            //const { dispatch, selectedReddit } = nextProps;
            //dispatch(fetchPostsIfNeeded(selectedReddit))

        }

    }

    render() {
        //const { receivedAt, data } = this.props;
        return (
            <div>
                <Sidebar {...this.props} />
            </div>
        )
    }
}

App.propTypes = {
    //data: PropTypes.string.isRequired,
    receivedAt: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    const { sidebarData } = state;
    //for( let key in sidebarData ){
    //    console.log( 'key=' + key + ',value=' + sidebarData[key])
    //}
    const {
        receivedAt,
        data
        } = sidebarData;


    //console.log( 'data.length =' + data.length );
    //data = data.filter( child=>{
    //    return ( child.data.author ==='grumpy_youngMan')
    //});
    //
    //console.log(  'data.length =' + data.length );

    return {
        receivedAt,
        data
    }
}

export default connect(mapStateToProps)(App)
