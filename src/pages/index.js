import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>DoorCam: Burger Bandit</title>
        <meta
          name="description"
          content="Door camera snapshot of a dog enjoying a burger outside the front door."
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.overlay}>
          <div className={styles.statusBar}>
            <span className={styles.cameraLabel}>PORCH CAM</span>
            <span className={styles.timestamp}>LIVE · 08:42 PM</span>
          </div>
          <div className={styles.doorFrame}>
            <div className={styles.scene}>
              <div className={styles.porchLight} />
              <div className={styles.porchFloor} />
              <div className={styles.doorShadow} />
              <div className={styles.stoop} />

              <div className={styles.burger}>
                <div className={styles.bunTop} />
                <div className={styles.lettuce} />
                <div className={styles.patty} />
                <div className={styles.bunBottom} />
              </div>

              <div className={styles.dog}>
                <div className={styles.earLeft} />
                <div className={styles.earRight} />
                <div className={styles.head}>
                  <div className={styles.eyeLeft} />
                  <div className={styles.eyeRight} />
                  <div className={styles.snout}>
                    <div className={styles.nose} />
                    <div className={styles.mouth} />
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.harness} />
                </div>
                <div className={styles.legFront} />
                <div className={styles.legBack} />
                <div className={styles.tail} />
              </div>

              <div className={styles.caption}>
                Motion detected · Someone&apos;s stealing the burgers
              </div>
            </div>
          </div>
          <div className={styles.recIndicator}>
            <span className={styles.dot} />
            REC
          </div>
        </div>
      </main>
    </>
  );
}
