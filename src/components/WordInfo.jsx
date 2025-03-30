const WordInfo = (props) => {
    return (
        <div className="flex border-2 w-2/3 h-40">
            <div className="w-1/6">
                <p className="ml-1 inline-block">{props.type}</p>
                <img 
                    className="w-1/2 ml-auto mr-auto" 
                    src={`https://en.glyphwiki.org/glyph/u${props.char.codePointAt(0).toString(16)}.svg`}
                    alt={props.char}
                />
                <p className="text-center">{props.name}</p>
            </div>
            <div className="w-5/6 overflow-scroll">
                <ul>
                {
                    Object.keys(props.senses).map((pos) => (
                        <li key={pos}>
                            <strong>{pos}: </strong>
                            <ol className="list-decimal list-inside">
                            {
                                props.senses[pos].map((def, index) => (
                                    <li key={index}>{def}</li>
                                ))
                            }
                            </ol>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    );
}

export default WordInfo;