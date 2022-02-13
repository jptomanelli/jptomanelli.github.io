import Head from 'next/head'
import GroovyBackground from '../components/GroovyBackground';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>John Paul Tomanelli II | Software Engineer</title>
        <meta name="description" content="John Tomanelli's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GroovyBackground />
      <div style={{
        position: "absolute",
        maxWidth: 370,
        left: 0,
        right: 0,
        top: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "12px 8px",
        transform: "translatey(-50%)",
        background: "rgba(255,255,255,0.75)",
        borderRadius: "5%"
      }}>
        <h1 style={{ textAlign: "center" }}>John P Tomanelli II</h1>
        <h2 style={{ textAlign: "center" }}>Full-Stack Software Engineer</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: 15
          }}
        >
          <Image src="/smiley.svg" alt="Smiley Face" width={150} height={150} />
        </div>
        <h3 style={{ textAlign: "center" }}>Have a nice day!</h3>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 30 }}>
          <a target="_blank" rel="noopener noreferrer" href="mailto:jptomanelli@gmail.com?subject=Hello!">email</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jptomanelli">github</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/johntomanelli/">linkedin</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jptomanelli/">insta</a>
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1GYmUBbBQIN5veHrlYhmQGVAyugyeTNBE/view?usp=sharing">résumé</a>
        </div>
      </div>
    </>
  )
}
