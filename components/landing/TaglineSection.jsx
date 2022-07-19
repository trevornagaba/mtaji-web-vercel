import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/landing/TaglineSection.module.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import pointerImg from "../../public/assets/tagline_background.svg"

const TaglineSection = () => {
  return (
    <div className={styles.tagline}>
      <div className={styles.taglineBackground} />

      <div className={styles.proposition}>
        <h1>
          Invest in Africa&apos;s <br />
          next big company
        </h1>
        <p>
        Be a part owner of a thriving business with as little as <br/>UGX 50,000Be a part owner of a thriving business <br/>with as little as UGX 50,000
        </p>
        <Stack
          spacing={3}
          direction="row"
          style={{ paddingTop: "30px" }}
        >
          <Button
            component="a"
            href="/signup"
            variant="contained"
            style={{ backgroundColor: "#2518B8", color: "white", textTransform: "none", fontSize: "16px", height: "40px" }}
          >Get started</Button>
          <Button
            component="a"
            href="/invest"
            variant="outlined"
            style={{ border: "1px #01BBC8 solid", color: "#09062D", textTransform: 'none', fontSize: "16px", height: "40px" }}
          >Raise funds</Button>
          <Button
            style={{ pointer: "none", height: "40px" }}
          >
            <Image
              src={pointerImg}
              alt="Pointer"
              width={100}         
            />
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default TaglineSection;
