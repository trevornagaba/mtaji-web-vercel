import styles from "../styles/InvestCard.module.css";

const InvestCard = (props) => {
  return (
    <div className={styles.companyDetails}>
      <div className={styles.valuation}>
        <p className={styles.label}>
          Target
        </p>
        <div>
        {/* {.company.targetAmount)} */}
          <p className={styles.valuationDollars}>${parseInt((props.company.targetAmount)/3700)}</p>
          <p className={styles.valuationUgx}>UGX {props.company.targetAmount}</p>
        </div>
      </div>

      <div className={styles.amountRaised}>
        <p className={styles.label}>
          Amount raised
        </p>

        <div className={styles.amountDetails}>
          <p className={styles.total}>$ {(props.company.amountRaised)/3700}</p>
          <div className={styles.amountPercentageIndicator}>
            <div></div>
          </div>
          <p className={styles.amountPercentage}>{(props.company.amountRaised)*100/(props.company.targetAmount)}%</p>
        </div>
      </div>

      <div className={styles.invest}>
        <div className={styles.investLabel}>
          <p className={styles.investLabelTitle}>Invest</p>
          <p className={styles.investLabelMinimum}>min $1</p>
        </div>

        <div className={styles.investAmount}>
          <div className={styles.investAmountSelector}>
            <select name="currency" id="currency">
              <option value="dollars">$</option>
              <option value="shillings">UGX</option>
            </select>

            <p>20.00</p>
          </div>

          <p className={styles.investTransactionFee}>+Transaction fee: $0.50</p>
        </div>
      </div>

      <button className={styles.investButton}>INVEST</button>

      <div className={styles.wishlistButton}>
        <img src="/assets/heart.svg" alt="heart" />
        <p>Add to Watchlist</p>
      </div>
    </div>
  );
};

export default InvestCard;
