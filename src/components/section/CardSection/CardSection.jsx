import React from 'react'
import Card from './Card/Card'
import styles from './index.module.scss'

const CardSection = (props) => {
  return (
    <div className={styles.cardSectionArea}>
      <div className={styles.cardSectionTitle}>카드</div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default CardSection
