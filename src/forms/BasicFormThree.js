import React from 'react';

/**
 * Basic HTML form.
 * Neater syntax for initialising state.
 * Includes simple validation - required fields and minimum value on numberOfItems.
 * One function to handle both field changes/state updates.
 * Additional form field - a yes/no select.
 * 
 */
class BasicFormThree extends React.Component {

    state = {
        itemName: "",
        numberOfItems: "",
        isUrgent: true,
        validation: {
            isItemNameValid: false,
            isNumberOfItemsValid: false,
        }
    }
  
    // Callback 
    updateFormField = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => this.validateField(name, value))
    };

    validateField = (name, value) => {
        let itemNameValid = this.state.validation.isItemNameValid;
        let numberOfItemsValid = this.state.validation.isNumberOfItemsValid;
        switch(name) {
            case 'itemName':
                itemNameValid = value.length > 2;
                break;
            case 'numberOfItems':
                numberOfItemsValid = value && value > 0;
                break;
            default:
                break;
        }
        this.setState({
            validation: {
                isItemNameValid: itemNameValid,
                isNumberOfItemsValid: numberOfItemsValid
            }
        })
    }

    isFormValid = () => {
        const { isItemNameValid, isNumberOfItemsValid } = this.state.validation;
        return isItemNameValid && isNumberOfItemsValid;
    }

    handleSubmit = e => {
        e.preventDefault();

        // If the form is not valid, then alert this to the user.
        // Otherwise, alert the form values as usual (in reality, this would be submitting the form).
        if (!this.isFormValid()) {
            const { isItemNameValid, isNumberOfItemsValid } = this.state.validation;
            let fieldsNotValid = [];
            if (!isItemNameValid) { fieldsNotValid.push('Item Name')};
            if (!isNumberOfItemsValid) { fieldsNotValid.push('Number Of Items')};
            alert(`Correct the following fields: ${fieldsNotValid.join(", ")}`)
        } else {
            const formData = { ...this.state };
            delete formData.validation;
            alert(JSON.stringify(formData))
        }
    }

    render() {
        const { itemName, numberOfItems, isUrgent } = this.state;

        return (
            <div style={{ margin: 10 }}>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="itemName" 
                        placeholder="Item Name"
                        value={itemName}
                        onChange={this.updateFormField} 
                    />

                    <input
                        type="number"
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

export default BasicFormThree;