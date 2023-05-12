
const Home = () => {
  return (
    <div>
      <div className="home-page-container">

        <div className="Left-section">
          <div className="left">

            <h1>Looking for Plants! We Got It</h1>
            <p className="describ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae praesentium rerum explicabo repellendus, illo vel. Atque id culpa iure libero cumque. Fugiat omnis perspiciatis neque nostrum eius unde totam.</p>
            <div className="know-us">
              <button>know more</button>
              <button>start buying</button>
            </div>

            <div className="salling-section">
              <h3>best selling</h3>
              <p>view all</p>
            </div>

            <div className="data">
              <div className="left-data">
                <h3 className="data-title">aloe vera</h3>
                <p className="data-describ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae praesentium rerum explicabo repellendus, illo vel. Atque id culpa iure libero cumque. Fugiat omnis perspiciatis neque nostrum eius unde totam.</p>

              </div>
              <div className="right-data">
                <h3 className="data-title">vinca</h3>
                <p className="data-describ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae praesentium rerum explicabo repellendus, illo vel. Atque id culpa iure libero cumque. Fugiat omnis perspiciatis neque nostrum eius unde totam.</p>

              </div>
            </div>

            <div className="page-number">
              <span className="first">01</span>
              /
              <span className="second">02</span>
            </div>

          </div>



        </div>

        <div className="right-section">
          <img src="/withchair.jpg" alt="" />
        </div>

      </div>

    </div>
  )
}

Home.Layouts = "L1"

export default Home
