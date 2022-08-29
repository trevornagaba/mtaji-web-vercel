import Link from "next/link";
import styles from "../styles/RaiseFunds.module.css";
import Grid from "@mui/material/Grid";

const RaiseFunds = () => {
  return (
    <Grid
        item
        style={{
            margin:"8vh 5% 0vh 5%",
            width: "90vw",
           
            
        }}
        align="left"

    >
<div className={styles.container}>
      <div className={styles.section}>
        <div>
          <p className={styles.title}>
            Is your company looking to <br />
            raise funds?
          </p>
          <p className={styles.description}>
            Get connected with mission driven investors and your community of users, customers and friends.
          </p>
        </div>

        <a href="https://forms.gle/6B9qZWfFKASvbu289"  target="_blank" rel="noreferrer">
          <button>Get Started</button>
        </a>
      </div>

      <img className={styles.circles} src="/assets/circles.svg" alt="circles" />
    </div>
    </Grid>
    
  );
};

export default RaiseFunds;
