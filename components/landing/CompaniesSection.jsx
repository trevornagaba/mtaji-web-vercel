import styles from "../../styles/landing/CompaniesSection.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const CompaniesSection = () => {
  // Create our number formatter.
  var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
  });

  // Setup state management
const [company, setCompanies] = useState([]);
useEffect(() => {
    getCompanies();
}, []);

async function getCompanies() {
    const response = await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/companies`, {
            withCredentials: true,
        })
        .then((result) => {
            console.log(typeof result);
            console.log(result.data);
            // TO-DO: Update after sorting out auth
            if (result.data == "Please login") {
                setCompanies("$");
            } else {
                setCompanies(result.data);
            }
        })
        .catch((error) => {
            console.log(error);
            setCompanies("$");
        });
}

  return (
    <>
      <p className={styles.sectionHeader}>
        Companies currently raising capital on mtaji
      </p>
      <div className="companies-section">
                    <div className="header">
                        <p className="title"></p>
                    </div>
                    <div className="companies">
                        {company.map((company, index) => (
                                <div key={index} className="company-card">
                                
                            <Link href={`/company/${company._id}`}>
                                    <img
                                        src="/assets/logo_in_card.svg"
                                        alt="logo"
                                    />
                                    <p className="company-name">
                                        {company.name}
                                    </p>
                                    <p className="company-summary">
                                        {company.briefDescription}
                                    </p>
                                    <p className={styles.companyTarget}>
                                        {formatter.format(company.targetAmount)}
                                    </p>
                                    <div className={styles.targetDeadline}>
                                        <p className={styles.endsInLabel}>
                                            Ends in:
                                        </p>
                                        <p className={styles.timeLeft}>
                                            21h: 30m: 09s
                                        </p>
                                    </div>
                            </Link>
                                </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                .companies-section {
                    margin: 0 5vw;
                    padding-bottom: 32px;
                }

                .companies-section .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    flex-wrap: wrap;
                }

                .companies-section .header .title {
                    padding: 16px;
                    font-size: 16px;
                    font-weight: 600;
                }

                .companies-section .header .link {
                    cursor: pointer;
                    color: #2518b8;
                }

                .companies-section .header .link:hover {
                    color: #01bbc8;
                }

                .companies {
                    display: flex;
                    justify-content: left;
                    overflow: auto;
                }

                .companies .company-card {
                    background-color: #f7f7f7;
                    border-radius: 30px;
                    min-width: 290px;
                    max-width: 290px;
                    padding: 32px;
                    margin-right: 2vw;
                    margin-bottom: 2vw;
                }

                .company-card img {
                    display: block;
                    width: 30%;
                    margin: auto;
                }

                .company-card .company-name {
                    font-weight: bold;
                    text-align: center;
                }

                /* Adjust for smartphone screen sizes. */
                @media only screen and (max-width: 600px) {
                    .companies {
                        justify-content: left;
                    }

                    .company-card img {
                        width: 70%;
                    }
                }

                /* Adjust for tablet screen sizes. */
                @media only screen and (min-width: 600px) and (max-width: 800px) {
                    .companies {
                        justify-content: left;
                    }
                }
            `}</style>
    </>
  );
};

const CompanyCard = ({ isFourthCard = false }) => {
  return (
    <div
      className={
        isFourthCard ? `${styles.company} ${styles.fourthCard}` : styles.company
      }
    >
      <img
        className={styles.companyLogo}
        src="/assets/logo_in_card.svg"
        alt="logo_in_card"
      />

      <p className={styles.companyName}>Safe Boda</p>

      <p className={styles.companyDescription}>
        Nulla quis lorem ut libero male suada feu giat. Nulla quis lorem ut
        libero male suada feugiat. Lorem ipsum dolor sit amet, con se ct etur
        adipis cing elit. nfleare
      </p>

      <p className={styles.raisingLabel}>Raising</p>
      <p className={styles.companyTarget}>UGX 50M</p>
      <div className={styles.targetDeadline}>
        <p className={styles.endsInLabel}>Ends in:</p>
        <p className={styles.timeLeft}>21h: 30m: 09s</p>
      </div>
    </div>
  );
};

const onScroll = (direction) => {
  const companiesContainer = document.getElementById("companies");
  if (direction == "left") {
    companiesContainer.scrollLeft -= 50;
  } else {
    companiesContainer.scrollLeft += 50;
  }
};

export default CompaniesSection;
