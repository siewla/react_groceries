import React, { Component } from 'react'
import SAMPLE_GROCERIES from '../data.js'
import AddForm from './AddForm'
import GroceryCard from './GroceryCard'
export class Content extends Component {
    constructor (){
        super()
        this.state ={
            groceries: SAMPLE_GROCERIES
        }
    }

    handleForm =(event) => {
        console.log(event)
        this.setState({
                groceries: [event, ...this.state.groceries]})
        
    }

    setPurchased =(i) =>{
        // console.log(this.state.groceries)
        const groceries = [...this.state.groceries]
        groceries[i].isPurchased=!groceries[i].isPurchased
        this.setState({groceries:groceries})
    }

    render() {
        const styles = {
            mainContainer: {
                padding: '2vh',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            },

            leftNav: {
                width: '25%',
                border: '1px solid black',
                borderRadius: '2vh',
                padding: '1vh',
                minHeight: '20vh'
            },

            middleContainer:{
                width: '25%',
                border: '1px solid black',
                borderRadius: '2vh',
                padding: '1vh',
                minHeight: '20vh'
            },

            rightContainer: {
                width: '45%',
                border: '1px solid black',
                borderRadius: '2vh',
                padding: '1vh',
                minHeight: '20vh',
                display:'flex',
                flexDirection:'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }
        }

        return (
            <div style={styles.mainContainer}>
                {/* <div style={styles.leftNav}>
                </div> */}
                <div style={styles.middleContainer}>
                    <AddForm handleForm ={this.handleForm}/>
                </div>
                <div style={styles.rightContainer}>
                    {this.state.groceries.map((grocery,index) =>{
                        return (
                            <GroceryCard key={grocery.item+index} index={index} grocery={grocery} setPurchased={this.setPurchased} />
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default Content
