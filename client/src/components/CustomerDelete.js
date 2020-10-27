import React from 'react';

function CustomerDelete() {
    deleteCustomer(id) {
        const url = '/api/suctomers/' + id;
        fetch(rul, {
            method: DELETE'
        });
        this.props
    }

    return (
        <button>삭제</button>
    )
}

export default CustomerDelete;