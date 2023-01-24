import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <header>
      <div className="header--logo">
        <img className="header--img" src={trollFace} />
        <h2 className="header--title">Meme Generator</h2>
      </div>
      <h3 className="header--secondary-title">React Course Project 3</h3>
    </header>
  )
}