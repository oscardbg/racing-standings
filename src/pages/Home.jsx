import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="main">
        <article>
          <Link to="/f1" className="f1">
            <img src="./f1Logo.png" alt="" />
            <p>Formula 1 2023 Standings</p>
          </Link>
          <Link to="/motogp" className="moto">
            <img src="./motogpLogo.png" alt="" />
            <p>MotoGP 2023 Standings</p>
          </Link>
        </article>
        <h2>Features:</h2>
        <p>Check the standings results without any spoilers.</p>
        <ul>
          <li>• Get the standing results one by one or all of them at once.</li>
          <li>• Hover the cursor over the flag to see the name and date of the grand prix</li>
          <li>• Select any flag to see the results until that race.</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
