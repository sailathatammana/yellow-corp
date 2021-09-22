import logo from "../assests/yellowCorp1.jpg";

export default function Home() {
  return (
    <div id="home" className="container">
      <h1>Track your parcels with ease</h1>
      <img
        className="image-van"
        src={logo}
        alt="Illustration of a delivery van"
      />
      {/*       <div className="home-intro">
          <h2>View all parcels</h2>
        <p>Get an overview of all tracked parcels.</p>
        <Link to="/overview" className="link">
          View all parcels
        </Link> 
      </div> */}
    </div>
  );
}
