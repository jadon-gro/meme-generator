import React, { useState, useEffect } from "react"

export default function Meme() {
    let [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: ""
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getNewMeme() {
        const randNum = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => {
            return({
                ... prevMeme,
                randomImage: allMemes[randNum].url
            })
        })
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return({
                ... prevMeme,
                [name]: value
            })
        })
    }
    

    return (
        <main>
            <form className="form">
                <input name="topText" type="text" onChange={handleChange} value={meme.topText} className="form--input" placeholder="Top Text"/>
                <input name="bottomText" type="text" onChange={handleChange} value={meme.bottomText} className="form--input" placeholder="Bottom Text"/>
                <button type="button" onChange={handleChange} className="form--button" onClick={getNewMeme}>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--random-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}