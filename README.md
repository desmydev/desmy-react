# Desmy-react

Introducing an `easy-to-use`, `lightning-fast` React.js component library that streamlines your development process. Our solution prioritizes `simplicity`, `speed`, and `optimization`, making it a breeze to build projects in React.

Currently working on other components, contact [desmydev@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=desmydev@gmail.com) for assistance.

- Zero-dependency (pre-built bundle)

## Features
* DesmyModalHandler
* DesmyModalWrapper
* DesmyDropDown
* DesmyAlertDialog
* DesmyButton (Types : NORMAL, SMALL, LARGE. Request state and icon supported)
* DesmyClickOutsideListener
* DesmyModalContainer
* DesmyTextInput (Supports email address, phone number, number validations)
* DesmyFilePicker
* DesmyDatePicker
* DesmyAccordion 
* DesmyDataTable
* DesmyCustomDataTable (Cards and custom views support)
* DesmyDataSetTable (Expandable and Collapsible)
* DesmyPopupMenu
* DesmyListCard (Card views)
* DesmyUploadManager
* DesmyTabLayout
* DesmySmartFormUpload
* DesmyToast (Supports custom components)
* DesmyPassportPicker

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

> **Note:** This library requires Node.js version 14 or higher for optimal compatibility and performance.

### Using desmy-react library
The library utilizes dynamically created CSS by including 'desmy-react/dist/style.css' in your main.jsx or App.jsx file.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your own components
import 'desmy-react/dist/style.css'; // Import the library CSS file
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## `DesmyModalHandler` Usage
To enable the modal functionality, include the following code snippet in your `index.html` body tag:

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
      modal: null, // Initialize modal state
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    try {
      var settings = {
        btnPosition: `Continue`,
        btnNegative: `Cancel`,
      };
      const handleClose = (state) => {
        this.setState({ modal: null }); // Close modal by setting modal state to null
      };
      const modal = (
        <DesmyModalHandler settings={settings} onClose={handleClose}>
          <div className='flex flex-col text-sm w-full py-2'>Testing dialog Desmy react?</div>
        </DesmyModalHandler>
      );

      this.setState({ modal }); // Set modal to be rendered
    } catch (e) {
      // Handle errors
    }
  };

  render() {
    return (
      <>
        {this.state.modal} {/* Render the modal here */}
        <form method="POST" onSubmit={this.handleSubmit}>
          <button>Click to confirm</button>
        </form>
      </>
    );
  }
}
```
Make sure to add the line `{this.state.modal}` to your component's render method to display the modal.

## `DesmyDropdown` Usage

```javascript
import React from 'react';
import { DesmyDropdown } from 'desmy-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genderlist: [
        { id: "FEMALE", name: "Female" },
        { id: "MALE", name: "Male" },
      ],
      data: [],
      input: {
        gender: "",
        data: [],
      },
    };
  }

  render() {
    return (
      <>
        <form method="POST" onSubmit={this.handleSubmit}>
          <div className="relative w-full group">
            {/* Local */}
            <DesmyDropdown
              data={this.state.genderlist}
              defaultValue={this.state.input.gender}
              handleChange={(data) => {
                var { input } = this.state;
                input['gender'] = data.id;
                this.setState({ input });
              }}
              placeholder={`Select Gender`}
            />

            {/* Server Request */}
            <DesmyDropdown
              request={{
                url: "endpoint_url_here", // https://example.com/1/
                token: DesmyAuth.get(DesmyState.ACCESS_TOKEN),
              }}
              defaultValue={this.state.input.data}
              is_multiple={true}
              handleChange={(data) => {
                if (!DesmyCommons.isEmptyOrNull(data)) {
                  var { input } = this.state;
                  input['parent_course'] = data.id;
                  this.setState({ input });
                }
              }}
              placeholder={`Select Multiple Options`}
            />
          </div>
        </form>
      </>
    );
  }
}
export default App;
```

## `DesmySmartUpload Form and DesmyTabLayout` Usage
Make sure to add this code to the parent component in order to use the upload progress dialog:

```javascript
import {DesmyUploadManager} from "desmy-react"

<DesmyUploadManager className={` font-poppinsRegular`} {...this.props} />
```

```javascript
import { DesmyAuth, DesmyModalContainer,DesmyCommons, DesmySmartFormUpload, DesmyState, DesmyTabLayout  } from 'desmy-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: [
        { id: "name", readOnly: true },
        { id: "description", readOnly: true },
        { id: "total", readOnly: true },
      ],
      filter_column: { unique_field: "name" },
      reader: {
        sheet_name: `Sheet1`,
        url: "api/endpoint_url_here", // https://example.com/1/
        title: "Uploading Title",
        template_url: "endpoint_url_here", // https://example.com/1/ to download excel template
        token: DesmyAuth.get(DesmyState.ACCESS_TOKEN),
        ui: {
          icon: `/static/images/excel.png`,
        },
        key_name: "course_title", // excel column to display title when uploading
      },
      settings: {
        pagination: {
          per_page: 100,
        },
        deleteinfo: {
          id: "name",
        },
        server_request: {
          enable: false,
          url: "",
        },
        char_limit: 100,
        encrypt: true,
        default_sorted_column: "name",
        read_more_limit: 100,
        headers: this.props.headers,
        columns: [this.props.headers],
        table_data: [{ name: "action", class: `w-24` }],
      },
    };
  }

  render() {
    return (
      <>
        <DesmyModalContainer data={{ title: "Title Here" }} onClose={() => this.props.onClose()}>
          <form className='flex flex-col w-full'>
            <div className='w-full font-poppinsRegular '>
              <div className='flex flex-col h-[calc(100vh-50px)] w-full'>
                {
                  !(DesmyCommons.isEmptyOrNull(this.props.content)) ?
                    <div className="flex p-4 h-full font-poppinsRegular"><Create {...this.props} /></div>
                    : <DesmyTabLayout tabs={[
                      { label: 'Data Entry' },
                      { label: 'Upload Excel' }
                    ]}>
                      <div className="flex p-4 h-full font-poppinsRegular"><Create {...this.props} /></div>
                      <div className="p-4 h-full overflow-auto font-poppinsRegular">
                        <div className='flex w-full'>
                          <DesmySmartFormUpload reader={this.state.reader} settings={this.state.settings} database={this.state.database} filter_column={this.state.filter_column} {...this.props} />
                        </div>
                      </div>
                    </DesmyTabLayout>
                }
              </div>
            </div>
          </form>
        </DesmyModalContainer>
      </>
    );
  }
}
```

## `DesmyDataTable` Usage
```javascript
import { DesmyDataTable } from 'desmy-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.customDatatableRef = React.createRef();
    this.state = {
      settings: {
        pagination: {
          per_page: 100,
        },
        header: {
          title: "Title Here",
        },
        image: {
          rounded: true,
        },
        deleteinfo: {
          id: "id",
          name: "name",
        },
        extra_handle: [
          { icon: (
            // SVG icon or icon here
          ), name: "data" },
        ],
        handleOnClickExtra: this.handleOnClick,
        handleEdit: this.handleEdit,
        url: "endpoint_url_here", // https://example.com/1/
        request_url: '/api/endpoint_here',
        char_limit: 100,
        encrypt: true,
        default_sorted_column: "column here",
        read_more_limit: 100,
        headers: ['name', 'description'], // Table columns here
        columns: ['id', 'name', 'description'], // Database columns
        table_data: [{ name: "data", class: `w-24` }], // Format a column
      },
    };
  }

  // Refresh or retry loading datatable
  handleOnSuccess = () => {
    try {
      this.setState({ show: false });
      if (this.customDatatableRef.current) {
        this.customDatatableRef.current.handleRetry();
      }
    } catch (e) {
      // Handle errors
    }
  }

  render() {
    return (
      <>
        <DesmyDataTable settings={this.state.settings} onRef={ref => (this.customDatatableRef.current = ref)} />
      </>
    );
  }
}

// Example of settings object structure
const settings = {
  pagination: {
    per_page: 100, // Number of rows per page
  },
  header: {
    title: "Title Here", // Title displayed at the top of the table
  },
  image: {
    rounded: true, // Whether the images in the table should have rounded corners
  },
  deleteinfo: {
    id: "id", // ID field used for deleting rows
    name: "name", // Name field used for reference during deletion
  },
  extra_handle: [
    { icon: (
      // SVG icon or icon here
    ), name: "data" },
  ],
  handleOnClickExtra: this.handleOnClick, // Function called on clicking extra handle
  handleEdit: this.handleEdit, // Function called for editing a row
  url: "endpoint_url_here", // URL for data requests
  request_url: '/api/endpoint_here', // Endpoint for server requests
  char_limit: 100, // Character limit for table data
  encrypt: true, // Whether to encrypt data
  default_sorted_column: "column here", // Default column to sort by
  read_more_limit: 100, // Character limit before showing 'read more'
  headers: ['name', 'description'], // Table headers
  columns: ['id', 'name', 'description'], // Database columns
  table_data: [{ name: "data", class: `w-24` }], // Custom formatting for table columns
};
```

## `DesmyAuth` Usage

A simple authentication utility for `managing sessions` and `data storage`.

```javascript
import { DesmyAuth } from 'desmy-react';

// Example usage
DesmyAuth.save('username', 'kekeli'); // Save data
DesmyAuth.get('username'); // Output: kekeli
DesmyAuth.remove('username'); // Remove data
DesmyAuth.clear(); // Clear all data
DesmyAuth.logout(); // Logout user
const cookieValue = DesmyAuth.getCookie('session'); // Get cookie value

// Save list of data
const dataList = [
  { key: 'username', value: 'kekeli' },
  { key: 'email', value: 'robinsongbaya@desmydev.com' },
];

DesmyAuth.saveList(dataList, (success) => {
  console.log('Data saved successfully:', success);
});
```

## `DesmyCommons` Usage

A utility library for `common` JavaScript tasks.

```javascript
import { DesmyCommons } from 'desmy-react';

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
