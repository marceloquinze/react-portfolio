import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Phone: </h3>
                <p>(42) 98805-1928</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email: </h3>
                <p>marceloquinze@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Location: </h3>
                <p>Guarapuava, PR, Brazil</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer