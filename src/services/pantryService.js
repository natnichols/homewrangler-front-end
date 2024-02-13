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

async function create(pantryItemData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization' : `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pantryItemData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  } 
}

async function update(pantryItemData) {
  try {
    const res = await fetch(`${BASE_URL}/${pantryItemData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization' : `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pantryItemData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deletePantryItem(pantryItemId){
  try {
    const res = await fetch(`${BASE_URL}/${pantryItemId}`, {
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
  show,
  create,
  update,
  deletePantryItem
}