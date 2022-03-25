import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import Dictaphone from "../components/Dictaphone";

export default function Home() {
  return (
    <div>
      <Dictaphone />
    </div>
  )
}
