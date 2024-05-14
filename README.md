# Desmy-react


Introducing an `easy-to-use`, `lightning-fast` React.js component that streamlines your development process. Our solution prioritizes `simplicity`, `speed`, and `optimization`, making it a breeze to build projects in React.

Currently working on other components, contact  [desmydev@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=desmydev@gmail.com) for assistance 

- Zero-dependency (pre-built bundle)

## Features
* DesmyModalHandler
* DesmyDropDown
* DesmyClickOutsideListener
* DesmyModalContainer

## Installation

```bash
# Yarn
$ yarn add desmy-react

# NPM
$ npm i --save desmy-react
```

### Using desmy-react library
The library utilizes dynamically created CSS by including 'desmy-react/dist/style.css' in your main.jsx or App.jsx file.

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'// Import your own components
import 'desmy-react/dist/style.css'; // Import the library CSS file
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
## `DesmyModalHandler` usage
To enable the modal functionality, include the following code snippet in your index.html body tag
```html
<!-- This div will act as the container for your modal -->
    <div id="modal-root"></div>
```

```javascript
  import { DesmyModalHandler } from 'desmy-react';

  class App extends React.Component {

      constructor(props) {
          super(props);
          this.state = {
              modal: null // Initialize modal state
          }
      }
      handleSubmit=(e)=>{
          e.preventDefault()
          try{
            var settings={
                btnPosition:`Continue`,
                btnNegative:`Cancel`
            }
            const handleClose = (state) => {
                this.setState({modal:null,}) // Close modal by setting modal state to null
            }
            const modal = <DesmyModalHandler settings={settings} onClose={handleClose}>
                <div className='flex flex-col text-sm w-full py-2'>Testing dialog Desmy react?</div>
            </DesmyModalHandler>;
            
            this.setState({ modal }); // Set modal to be rendered
        }catch(e){
           // Handle errors
        }
      }

      render(){
        return (
          <>
              {this.state.modal}  {/* Render the modal here */}
              <form method="POST" onSubmit={this.handleSubmit}>
                  <button>Click to confirm</button>
              </form>
          </>
        )
      }
  }
```
Make sure to add the line `{this.state.modal}` to your component's render method to display the modal.

## `DesmyDropdown` usage

```javascript

  import React from 'react';
  import { DesmyDropdown } from 'desmy-react';

  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderlist:[{id:"FEMALE",name:"Female"},{id:"MALE",name:"Male"}],
      input:{
        gender:""
      }
    }

  }
  render(){
    return (
    <>
      <form method="POST" onSubmit={this.handleSubmit}>
          <div className="relative w-full group">
              # Local
              <DesmyDropdown 
                  data={this.state.genderlist} 
                  defaultValue={this.state.input.gender}
                  handleChange={(data)=>{
                      var {input} = this.state
                      input['gender'] = data.id
                      this.setState({input})
                  }} 
                  dropdownClass={`bg-black text-black border`}
                  placeholder={`Placeholer`} 
                  dropdownListClass={`flex w-full bg-white dark:bg-slate-900 text-black dark:text-white hover:bg-gray-200`} 
                  className={`flex w-full dark:text-white text-sm border-0 border-black dark:border-gray-300 bg-transparent outline-none focus:outline-none`}
              />

              # Server Request
              <DesmyDropdown 
                  request={{
                      url:"endpoint_url_here"//https://example.com/1/
                  }}
                  defaultValue={this.state.input.gender}
                  handleChange={(data)=>{
                      var {input} = this.state
                      input['gender'] = data.id
                      this.setState({input})
                  }} 
                  dropdownClass={`bg-black text-black border`}
                  placeholder={`Placeholer`} 
                  dropdownListClass={`flex w-full bg-white dark:bg-slate-900 text-black dark:text-white hover:bg-gray-200`} 
                  className={`flex w-full dark:text-white text-sm border-0 border-black dark:border-gray-300 bg-transparent outline-none focus:outline-none`}
              />
                                                  
          </div>
      </form>
    </>
    )
  }
  export default App
  }
```
## `DesmyModalContainer` usage
```javascript
  import { DesmyModalContainer } from 'desmy-react';

  class App extends React.Component {

      constructor(props) {
          super(props);
      }
      handleOnClose=()=>{

      }
      render(){
        return (
          <>
              <DesmyModalContainer data={{title:"Create User"}} onClose={()=>this.handleOnClose()}>
                <form method="POST">
                    <input type="text" placeholder="username"/>
                    <input type="submit" value="create"/>
                </form>
              </DesmyModalContainer>
          </>
        )
      }
  }
```
