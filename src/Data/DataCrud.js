import Lodgings from "../lodgings.json"

const getAllLodgings = () => {
  return Lodgings
}

const getOneLodging = (id) => {
  return Lodgings.find(lodging => lodging.id === id)
}

export const DataCrud = {
  getAllLodgings, getOneLodging
}