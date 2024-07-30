import { Component, createContext } from "react"

const Context = createContext("mi valor")

const Provider = ({children}) => {
  return(
    <Context.Provider value="otro valor">
      {children}
    </Context.Provider>
  )
}

class Componente extends Component {
  //static contextType = Context
  render() {
    console.log(this.context)
    return(
      <div>Hola mundo</div>
    )
  }
}

Componente.contextType = Context

const App = () => {
  return(
    <Provider>
      <Componente />
      <Context.Consumer>
        {valor => <div>{valor}</div>}
      </Context.Consumer>
    </Provider>
  )
}

export default App