import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
      <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim unde, ea minima tempore sapiente beatae optio accusamus atque voluptate! Ullam quasi natus vel? Optio possimus ad nulla at asperiores vitae.</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim unde, ea minima tempore sapiente beatae optio accusamus atque voluptate! Ullam quasi natus vel? Optio possimus ad nulla at asperiores vitae.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
