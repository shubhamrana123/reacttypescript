import React,{useState}from 'react'
import 'boxicons'
import mdVerseLogo from '../../assets/images/md-verse-logo.png'
import image from '../../assets/images/download.png'
import TemporaryDrawer from '../Drawer'
function Navbar() {
    const [showProfile, setShowProfile] = useState(false)
    const showUserProfile = () =>{
setShowProfile(true)
    }
    return (
        //     <nav className="navbar navbar-dark bg-dark">
        //    wsws
        //   </nav>



        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#"><i className='bx bx-message-rounded-dots'></i></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="#">Disabled</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

    //     <div className="nav-wrapper">
    //     <div className="nav">
    //         <img src={mdVerseLogo} />
    //     </div>
    // </div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand border-remove-btn" >Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active border-remove-btn btn" aria-current="page"  >Home</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link btn border-remove-btn"   key={1} ></a>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link border-remove-btn"  role="button"   >
            <TemporaryDrawer></TemporaryDrawer>
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
          <span className="text-light"><img height={20} width = {25} src ={image} onClick={showUserProfile}></img> </span> &nbsp;&nbsp;
          {/* <button className="btn btn-outline-danger"  onClick={onLogout}>Logout</button> */}
      </div>
    </div>
  </nav>



    )
}

export default Navbar