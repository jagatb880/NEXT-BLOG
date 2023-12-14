"use client"
export default function Button({ price }) {
    return (
        <div>
            <button onClick={() => alert(price)}>Click Me</button>
        </div>
    )
}