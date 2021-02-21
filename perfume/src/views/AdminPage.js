import React, { useEffect, useState } from 'react';
import AddForm from '../components/AddForm';
import Like from '../components/Like'

export default () => {
    return (
        <div>
            <AddForm />
            <Like/>
        </div>
    )
}