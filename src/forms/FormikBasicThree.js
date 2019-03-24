import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormikBasicThree.css';

const SignUpSchema = Yup.object().shape({
    itemName: Yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .required('Required'),
    numberOfItems: Yup.number()
        .min(1, 'Number must be at least 1')
        .required('Required'),
  });

const FormikBasicThree = () => (
	<div className="form-container">
        <h2 className="form-title">Formik Form</h2>
		<Formik
			initialValues={{
				itemName: '',
				numberOfItems: '',
				isUrgent: true,
            }}
            validationSchema={SignUpSchema}
			onSubmit={values => {
				alert(JSON.stringify(values))
			}}
			render={({ errors, touched, handleReset }) => (
				<Form>
                    <label htmlFor="item-name-input" className="input-label">
                        Item name
                    </label>
                    <Field 
                        id="item-name-input"
                        name="itemName" 
                        placeholder="Enter the name of the item"
                        className="input" 
                    />
                    <ErrorMessage
                        name="itemName" 
                        component="span"
                        className="input-feedback" 
                    />

                    <label htmlFor="number-of-items-input" className="">
                        Number of items
                    </label>
                    <Field 
                        id="numberOfItems"
                        type="number" 
                        name="numberOfItems" 
                        placeholder="Enter the number of items"
                        className="input" 
                    />
                    <ErrorMessage 
                        name="numberOfItems" 
                        component="span" 
                        className="input-feedback" 
                    />
                    
                    <label htmlFor="is-urgent-select" className="label">
                        Urgent Order
                    </label>
                    <Field 
                        id="is-urgent-select"
                        component="select" 
                        name="isUrgent"
                        className="select"
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </Field>
			
                    <div className="buttons-container">
                        <button 
                            type="submit" 
                            className="button"
                        >
                            Submit
                        </button>

                        <button 
                            type="button"
                            onClick={handleReset}
                            className="button outlined"
                        >
                            Reset
                        </button>
                    </div>
				</Form>
			)}
		/>
	</div>
  );
  
  export default FormikBasicThree;