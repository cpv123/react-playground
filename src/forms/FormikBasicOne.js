import React from 'react';
import { Formik, Field, Form } from 'formik';

const FormikBasicOne = () => (
	<div>
		<Formik
			initialValues={{
				itemName: '',
				numberOfItems: '',
				isUrgent: true,
			}}
			onSubmit={values => {
				alert(JSON.stringify(values))
			}}
			render={() => (
				<Form>
					<Field name="itemName" placeholder="Item Name" />

					<Field type="number" name="numberOfItems" placeholder="Number of items" />

                    <Field component="select" name="isUrgent">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </Field>
			
					<button type="submit">Submit</button>
				</Form>
			)}
		/>
	</div>
  );
  
  export default FormikBasicOne;