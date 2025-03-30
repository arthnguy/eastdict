const WordSearch = (props) => {
    return (
        <input
            className="border-b-2 text-center border-black mb-4 mr-1 w-1/3"
            type="text"
            placeholder="Enter name or character of word"
            value={props.input}
            onChange={(e) => {
                props.setInput(e.target.value);
            }}
        />
    )
}

export default WordSearch;