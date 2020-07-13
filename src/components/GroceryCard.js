import React, { Component } from 'react'

export class GroceryCard extends Component {
    
    handleBought =(event) =>{
        this.props.setPurchased(this.props.index)
    }

    render() {
        const styles ={
            groceryContainer :{
                border: '1px solid black',
                borderRadius: '2vh',
                padding: '1vh',
                maxWidth: '15vh',
                margin: '1vh',
            }
        }

        return (
            <div style={styles.groceryContainer}>
                <h6>Item: <strong>{this.props.grocery.item}</strong></h6>
                <h6>Brand: <strong>{this.props.grocery.brand}</strong></h6>
                <h6>Unit: <strong>{this.props.grocery.unit}</strong></h6>
                <h6>Quantity: <strong>{this.props.grocery.quantity}</strong></h6>
                <label>{this.props.grocery.isPurchased ? 'Bought ': 'To Buy '}
                    <input 
                        type="checkbox" 
                        defaultChecked={this.props.grocery.isPurchased} 
                        onChange={this.handleBought}
                    />
                </label>
            </div>
        )
    }
}

export default GroceryCard
