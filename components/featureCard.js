import styles from '../styles/Home.module.scss'



export const featureCard = (props) => {
return (
    <div className={styles.featureCardWrapper}>
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
          <i className={"fa "+ props.icon}></i>
      </div>
      <div className={styles.featureTitle}>
            <h3>{props.title ? props.title : "Your business is safe with us!"}</h3>
      </div>
      <hr />

      <div className={styles.featureDescription}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nostrum corrupti blanditiis omnis dignissimos non ad? Eaque sit consequatur, numquam, voluptatibus 
              beatae sapiente ad ullam magnam vero quo tempora, cupiditate adipisci.

            </p>
      </div>
    </div>
  </div>


);
}



export default featureCard;