import { useState } from "react"

export default function Header() {

  const [active, setActive] = useState(() => {
    return{
      item1: "active",
      item2: "",
      item3: "",
      item4: "",
      item5: "",
      item6: "",
    }
  })

  return (
    <header>
      <div className="nav-container">
        <h1><span>uiux</span> Labs</h1>
        <div className="nav-items">
          <ul className="items-list">
            <li onClick={() => setActive( prev => [...prev, item1 = "active"])} className={active.item1}>home</li>
            <li onClick={() => setActive( prev => [...prev, item2 = "active"])} className={active.item2}>collections</li>
            <li onClick={() => setActive( prev => [...prev, item3 = "active"])} className={active.item3}>stores</li>
            <li onClick={() => setActive( prev => [...prev, item4 = "active"])} className={active.item4}>contact us</li>
            <li onClick={() => setActive( prev => [...prev, item5 = "active"])} className={active.item5}>about us</li>
            <li onClick={() => setActive( prev => [...prev, item6 = "active"])} className={active.item6}>blog</li>
          </ul>
        </div>

        <div>
          <ul className="user-authentication">
            <li className="login"> <button id="logs">login</button></li>
            <li className="logout"> <button id="logs">logout</button></li>
          </ul>
        </div>

      </div>

    </header>
  )
}


