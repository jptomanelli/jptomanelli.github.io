import Link from 'next/link';
import { useState, useEffect } from 'react';
import style from "./index.module.css";

function HomePage() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`${style.small_container} ${loaded ? 'active' : ''}`}>
      <h1 className={style.title}>John Tomanelli II</h1>
      <h2 className={style.sub}>Full-Stack Web Developer</h2>
      <div className={style.img_container}>
        <img className={style.profile} src="profile.svg"></img>
      </div>
      <div className={style.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jptomanelli@gmail.com;subject"
        >
          email
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jptomanelli"
        >
          github
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/johntomanelli/"
        >
          linkedin
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/john_tomanelli"
        >
          twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1GYmUBbBQIN5veHrlYhmQGVAyugyeTNBE/view?usp=sharing"
        >
          résumé
        </a>
      </div>
    </div>
  );
}

export default HomePage;
