import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((net) => (
            <a href="#" className='social-btn' id={net.name} key={net.name}>
                {net.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks