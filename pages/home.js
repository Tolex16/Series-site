import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Download free tv-series for your entertainment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/site logo.png" />
      </Head>

        
            <section className="home swiper" id="home">
        <div className="swiper-wrapper">
            <div className={styles.container}>
                <img src="/home1.JPG" alt=""></img>
                <div className={styles.hometext}>
                    <span>Evil</span>
                    <h1>Genre: Horror/Thriller, Drama</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            
            <div className={styles.container}>
                <img src="/home2.JPG" alt=""></img>
                <div className={styles.hometext}>
                    <span>Doom Patrol</span>
                    <h1>Genre:
                         Action, Superhero, Comedy, Thriller</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className={styles.container}>
                <img src="/home3.jpg" alt=""></img>
                <div class="home-text">
                    <span>The Good Doctor</span>
                    <h1>Genre: Medical, Drama</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div class={styles.container}>
                <img src="/home4.jpg" alt=""></img>
                <div className={styles.hometext}>
                    <span>Star Trek Discovery</span>
                    <h1>Genre: Sci-Fi Action</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className={styles.container}>
                <img src="/home5.jpg" alt=""></img>
                <div className={styles.hometext}>
                    <span>Invincible</span>
                    <h1>Genre: Animation, Action, Superhero, Gore</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className= {styles.container}>
                <img src="/home6.jpg" alt=""></img>
                <div class="home-text">
                    <span>Chilling Adventures of Sabrina</span>
                    <h1>Genre: Drama, Horror/Thriller</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className={styles.container}>
                <img src="/home7.jpg" alt=""></img>
                <div className={styles.hometext}>
                    <span>You</span>
                    <h1>Genre: Drama, Romance, Thriller</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className= {styles.container}>
                <img src="/home8.jpg" alt=""></img>
                <div className={styles.hometext}>
                    <span>Chucky</span>
                    <h1>Genre: Horror/Thriller, Drama</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className={styles.container}>
                <img src="/home9.jpg" alt=""></img>
                <div class="home-text">
                    <span>The Boys</span>
                    <h1>Genre: Action, Superhero, Gore</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className={styles.container}>
                <img src="/home10.png" alt=""></img>
                <div className={styles.hometext}>
                    <span>Warrior</span>
                    <h1>Genre: Action, Marital art</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
            <div className={styles.container}>
                <img src="/home11.jpeg" alt=""></img>
                <div className={styles.hometext}>
                    <span>The Peripheral</span>
                    <h1>Genre: Action, Sci-Fi, Mystery</h1>
                    <a href="#" class="btn">Download <i class='bx bx-download'></i></a>
                </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
    </section>
      
    </>
  )
}
