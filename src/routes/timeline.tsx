import styles from "./timeline.module.scss";

export default function Timeline() {
  return (
    <div className={styles.outer}>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.content}>
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={styles.content}>
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>

        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.content}>
            <h2>2015</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={styles.content}>
            <h2>2012</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.content}>
            <h2>2011</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={styles.content}>
            <h2>2007</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
