import {NavLink} from "react-router-dom"
const Header = () => {

   
    return(
        <>
         <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <NavLink to="/" className="navbar-brand" href="#"><img style={{width:"100px",borderRadius:"0.5rem"}} src="https://cdn.textstudio.com/output/sample/normal/4/0/5/6/meetup-logo-103-16504.png" alt="" /></NavLink>
    
      
    <form className="d-flex" role="search">
    <input className="form-control me-2" type="search"  placeholder="Search by title or tag" aria-label="Search" />
        
    </form>
    </div>
  
    </nav>
    </header> 
        </>
    )


}

export default Header;