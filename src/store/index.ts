import { useContext, createContext } from 'react'
import cart from './Cart'
import counter from './Counter'

class RootStore {
  cart = cart
  counter = counter
}
const store = new RootStore()
const Context = createContext(store)
export const useStore = () => {
  return useContext(Context)
}