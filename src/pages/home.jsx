import styles from '../styles/home.module.css'
import Project from '../components/project'

import art1 from '../assets/DragonScales.jpg'
import art2 from '../assets/hands.jpg'
import art3 from '../assets/recoil.jpg'
import art4 from '../assets/medusaTable.jpg'
import art5 from '../assets/spiderBookEnds.jpg'
import art6 from '../assets/graveyard.jpg'

const artWork= [art1,art2,art3,art4,art5,art6]


export default function Home() {

  
  return (
    
    <main>
      <h1 className={styles.heading}>Welcome to My Home Page</h1>
      <h2> So Glad You're Here!</h2>
      <div className={styles.container}>
      {artWork.map((art, i) => <Project key={i}><img src={art} /></Project>)}
      </div>
    
      
    </main>
    
  )
}





