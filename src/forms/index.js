import React from 'react';
import BasicFormOne from './BasicFormOne';
import BasicFormTwo from './BasicFormTwo';
import BasicFormThree from './BasicFormThree';

import FormikBasicOne from './FormikBasicOne';
import FormikBasicTwo from './FormikBasicTwo';

function Forms() {
    return (
        <div>
            <h3>React forms</h3>
            <BasicFormOne />
            <BasicFormTwo />
            <BasicFormThree />
            <h3>Formik forms</h3>
            <FormikBasicOne />
            <FormikBasicTwo />
        </div>
    )
}

export default Forms;