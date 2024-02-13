import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/pantryItems`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization' : `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
async function show(pantryItemId) {
  try {
    const res = await fetch(`${BASE_URL}/${pantryItemId}`, {
      headers: {'Authorization' : `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(pantryItemFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pantryItemFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
  
}

export {
  index,
  show,
  create,
}