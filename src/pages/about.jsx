import styles from '../styles/home.module.css'
import kristineImage from '../assets/AwardforBowls.jpg'
import kcLogo from '../assets/sRedKCLogo.png'
export default function About() {
  return (
    <>
        <main>
      <img src={kristineImage} style={{float:'right',margin:'0 50px 0 0'}}alt="Kristine Christensen" />
      <h1 className={styles.heading}>About Me</h1>
      <p>
      Hi! My name is Kristine and I love to create art. For the past five years I've been creating art using various welding techniques. I have become proficient in Shielded Metal Arc Welding (SMAW; aka Stick), Gas Metal Arc Welding (GMAW; aka MIG), and Gas Tungsten Arc Welding (GTAW; aka TIG). TIG welding is by far my favorite as it allows for finer welds. My welded snake titled "Recoil" won 3rd place in the Community Art Show in 2019 and the "Dragon Scales: Interactive Mischief Makers" won 2nd place in the 2022 Community Art Show
      </p>

      <p>I have also been dabbling in the ceramic art form. I love the idea of shaping the clay into any form that my imagination can conjure up. I also enjoy working with the potter's wheel to create bowls, cups, and other vessels. I have also exploring glass blowing and recently took a course and created my first paperweight and candy dish. 
      <br/><img src={kcLogo} height="50" />
      </p>
      
    </main>
    
    </>
  )
}