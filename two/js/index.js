const tbody = document.querySelector('#tbody')

const getData = async () => {
  const data = await fetch('https://rickandmortyapi.com/api/character?status=alive')
  const {results} = await data.json()
  console.log(results)
  results.map(i => {
    const tr = document.createElement('tr')
    const tdname = document.createElement('td')
    tdname.innerHTML = i?.name

    const image = document.createElement('img')
    image.src = i?.image
    image.width = 100

    const tdimage = document.createElement('td')
    tdimage.appendChild(image)
    const tdstatus = document.createElement('td')
    tdstatus.innerHTML = i?.status

    tr.appendChild(tdname)
    tr.appendChild(tdimage)
    tr.appendChild(tdstatus)

    tbody.appendChild(tr)
  })
}
getData()