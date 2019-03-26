import React from 'react';

/**
 * Basic HTML form.
 * Neater syntax for initialising state.
 * Includes simple validation - required fields and minimum value on numberOfItems.
 * One function to handle both field changes/state updates.
 * Additional form field - a yes/no select.
 * 
 */
class BasicFormTwo extends React.Component {

    // Neat way to initialise a component's state.
    // Behind the scenes React will include the constructor and super syntax from BasicFormOne.
    state = {
        itemName: "",
        numberOfItems: "",
        isUrgent: true,
    }
 
    // Now we have a single function to handle both fields changing, and therefore both pieces of state updating.
    // Both inputs have their onChange props pointing to this function.
    // Previously, we just looked at e.target.value (the value of the form field) and updated the relevant piece of state to equal this.
    // Now, we take the value and the name of the thing being updated (which we make sure is the same name as the piece of state).  
    updateFormField = e => {

        // This is the same as saying:
        // const name = e.target.name AND ALSO const value = e.target.value;
        // Have a read about 'object destructuring' for further details.
        const { name, value } = e.target;

        // Look at the console to see what these things look like on each change.
        console.log(e.target, name, value)

        this.setState({
            [name]: value
        })
    };

    handleSubmit = e => {
        e.preventDefault();  
        alert(JSON.stringify(this.state))
    }

    render() {
        // More object destructuring so that we don't need to specify this.state. each time.
        const { itemName, numberOfItems, isUrgent } = this.state;
        return (
            <div style={{ margin: 10 }}>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        required    // Required field, neater syntax for required={true}
                        name="itemName" 
                        placeholder="Item Name"
                        value={itemName}
                        onChange={this.updateFormField} 
                    />

                    <input
                        type="number"
                        required    // Required field, neater syntax for required={true}
                        min={0}     // Can't enter a number less than zero
                        name="numberOfItems"
                        placeholder="Number of items" 
                        value={numberOfItems} 
                        onChange={this.updateFormField} 
                    />

                    <select 
                        name="isUrgent" 
                        value={isUrgent} 
                        onChange={this.updateFormField}
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

export default BasicFormTwo;