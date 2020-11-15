import React from 'react';

function CustomerDelete(props) {
    const deleteCustomer = (id) => {
        const url = './api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        .then(props.stateRefresh())
        .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={(e) => {deleteCustomer(props.id)}}>삭제</button>
        </div>
    )
}

export default CustomerDelete;