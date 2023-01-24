import { useState } from 'react'
import Emojis from './Emojis'

const emojisArr = [
    {
        id: 1,
        emoji: "🙏",
        name: "Person With Folded Hands",
        meaning:
            "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 2,
        emoji: "🤣",
        name: "Rolling On The Floor, Laughing",
        meaning:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    },
    {
        id: 3,
        emoji: "🤓",
        name: "Nerd Face",
        meaning:
            "Huge glasses, awkward smile and buck teeth. Used humorously or ironically for nerds or to express how smart you are. Stereotype of a nerd; a smart but funny-dressed person"
    }
]

const Home = () => {
    const [emojiFacts, setEmojiFacts] = useState(emojisArr)
    const deleteFacts = (id) => {
        const filteredEmojis = emojiFacts.filter((emoji) => emoji.id !== id)
        setEmojiFacts(filteredEmojis)
    }
    return (
        <div className="home">
            <Emojis emojiFacts={emojiFacts} deleteFacts={deleteFacts} />
        </div>
    )
}

export default Home