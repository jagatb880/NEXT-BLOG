"use client"
import { useState } from "react";

export default function User() {

    const [h3Style, setH3Style] = useState({ backgroundColor: "green" })
    return (
        <div>
            <h1 style={{ backgroundColor: "blue" }}>User Page</h1>
            <h2>Heading 2 in user pag</h2>
            <h3 style={h3Style}>Heading 3 in user page</h3>
            <button onClick={() => setH3Style({ backgroundColor: "red" })}>Updte Style</button>
        </div>
    );
}