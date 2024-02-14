// npm
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// services
import * as repairService from '../services/repairService'

// css
import styles from './EditRepairTaskCard.module.css'

const EditRepairTaskCard = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { repairId, repairTaskId } = useParams()
  const [formData, setFormData] = useState(state)

  return ( 
    console.log()
  )
}

export default EditRepairTaskCard