import React, { useEffect, useRef } from "react";
import skate from "/home/eolo/Documents/p/react-core-web/core/src/assets/skate.png";
import styles from "./Home.module.css";

const Home = () => {
  const txtElement = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    typeWords();
  }, []);

  async function typeWords() {
    const words = ["Skater", "Blogger"];
    const staticText = "I'm a ";
    let txt = staticText;

    for (let wordIndex = 0; true; wordIndex = (wordIndex + 1) % words.length) {
      const currentWord = words[wordIndex];
      for (
        let letterIndex = 0;
        letterIndex < currentWord.length;
        letterIndex++
      ) {
        txt += currentWord.charAt(letterIndex);
        txtElement.current!.textContent = txt + "|";
        await new Promise((resolve) => setTimeout(resolve, 100)); // delay for 100ms
      }
      txt += "|"; // add cursor at the end of the text
      await new Promise((resolve) => setTimeout(resolve, 3000)); // delay for 3s
      txt = staticText;
    }
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftContainer}>
        <img src={skate} alt="Skateboard" className={styles.skateImage} />
      </div>

      <div className={styles.rightContainer}>
        <h1 className={styles.introText}>Hey I'm Tom Morbey</h1>
        <p ref={txtElement} className={styles.introSubtext}></p>
      </div>
    </div>
  );
};

export default Home;
