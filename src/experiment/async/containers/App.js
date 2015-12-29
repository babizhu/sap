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
        console.log("componentDidMount selectedReddit=" + selectedReddit);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            //console.log("nextProps.selectedReddit !== this.props.selectedReddit");
            const { dispatch, selectedReddit } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedReddit))

        }

    }

    handleChange(nextReddit) {
        const { dispatch, selectedReddit } = this.props;
        dispatch(selectReddit(nextReddit));
        //dispatch(fetchPostsIfNeeded(selectedReddit))
    }

    printState() {
        //function multiply(x){
        //    let result = 2*x;
        //
        //    return function(y){
        //        let xy= result*y;
        //        return function(z){
        //            return xy*z;
        //        }
        //
        //
        //    }
        //}
        //const method=(x,s)=>y=>z=>{
        //    return x*y*z*s;
        //}
        //
        //
        ////console.log("multiply(40)(10)=" + multiply(40)(10));
        ////console.log("method(40)(10)(2)=" + method(40)(10)(2));
        ////console.log("method(40)(10)=" + method(40)(10));
        ////console.log("method(40)(10)(11)=" + method(40)(10)(11));
        ////console.log("method(40,2)(10)(11)=" + method(40,2)(10)(11));
        //
        //const m1 = msg=>func=>{
        //    func(msg);
        //}
        //
        //const func1=msg=>{
        //    console.log(msg)
        //}
        // m1(2567890)(func1);
        //
        //function applyMiddleware( ...middlewares ) {
        //    return (next) =>
        //        (reducer, initialState)=> {
        //            let store = next(reducer, initialState);
        //            let dispatch = store.dispatch;
        //            return {
        //                store,
        //                dispatch
        //            }
        //        }
        //
        //}
        //
        //const func2 = function( reducer,initialState){
        //    return {
        //        store: reducer+initialState,
        //        dispatch :'dispatch'
        //    }
        //}
        //console.log('applyMiddleware( 23 )(func2)( \'aaaa\',\'bbb\')=' + applyMiddleware( 23 )(func2)( 'aaaa','bbb'));

        //const mutpt = function(x,y){
        //    return 2*x*y;
        //};
        //const add = function(x,y){
        //    return 2+x+y;
        //};
        //const func = function( number, method ){
        //    return method(number);
        //}
        //
        //console.log( func(3,add));
        //
        //function fetchPostsIfNeeded(reddit) {
        //    return (dispatch, getState) => {
        //        console.log( dispatch + ' ' + getState);
        //    }
        //}
        //
        //
        ////console.log( 'fetchPostsIfNeeded(\'a\') = ' + fetchPostsIfNeeded('a'));
        //
        //const test = function (index,name) {
        //    console.log('arguments=' + JSON.stringify(arguments) );
        //    console.log(  [].slice.call(arguments, 0) );
        //    console.log(  [].slice.call(arguments, 1) );
        //    console.log(  [].slice.call(arguments, 2) );
        //};
        //
        //test( 333, 'liulaoye');
        //
        //const test2=function(){
        //    console.log('abcdef');
        //}
        //const test1 = function( fn ){
        //    fn.apply( );
        //};
        //test1( test2 );

        //var currying = function(fn) {
        //    // fn 指官员消化老婆的手段
        //    console.log('arguments=' + JSON.stringify(arguments) );
        //    var args = [].slice.call(arguments, 1);
        //    console.log('[].slice.call(arguments, 1)=' + args );
        //    // args 指的是那个合法老婆
        //    return function() {
        //        // 已经有的老婆和新搞定的老婆们合成一体，方便控制
        //        var newArgs = args.concat([].slice.call(arguments));
        //        // 这些老婆们用 fn 这个手段消化利用，完成韦小宝前辈的壮举并返回
        //        return fn.apply(null, newArgs);
        //    };
        //};
        //
        //var getWife = currying(function() {
        //    var allWife = [].slice.call(arguments);
        //    // allwife 就是所有的老婆的，包括暗渡陈仓进来的老婆
        //    console.log(allWife.join(";"));
        //}, "合法老婆");
        //
        //// 获得其他6个老婆
        //getWife("大老婆","小老婆","俏老婆","刁蛮老婆","乖老婆","送上门老婆");
        //
        //// 换一批老婆
        //getWife("超越韦小宝的老婆");
/////////////////////////////////////////////////////////////////////////////////////////////////////
        //console.log('this.props = '+ JSON.stringify(this.props) );
        //for( let key in this.props ){
        //    console.log( 'key = ' + key);
        //    console.log( 'value = ' + this.props[key] );
        //}
        //const keys = "abcd";
        //let clazz = {
        //    total: 'name'
        //};
        //let test = {
        //    [clazz.total]:  2132323
        //};
        ////console.log(test.name);
        //for (let key in test) {
        //    console.log('key = ' + key);
        //    console.log('value = ' + test[key]);
        //}
///////////////////////////////////////////////////////////////////////////////////////////////////
        //var target = { a: 1 };
        //var source1 = { b: 2,c:4 };
        //var source2 = { c: 3 };
        //const result = Object.assign(target, source1, source2);
        //console.log('target=' + JSON.stringify(target) + ' source1=' + JSON.stringify(source1) + ' source2=' + JSON.stringify(source2));
        //console.log('result=' + JSON.stringify(result));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //const keys = 'abcd';
        //let result=[];
        //for( let ch of keys){
        //    result = Object.assign({}, result, {
        //        [ch]: ch
        //    });
        //}
        //for (let key in result) {
        //    console.log('key = ' + key);
        //    console.log('value = ' + result[key]);
        //}

///////////////////////////////////////////////////////////////////////////////////////
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

    for( let key in state ){
        console.log('key=' + key + ',value=' + state[key]);
        if( key ==='postsByReddit'){
            console.log( JSON.stringify(state[key]));
        }
    }

    const { selectedReddit, postsByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
        } = postsByReddit[selectedReddit] || {//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        isFetching: true,
        items: []
    };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)
