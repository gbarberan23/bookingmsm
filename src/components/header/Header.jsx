import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faSearch, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
      <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Service</span>
            </div>
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />  
            <span>Stays</span>
            </div>
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi Service</span>
            </div>
        </div>
        <h1 className="headerTitle">Tu hogar en Manta</h1>
        <p className="headerDesc">Tener unas vacaciones maravillosas
        </p> 
        <button className="headerBtn"> Sign In / Register</button>
        <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed}  className="headerIcon"/>
          <input 
          type="text" 
          placeholder="Donde quieres ir?" 
          className="headerSearchInput"
          />
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays}  className="headerIcon"/>
            <span className="headerSearchText">date to date</span>
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson}  className="headerIcon"/>
          <span className="headerSearchText"> 2 adults 2 childrens  1 room </span>
          </div>
          <div className="headerSearchItem">
           <button className="headerBtn">Search</button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Header