import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/budgets`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()

  } catch (error) {
    console.log(error)
  }
}

async function create(budgetFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(budgetFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteBudget(budgetId){
  try {
    const res = await fetch(`${BASE_URL}/${budgetId}`, {
      method: "DELETE",
      headers: {'Authorization' : `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  create,
  deleteBudget,
  }