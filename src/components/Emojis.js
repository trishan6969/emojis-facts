const Emojis = (props) => {
    const { emojiFacts, deleteFacts } = props
    return (
        <div className="emojis">
            {emojiFacts.map((emoji) => (
                <div className="facts" key={emoji.id} >
                    <button className="delete-button" onClick={() => deleteFacts(emoji.id)}>Delete</button>
                    <p className="emoji">{emoji.emoji}</p>
                    <p className="emoji-name">{emoji.name}</p>
                    <p className="emoji-meaning">{emoji.meaning}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Emojis