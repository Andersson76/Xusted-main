import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Xusted Music</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <h1 className={inter.className}>XUSTED</h1>
            <h4 className={inter.className}>music</h4>
            {/* <Image
              src="/xusted.png"
              alt="xusted logo"
              width={100}
              height={30}
              priority
            /> */}
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://listen.tidal.com/album/255879569"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Maze <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/maze.png"
                alt="maze"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>

          <a
            href="https://listen.tidal.com/album/210068928"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Busted <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/busted.png"
                alt="busted"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>

          <a
            href="https://listen.tidal.com/album/201461335"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Receptor <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/receptor.png"
                alt="receptor"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>

          <a
            href="https://listen.tidal.com/album/176048444"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tyo Oyt <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/tyooyt.png"
                alt="tyo oyt"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>

          <a
            href="https://listen.tidal.com/album/149961226"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Awake Slumber <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/AwakeSlumber.png"
                alt="Awake slumber"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>

          <a
            href="https://listen.tidal.com/album/139228896"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Tunnel Visions <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/TunnelVisions.png"
                alt="Tunnel visions"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>

          <a
            href="https://listen.tidal.com/album/125553413"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Ice Picker <span>-&gt;</span>
            </h2>
            <div className={styles.card}>
              <Image
                src="/IcePicker.png"
                alt="Ice Pickert"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>
        </div>
        <div className="copy">
          <p>
            © Xusted 2023
          </p>
        </div>
      </main>
    </>
  );
}
