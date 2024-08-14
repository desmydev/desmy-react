# Desmy-react


Introducing an `easy-to-use`, `lightning-fast` React.js component that streamlines your development process. Our solution prioritizes `simplicity`, `speed`, and `optimization`, making it a breeze to build projects in React.

Currently working on other components, contact  [desmydev@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=desmydev@gmail.com) for assistance 

- Zero-dependency (pre-built bundle)

## Features
* DesmyModalHandler
* DesmyModalWrapper
* DesmyDropDown
* DesmyAlertDialog
* DesmyButton (Types : NORMAL, SMALL, LARGE. Request state and icon supported)
* DesmyClickOutsideListener
* DesmyModalContainer
* DesmyTextInput (Support email address, phone number, number validations)
* DesmyFilePicker
* DesmyAccordion 
* DesmyDataTable
* DesmyCustomDataTable (Cards and custom views support)
* DesmyDataSetTable (Expandable and Collapsable)
* DesmyPopupMenu
* DesmyListCard (Card views)

## Utilities
* DesmyAuth 
* DesmyState
* DesmyAlert
* DesmyCommons
* DesmyLazyLoading
* DesmyRxServices
* DesmyReadMoreOrLess

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
## `DesmyAuth` usage

A simple authentication utility for `managing sessions` and `data storage`.

```javascript
import {DesmyAuth} from 'desmy-react';
// Example usage
DesmyAuth.save('username', 'kekeli');// Save data
DesmyAuth.get('username'); // Output: kekeli
DesmyAuth.remove('username');// Remove data
DesmyAuth.clear();// Clear all data
DesmyAuth.logout();// Logout user
const cookieValue = DesmyAuth.getCookie('session');// Get cookie value

// Save list of data
const dataList = [
  { key: 'username', value: 'kekeli' },
  { key: 'email', value: 'robinsongbaya@desmydev.com' }
];

auth.saveList(dataList, (success) => {
  console.log('Data saved successfully:', success);
});
```


## `DesmyCommons` usage

A utility library for `common` JavaScript tasks.

```javascript
import {DesmyCommons} from 'desmy-react';

// Example usage
const fileSize = DesmyCommons.getFileSize(myFile);
const extension = DesmyCommons.getExtension('desmydev.txt');
const fileName = DesmyCommons.getFileName('desmydev.txt');
const isValidUrl = DesmyCommons.isValidHttpUrl('https://desmydev.com');
const uniqueId = DesmyCommons.makeUniqueid();
const textFromName = DesmyCommons.nameToText('desmydev');
const randomColor = DesmyCommons.getRandomColor();
const key = DesmyCommons.generateKey();
const concatenated = DesmyCommons.concat('desmy', 'dev');
const isEmptyOrNull = DesmyCommons.isEmptyOrNull(null);
const toStringDefault = DesmyCommons.toStringDefault(123, 'default');
const toStringData = DesmyCommons.toString(123);
const isEmpty = DesmyCommons.isEmpty('');
const passwordsValid = DesmyCommons.validatePasswords('pass1', 'pass1');
const passwordValidation = DesmyCommons.validatePassword('Password1!');
const isNotEmpty = DesmyCommons.isNotEmpty('desmy');
const underscoreToSpace = DesmyCommons.convertUnderscoreToSpaceString('desmy_dev');
const imageDimensions = await DesmyCommons.imageSize(imageBlob);
const capitalized = DesmyCommons.capitalizeEachWord('desmy dev');
const formattedDate = DesmyCommons.formatDateString('2024-05-14');
const emailValid = DesmyCommons.validateEmail('desmydev@gmail.com');
const convertedNumber = DesmyCommons.convertNumber(123);
const daysRemaining = DesmyCommons.daysLeft('2024-12-31');
const customFormattedDate = DesmyCommons.formatDateToCustomFormat(new Date());
const timeAgo = DesmyCommons.getTimeAgoAndCustomDate(new Date());
const roundedData = DesmyCommons.roundTo2dp('3.14159');
```