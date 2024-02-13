// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// services
import * as repairService from '../../services/repairService'

// css
import styles from './RepairDetails.module.css'

const RepairDetails = () => {
  return (
    <main className={styles.container}>
      <h2>RepairDetails component</h2>
        <p>Link to RepairEdit here</p>
      <h4>end of RepairDetails component</h4>
    </main>
  )
}

export default RepairDetails;