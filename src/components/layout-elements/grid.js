import React from "react"

export default function Grid({ children }) {
    return (
        <div style={{ display: 'grid' }}>
            {children}
        </div>
    )
}