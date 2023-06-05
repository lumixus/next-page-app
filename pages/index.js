import FeatureCard from '../components/featureCard';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.indexHeader}>
        <div className={styles.indexHeaderBox}>
          <h2>Customize your next app!</h2>
        </div>
      </div>

      <div className={styles.features}>
        <FeatureCard icon="fa-briefcase"></FeatureCard>
        <FeatureCard title="New features will be yours!" icon="fa-database"></FeatureCard>
        <FeatureCard title="Payments are easy now!" icon="fa-credit-card"></FeatureCard>
        <FeatureCard title="Always in contact" icon="fa-comment"></FeatureCard>
     </div>

    </>

  )
}
