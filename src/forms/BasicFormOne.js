import React from 'react';

/**
 * A basic HTML form.
 */
class BasicFormOne extends React.Component {
    constructor(props) {
        super(props);

        // Initialise the form state.
        // Piece of state for each form input.
        this.state = {
            itemName: "",
            numberOfItems: "",
        }
    }

    // Called each time the itemName input changes i.e. the user types. See onChange prop for itemName input below.
    // Updates state to store whatever has been entered through the form.
    // See https://reactjs.org/docs/handling-events.html for more details. 
    // React provides 'this.setState' to safely update the component state, ttps://reactjs.org/docs/react-component.html#setstate
    updateItemName = e => {
        this.setState({ itemName: e.target.value })
    };

    // Called each time the numberOfItems input changes - see onChange prop for numberOfItems input below.
    // Updates state to store whatever has been entered through the form.
    // See https://reactjs.org/docs/handling-events.html for more details.
    // React provides 'this.setState' to safely update the component state, see ttps://reactjs.org/docs/react-component.html#setstate
    updateNumberOfItems = e => {
        this.setState({ numberOfItems: e.target.value })
    };

    handleSubmit = e => {
        // HTML Forms default behaviour is to refresh the page on submit - override that here.
        e.preventDefault();  

        // Prove that our state reflects that which was entered into the form. 
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <div style={{ margin: 10 }}>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="itemName" 
                        placeholder="Item Name"
                        value={this.state.itemName}     // We control the value using state. 
                        onChange={this.updateItemName}  // Function to call when this field changes. 
                    />

                    <input
                        type="number"
                        name="numberOfItems"
                        placeholder="Number of items" 
                        value={this.state.numberOfItems}    // We control the value using state.
                        onChange={this.updateNumberOfItems} // Function to call when this field changes.
                    />

                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

export default BasicFormOne;