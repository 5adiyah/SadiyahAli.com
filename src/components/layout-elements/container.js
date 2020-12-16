import React from "react"

export default function Container({ children }) {
    return (
        <div style={{ margin: `0 auto`, maxWidth: 1440, padding: `0 1rem` }}>
            {children}
        </div>
    )
}