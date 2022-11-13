import styles from "./App.module.css";
import nft from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";
import view from "./images/icon-view.svg";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.card}>
        <div className={styles.equilibrum}>
          <div className={styles.background}>
            <img className={styles.view} src={view} alt="" />
          </div>
          <img className={styles.nft} src={nft} alt="equilibrum" />
        </div>
        <div className={styles.heading}>
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className={styles.cost}>
          <div className={styles.etherium}>
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            <span>0.041 ETH</span>
          </div>
          <div className={styles.clock}>
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            <span>3 days left</span>
          </div>
        </div>
        <hr />
        <div className={styles.creator}>
          <img src={avatar} alt="avatar" />
          <span>
            Creation of <a href="#">Jules Wyvern</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
