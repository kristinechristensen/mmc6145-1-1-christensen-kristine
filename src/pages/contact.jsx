import styles from '../styles/contact.module.css'
import autoAward from '../assets/autoAward.jpg'
export default function Contact() {
  return (
    <>
    <main>

      <img src={autoAward} style={{float:'right', clear:'both', margin:'0px 0px 50px 0px'}} height="300"alt="Kristine Christensen" />

      <h1 className={styles.heading}>Contact Me!</h1>
      <p> If you like any of the work and would like to commission a piece, please contact me!</p>
      <p> Let's Connect on <a href="https://www.linkedin.com/in/kristinechristensen/" target="external">LinkedIn</a>!</p>
      <p> Check Out My Repo! <a href="https://github.com/kristinechristensen" target="external">GitHub</a>!</p>
    </main>
    </>
  )
}