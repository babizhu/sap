/**
 *
 * Created by liu_k on 2015/12/29.
 */
import React, { Component } from 'react';

class Sidebar extends Component {
    createMarkup() { return {__html: 'First &middot; Second'}; };
    render() {

        const { receivedAt, data } = this.props;
        //let items=[];
        //for( let x of data ){
        //    //console.log( x.author );
        //    items.push(x);
        //
        //}
        ////if( !data.map ){}
        ////
        //for( let x of items ){
        //    console.log( (x) );
        //}

        //{item.author}:{{__html:item.selftext_html}}
        let a = '<h1>bbbb</h1>';
        return (
            <div className='header'>
                receivedAt:{receivedAt}<br />

                <ul>
                    {data.map((item, index) =>
                        <li key={index}>


                                {item}
                            </li>
                    )}
                </ul>


            </div>
        );
    }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
