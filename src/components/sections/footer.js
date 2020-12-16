import React from 'react';
import Container from "../layout-elements/container";

export default function Footer(props) {
    return (
        <footer className="bg-tan">
            <Container>
                <p>&copy; Sadiyah Ali {new Date().getFullYear()}</p>
            </Container>
        </footer>
    )
}