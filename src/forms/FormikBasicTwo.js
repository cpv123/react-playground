import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    itemName: Yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .required('Required'),
    numberOfItems: Yup.number()
        .min(1, 'Number must be at least 1')
        .required('Required'),
  });

const FormikBasicTwo = () => (
	<div>
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
			render={({ errors, touched }) => (
				<Form>
					<Field name="itemName" placeholder="Item Name" />
                    <ErrorMessage name="itemName" component="div" />

					<Field type="number" name="numberOfItems" placeholder="Number of items" />
                    <ErrorMessage name="numberOfItems" component="div" />

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
  
  export default FormikBasicTwo;