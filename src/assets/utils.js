import data from '../data/portfolio/portfolio.json'


function contractStr(strToContract) {
  if (strToContract !== undefined) {
    return strToContract.toLowerCase().split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  } else {
    return ''
  }
}

function filterLoader() {
  const filters = new Set()
  data.map((item) => { filters.add(item.type) })
  filters.add('all')
  return Array.from(filters)
}

const getImagePath = (imageName) => {
  return `${import.meta.env.BASE_URL}${imageName}`;
}

export { contractStr, filterLoader, getImagePath }