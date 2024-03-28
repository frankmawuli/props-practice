import '../index.css'
import location from "./images/location.png"
export default function Content(props){
  return(
    <div className = "container">
      <div>
        <img src={props.imageUrl} alt="" />
      </div>
      <div className = "inner">
          <div className='details'>
          <span>
            <img src={location}alt="" className='loca'/>
            {props.location}
          </span>
          <span>
            <a href={props.website}>visit website</a>
          </span>
          </div>
        
        <h1 className='site-name'>
          {props.name}
        </h1>
        <h3>
          {props.date}
        </h3>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  )
}