import Header from "../components/Header"
import useFetch from "../useFetch"
import {useParams} from "react-router-dom"
const EventPage = () => {
    const eventObj = useParams()
    const eventId = eventObj.pageId
    const {data,loading,error} = useFetch(`https://meetup-backend-yl5y.vercel.app/events/${eventId}`)
    console.log(data)
    return(
        <>
        <Header/>
        <main className="container py-4">
            {data?(  <div className="row">
            <div className="col-md-6">
            <h1 className="py-4">{data.title}</h1>
            <h5 style={{color:"#00BFFF"}}>Hosted By:</h5>
            <h3>{data.host}</h3><br/>
            <img className="img-fluid" style={{width:"500px",height:"400px",borderRadius:"0.5rem"}} src={`${data.image}`} alt="" /><br/><br/>
            <h5 style={{color:"#00BFFF"}}>Details:</h5>
            <p><b>Dress Code: </b>{data.dress}</p>
            <p><b>Age Restrictions: </b>{data.age}</p><br/>
            <h4 style={{color:"#00BFFF"}} className="pb-3">Event Tags</h4>
            {data.tags.map((tag)=>(
                <p style={{display:"inline" ,borderRadius:"0.75rem",padding:"5px 20px",margin:"0px 5px",backgroundColor:"#00BFFF"}}>{tag}</p>
            ))}
            </div>
            <div className="col-md-6 mt-4">
            <div style={{backgroundColor:"lightgray",borderRadius:"0.75rem",width:"500px",padding:"20px"}}>
                <p className="py-2">Time : {new Date(data.startDate).toUTCString()} to {new Date(data.endDate).toUTCString()} </p>
                <p className="py-2">Address: {data.address}</p>
                <p className="py-2">Price: Rs.{data.price}</p>
            </div>
            <h3 className="py-4" style={{color:"#00BFFF"}}>Speakers({data.speakers.length})</h3>
            {data.speakers.map((speaker)=>(
                <div style={{backgroundColor:"lightgrey",borderRadius:"18px",padding:"20px",display:"flex inline",flexDirection:"column",justifyContent:"center",margin:"0px 10px"}}>
                    <img style={{width:"70px",height:"70px",borderRadius:"18px",alignSelf:"center"}} src={speaker.profilePic} alt="" />
                    <p><b>{speaker.name}</b></p>
                    <p>{speaker.position}</p>
                </div>
            ))}
            </div>
            </div>):loading&&<p>Loading..</p>}
          

        </main>
        </>
    )


}

export default EventPage;