# Getting Started with react-modal-tuv39

This module was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It's a costumisable modal with different props.

## Installation
```shell
npm install react-modal-tuv39
```
## Importing
```js
import { Modal } from 'react-modal-tuv39'
```
## Usage
react-modal-tuv39 was originally created to replace a jquery modal in a global react project.
```js
import React from 'react';
import { Modal } from 'react-modal-tuv39';

const test = () =>{
  const [appear, setAppear] = useState(false);

  return (
    <div>
      <button onclick={()=>{setAppear(true)}}>
      <Modal
        showModal={appear}
        onClose={()=>setAppear(false)}
        title="Here is a title"
        backDropClickAndClose
        closeAllModalsBefore
        fadeIn
        animationDuration="1"
        fadeOut
        closureButton="je teste la fermeture"
        customButtonColor="orange"
      />
    </div>
  )
}
```
