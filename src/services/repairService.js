// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/repairs`

export async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function show(repairId) {
  try {
    const res = await fetch(`${BASE_URL}/${repairId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function create(repairFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(repairFormData)
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function update(repairFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${repairFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(repairFormData)
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function deleteRepair(repairId) {
  try {
    const res = await fetch(`${BASE_URL}/${repairId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function createRepairTask(repairId, repairTaskFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${repairId}/repairTasks`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(repairTaskFormData)
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function updateRepairTask(repairId, repairTaskId, repairTaskFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${repairId}/repairTasks/${repairTaskId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(repairTaskFormData)
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}

export async function deleteRepairTask(repairId, repairTaskId) {
  try {
    const res = await fetch(`${BASE_URL}/${repairId}/repairTasks/${repairTaskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return res.json()
  } catch (err) {
    console.log(`🚨`, err)
  }
}