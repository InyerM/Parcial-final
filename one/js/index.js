const button = document.querySelector('#button')
const form = document.querySelector('#form')
const tbody = document.querySelector('#tbody')

button.addEventListener('click', (e) => {
  e.preventDefault()
  const product = form.querySelector('#producto').value
  const price = form.querySelector('#precio').value
  const enteredIva = form.querySelector('#iva').value
  if (product === '' || price === '' || enteredIva === '') {
    alert('No ingresó todos los campos')
    return
  }
  if(parseInt(enteredIva) > 100 || parseInt(enteredIva) < 0) {
    alert('El porcentaje debe estar entre 0 y 100')
    return
  }
  const iva = parseFloat(`1.${enteredIva}`)
  const totalIva = price * iva

  const tr = document.createElement('tr')

  const tdproduct = document.createElement('td')
  tdproduct.innerHTML = product
  const tdprice = document.createElement('td')
  tdprice.innerHTML = price
  const tdenteredIva = document.createElement('td')
  tdenteredIva.innerHTML = enteredIva
  const tdtotalIva = document.createElement('td')
  tdtotalIva.innerHTML = totalIva
  
  tr.appendChild(tdproduct)
  tr.appendChild(tdprice)
  tr.appendChild(tdenteredIva)
  tr.appendChild(tdtotalIva)

  tbody.appendChild(tr)

})