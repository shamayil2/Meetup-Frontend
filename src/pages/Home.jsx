import useFetch from "../useFetch"
import {Link} from "react-router-dom"
import {useState} from "react"
const Home = () => {
    const [eventType,setEventType] = useState("Both")
    const [searchVal,setSearchVal] = useState("")
    const {data,loading,error} = useFetch("https://meetup-backend-yl5y.vercel.app/events")
    console.log(data)
    let filteredEvents =searchVal?(data.filter((event)=>(event.title.includes(searchVal)) || (event.tags.includes(searchVal)))
): (eventType==="Both" || eventType==="Select Event Type"?data:data.filter(event=>event.eventType===eventType))
    
    const searchHandler = (event) => {
        setEventType("Select Event Type")
        setSearchVal(event.target.value)

    }

    const selectHandler = (event) => {
        setSearchVal("")
        setEventType(event.target.value)
    }

    return(
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link to={`/`} className="navbar-brand" href="#"><img style={{width:"100px",borderRadius:"0.5rem"}} src="https://cdn.textstudio.com/output/sample/normal/4/0/5/6/meetup-logo-103-16504.png" alt="" /></Link>
    
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" value={searchVal} placeholder="Search by title or tag" aria-label="Search" onChange={searchHandler}/>
        
      </form>
    </div>
  
</nav>
        <div className="container pt-4">
            <h1 style={{display:"inline"}}>Meetup Event</h1>
            
            <select style={{width:"200px",float:"right"}} className="form-select" value={eventType}  name="" id="" onChange={selectHandler}>
                <option defaultValue="Select Event Type" >Select Event Type</option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                <option value="Both">Both</option>
            </select>
        </div>
        <section className="container py-4">
            <div className="row">
                {filteredEvents?.map(event=>(
                    
                    <div className="col-md-4 my-4">
                    <div className="card" style={{width: "18rem"}}>
                  
                    <Link to={`events/${event._id}`} style={{textDecoration:"none"}}> <img src={event.image} className="card-img-top" alt="..."/></Link>
                    <p style={{padding:"5px 20px ",backgroundColor:"#00BFFF"}}>{event.eventType}</p>
                    <div className="card-body">
                        <p style={{color:"#00BFFF"}}>{new Date(event.startDate).toUTCString()}</p>
                        
                        <Link to={`events/${event._id}`} style={{textDecoration:"none"}}>   <h3  style={{color:"black",padding:"0px 5px",border:"3px solid #00BFFF",borderRadius:"0.5rem"}} className="card-text">{event.title}</h3></Link>
                    </div>
                    </div>
                    </div>
                    
                ))}
            </div>

        </section>
        </>
    )

}

export default Home;