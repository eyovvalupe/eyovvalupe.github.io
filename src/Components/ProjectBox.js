import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, type}) => {
  const desc = [{
    website: 'https://www.behance.net/gallery/140501917/Monofun',
    projectName: 'MONO(NFT) - Web3, React'
  },
  {
    website: 'https://exzo.network/',
    projectName: 'EXZO - Dapp'
  },
  {
    website: 'https://leebet.io/',
    projectName: 'LEEBET - Web3'
  },

  {
    website: 'https://coinzix.com/',
    projectName: 'CoinZix - Web3, React'
  },
  {
    website: 'https://unitedcoin.org/',
    projectName: 'UnitedCoin - Web3, React'
  },
  {
    website: 'https://kidikools.com/',
    projectName: 'KiddiKools - Next'
  },
  {
    website: 'https://thehope.fm/',
    projectName: 'The Hope - React Native'
  },
  {
    website: 'https://www.aninebing.com/',
    projectName: 'Aninebing - Next'
  },
  {
    website: 'https://sensay.io/',
    projectName: 'SENSAY - React Native'
  },
  {
    website: 'https://www.ef.com/wwen/',
    projectName: 'ET - React'
  },
   {
    website: 'https://www.worldtravel.com/',
    projectName: 'WorldTravel - PHP'
  },
  {
    website: 'https://shoppes.marinabaysands.com/',
    projectName: 'Marina Baysands - SEO'
  },
]
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{desc[type].projectName}</h3>
            <a href={desc[type].website} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Visit Site</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox