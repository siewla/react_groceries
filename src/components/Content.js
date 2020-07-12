import React, { Component } from 'react'

export class Content extends Component {

    render() {
        const styles = {
            mainContainer: {
                padding: '2vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },

            leftNav: {
                width: '20%',
                marginRight: '2vh',
                border: '1px solid black',
                borderRadius: '2vh',
                padding: '1vh',
                minHeight: '20vh'
            },
            rightContainer: {
                width: '60%',
                border: '1px solid black',
                borderRadius: '2vh',
                padding: '1vh',
                minHeight: '20vh'
            }
        }

        return (
            <div style={styles.mainContainer}>
                <div style={styles.leftNav}>
                    person
                </div>
                <div style={styles.rightContainer}>
                    list
                </div>
            </div>
        )
    }
}

export default Content
