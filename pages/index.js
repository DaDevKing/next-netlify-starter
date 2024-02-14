import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Minecraft Mods and Plugins Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" /> {/* Add Luckiest Guy font */}
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <motion.p className="description" // Add motion for animations
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Get started by editing <code>pages/index.js</code>
        </motion.p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .description {
          text-align: center;
          font-size: 1.5rem;
          color: #333; // Change color to fit your design
          margin-top: 1rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.25rem;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
