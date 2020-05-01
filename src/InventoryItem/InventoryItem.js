import React, { Component } from 'react';

class InventoryItem extends Component {

    state = {
        detailsVisible: false
    }

    handleClick = () => {
       console.log('clicked');
        this.setState({
            detailsVisible: !this.state.detailsVisible //eventually toggle?
        })
        //Dont console.log state here, it usually lies to you (stale data)
    }
    render() {
        console.log('state', this.state.detailsVisible);
        let details;

        if(this.state.detailsVisible) {
            details = (
                <p>{this.props.item.color}, {this.props.item.size}</p>
            )
        }

        return (
                <>
                    <span>{this.props.item.description}</span>
                    <button onClick={this.handleClick}>DETAILS</button>
                    {details}
                </>
            ) //end return
        //if the user clicks a show details button 
        //show the details
    } // end render
} //end class

export default InventoryItem;