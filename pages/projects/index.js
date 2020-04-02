import Link from "next/link";
import style from "../index.module.css";
import localStyle from "./index.module.css";

function ProjectsPage() {
  return (
    <div className={`${style.flex_split} ${localStyle.marginOnMobile}`}>
      <div className={`${style.small_container}`}>
        <Link href="/">
          <h1 className={style.title}>John Tomanelli II</h1>
        </Link>
        <h2 className={style.sub}>Projects</h2>
        <div className={localStyle.hideOnMobile}>
          <div className={`${style.img_container}`}>
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
      </div>
      <ul className={localStyle.ul}>
        <li>
          <Link href="/projects/suffolk-county-covid-19-map">
            <a>COVID-19 Suffolk Town Map</a>
          </Link>
        </li>
        <li>
            <a>More to come...</a>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      css: "default"
    },
  }
}


export default ProjectsPage;
