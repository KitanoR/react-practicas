import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('Volver a generar');
    return (
        <button
                onClick={() => {
                    increment(5);
                }}
                className="btn btn-primary"
            >
                Incremetar
            </button>
    )
})
