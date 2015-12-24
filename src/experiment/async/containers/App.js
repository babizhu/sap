import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

import '../css/header.scss'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        const { dispatch, selectedReddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedReddit));
        //console.log("componentDidMount selectedReddit=" + selectedReddit);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedReddit))
        }
        console.log("componentWillReceiveProps");
    }

    handleChange(nextReddit) {
        this.props.dispatch(selectReddit(nextReddit))
    }

    printState(){
        function multiply(x){
            let result = 2*x;

            return function(y){
                let xy= result*y;
                return function(z){
                    return xy*z;
                }


            }
        }
        const method=(x,s)=>y=>z=>{
            return x*y*z*s;
        }


        //console.log("multiply(40)(10)=" + multiply(40)(10));
        //console.log("method(40)(10)(2)=" + method(40)(10)(2));
        //console.log("method(40)(10)=" + method(40)(10));
        //console.log("method(40)(10)(11)=" + method(40)(10)(11));
        //console.log("method(40,2)(10)(11)=" + method(40,2)(10)(11));

        const m1 = msg=>func=>{
            func(msg);
        }

        const func1=msg=>{
            console.log(msg)
        }
         m1(2567890)(func1);

        function applyMiddleware( ...middlewares ) {
            return (next) =>
                (reducer, initialState)=> {
                    let store = next(reducer, initialState);
                    let dispatch = store.dispatch;
                    return {
                        store,
                        dispatch
                    }
                }

        }

        const func2 = function( reducer,initialState){
            return {
                store: reducer+initialState,
                dispatch :'dispatch'
            }
        }
        console.log('applyMiddleware( 23 )(func2)( \'aaaa\',\'bbb\')=' + applyMiddleware( 23 )(func2)( 'aaaa','bbb'));



    }

    handleRefreshClick(e) {
        e.preventDefault();

        const { dispatch, selectedReddit } = this.props;
        dispatch(invalidateReddit(selectedReddit));
        dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    render() {
        this.printState();
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
        return (
            <div className='header'>
                <Picker value={selectedReddit}
                        onChange={this.handleChange}
                        options={[ 'reactjs', 'frontend' ]}/>

                <p>
                    {lastUpdated &&
                    <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                        {' '}
            </span>
                    }
                    {!isFetching &&
                    <a href="#"
                       onClick={this.handleRefreshClick}>
                        Refresh
                    </a>
                    }
                </p>
                {isFetching && posts.length === 0 &&
                <h2>Loading...</h2>
                }
                {!isFetching && posts.length === 0 &&
                <h2>Empty.</h2>
                }
                {posts.length > 0 &&
                <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                    <Posts posts={posts}/>
                </div>
                }
            </div>
        )
    }
}

App.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { selectedReddit, postsByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
        } = postsByReddit[selectedReddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)
