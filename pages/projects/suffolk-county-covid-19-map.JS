import SuffolkCountyCovid19Map from '../../components/SuffolkCountyCovid19Map';

function SuffolkCountyCovid19MapPage() {
  return <SuffolkCountyCovid19Map />;
}

export async function getStaticProps() {
  return {
    props: {
      css: "mapbox"
    },
  }
}

export default SuffolkCountyCovid19MapPage;
