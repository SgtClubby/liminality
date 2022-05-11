function Button({ setEntered }) {
    return (
            <button onClick={() => setEntered(true)} className="rounded-md text-white border-2 border-white py-3 px-8">enter</button>
    );
}

export default Button
