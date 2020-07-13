import React, { Component } from 'react'

export class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state ={
            item: '',
            brand: '',
            unit: '',
            quantity: '',
            isPurchased: false
        }
    }

    handleChange = (event) => {
        const {id, value} = event.target
        this.setState({
            [id]: value
        })
    }

    handleSubmit =(event) =>{
        event.preventDefault()
        this.props.handleForm({...this.state})
        this.setState({
            item: '',
            brand: '',
            unit: '',
            quantity: ''
        })
    }

    render() {
        const styles = {
            form:{
                display: 'flex',
                flexDirection: 'column',
            },

            button:{
                margin: '1vh',
                width: '5vh',
                alignSelf: 'flex-end',
                backgroundColor:'black',
                borderRadius: '1vh',
                color: 'yellow'
            }
        }

        return (
            <div>
                <h1>Add New Grocery</h1>
                <form onSubmit={this.handleSubmit} style={styles.form}>
                    <label htmlFor='item'>Item</label>
                    <input type='text' value ={this.state.item} onChange={this.handleChange} id='item' required/>
                    <label htmlFor='brand'>Brand</label>
                    <input type='text' value ={this.state.brand} onChange={this.handleChange} id='brand' required/>
                    <label htmlFor='unit'>Unit</label>
                    <input type='text' value ={this.state.unit} onChange={this.handleChange} id='unit' required/>
                    <label htmlFor='quantity'>Quantity</label>
                    <input type='number' value ={this.state.quantity} onChange={this.handleChange} id='quantity' required/>
                    <button style={styles.button} type='submit'>Add</button>
                </form>
                <div>
                    <h5>Preview</h5>
                    <h6>Item: <strong>{this.state.item}</strong></h6>
                    <h6>Brand: <strong>{this.state.brand}</strong></h6>
                    <h6>Unit: <strong>{this.state.unit}</strong></h6>
                    <h6>Quantity: <strong>{this.state.quantity}</strong></h6>
                </div>

                
            </div>
        )
    }
}

export default AddForm
