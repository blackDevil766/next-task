import Footer from "../footer"

const Layout2 = ({children}) => {
    return (
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
  
  export default Layout2
  