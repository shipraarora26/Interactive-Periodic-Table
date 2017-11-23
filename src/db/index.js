import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import elementsJson1 from './elements1.json'
import elementsJson2 from './elements2.json'
import elementsJson3 from './elements3.json'
import elementsJson4 from './elements4.json'
import elementsJson5 from './elements5.json'
import elementsJson6 from './elements6.json'
import elementsJson7 from './elements7.json'
import elementsJson8 from './elements8.json'
import elementsJson9 from './elements9.json'

export const db = low(new LocalStorage('elementsDB'))

export function drop () {
  db.setState({}).write()
}

export function seed () {
  const elements1 = elementsJson1
  const elements2 = elementsJson2
  const elements3 = elementsJson3
  const elements4 = elementsJson4
  const elements5 = elementsJson5
  const elements6 = elementsJson6
  const elements7 = elementsJson7
  const elements8 = elementsJson8
  const elements9 = elementsJson9

  db.defaults({ elements1, elements2, elements3, elements4, elements5, elements6, elements7, elements8, elements9 }).write()
}
