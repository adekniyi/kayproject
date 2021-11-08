import React from 'react'

export default function Success(props) {

    if(!props.show) {
        return null;
    }
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-body">
                        successfully added
                    </div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button">close</button>
                    </div>
                </div>
            </div>
        </>
    )
}
