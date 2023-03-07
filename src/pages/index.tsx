import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/xusted.png"
              alt="13"
              width={100}
              height={30}
              priority
            />
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
            <div className={styles.maze}>
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
            <div className={styles.maze}>
              <Image
                src="/busted.png"
                alt="maze"
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
            <div className={styles.maze}>
              <Image
                src="/receptor.png"
                alt="maze"
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
            <div className={styles.maze}>
              <Image
                src="/tyooyt.png"
                alt="tyooyt"
                width={100}
                height={100}
                priority
              />
            </div>
          </a>
        </div>
      </main>
    </>
  );
}
