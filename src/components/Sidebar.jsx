import Avatar from '../img/Marcelo.png'
import SocialNetworks from './SocialNetworks'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Marcelo Vieira" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download Curriculum</a>
    </aside>
  )
}

export default Sidebar