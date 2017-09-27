import React , { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Button } from 'react-bootstrap'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

function configureStore(initialState){
  const enhancer = composeWithDevTools(
      applyMiddleware(
          thunkMiddleware
      )
  )
  return createStore(reducer, initialState, enhancer)
}

const store = configureStore({});

class App extends Component {
  render(){ 
      return (
          <Provider store={store}>
              <Button>Click me!</Button>
          </Provider>
      );
  }
}

export default App