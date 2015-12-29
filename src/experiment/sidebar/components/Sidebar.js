/**
 *
 * Created by liu_k on 2015/12/29.
 */
import React, { Component } from 'react';

class Sidebar extends Component {
    render() {

        const { receivedAt, data } = this.props;
        let items=[];
        for( let x of data ){
            //console.log( x.author );
            items.push(<li>{x.author}</li>);

        }

        for( let x of items ){
            console.log( (x) );
        }

        return (
            <div className='header'>
                receivedAt:{receivedAt}<br />

                <ul>{items}</ul>
            </div>
        );
    }
}

Sidebar.propTypes = {};
Sidebar.defaultProps = {};

export default Sidebar;
