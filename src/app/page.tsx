import Image from "next/image";
import styles from "./page.module.css";
import { Component } from "react";
import Header from "@/components/header/header";
import CardSection from "@/components/cardsection/cardsection";

export default function Home() {
  return (
    <main className={styles.main}>

      < Header titulo="Squirtle" />
      < CardSection titulo="Teste">
        <img></img>
      </CardSection>

    </main>
  );
}
