import React from 'react';

function ComponentTwo() {
    return (
        <div>
            This component won't be imported until a user navigates to a certain route.
        </div>
    )
}

export default ComponentTwo;