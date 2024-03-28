import fill from './images/fill.png';
export default function Navbar(){
  return(
    <div className = "Navbar">
      <p>
        <img src={fill}alt="" />
        <p>my travel journal</p>
      </p>
    </div>
  )
}