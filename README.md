# Getting Started with react-modal-tuv39

It's a costumisable modal with different props.
You can custom content and style, from title, description text, button text to color button and duration of fadeIn/fadeOut animation.
It also deal with <a> link and could display some information from id anchor, extern link or data from API.

This module was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
```shell
npm install react-modal-tuv39
```
## Importing
```js
import { Modal } from 'react-modal-tuv39'
```
## Usage
The react-modal-tuv39 component was originally created to replace a jquery modal in a global react project.

### First example of usage
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
        closureButton="I'm closing"
        customButtonColor="orange"
      >{"Here is some description text that your modal displays"}</Modal>
    </div>
  )
}
```

### Second example of usage: case of link button, to get and provide href attribute to component through props.
The datahref props expect a "event.target" that provide an object as bellow: "<a class="whatever appear" href="https://www.npmjs.com/package/react-modal-tuv39" >...</a>"
```js
const try =()=>{
    const [appear, setAppear] = useState(false)
    const [dataToGive, setDataToGive] = useState(null);
    return (
      <>
  <a
          href="https://www.npmjs.com/package/react-modal-tuv39"
          onClick={(event) => {
            setDataToGive(event.target);
            setAppear(true);
          }}
        />
        <Modal
        showModal={montre4}
        onClose={()=>setAppear(false)}
        dataHref={dataToGive}
        >
        </>
        )}
```

## Documentation

Here are props of the modal component element.
Some of this props are required (*).
Some of this props work with together for an action.
### Props

| Name          | Type        | Default     | Example     | Description |
| -------|------|------|------|------|
| showModal *   | bool        |             | true/false  | If true, the component is shown.|
| onClose *     | func        |             | {()=>setAppear(false)} | Callback fired when the component requests to be closed. A local state could be used to open and close modal (eg: usage).|
| title         | string      |             | "Here is a title" | If added, the component displays a title in h3.|
| children      | string / number / element |  | {"Here is some description text"} | If added, the component displays some description text.|
| closureButton | string      | element     | "I'm closing" | If added, the component displays a basic blue button with this text inside. If not, then the component has a default blue crossed button  |
| backDropClickAndClose | bool | false      | true/false  | If true, the component can be closed with a backdrop click |
| closeAllModalsBefore  | bool | false      | true/false  | If true, the component closes all previous opened modals. |
| fadeIn        | bool        | false       | true/false  |If true, the component adds a fadeIn animation on modal displaying. This animation has a default duration of 2sec that can be changed with animationDuration props|
| animationDuration | string  | 2 sec       | "5"         | This value should be a number in a string type. It will be the duration of the modal fade-in animation and fade-out in seconds.|
| fadeOut       | bool        | false       | true/false  |If true, the component adds a fadeOut animation on modal closing. This animation has a default duration of 2sec that can be changed with animationDuration props|
| customButtonColor | string  | #1976d2 (blue hue) | "orange" | Controls colored part: the color of the close button and spinner. If added, the component changed his default color in the one chosen, can be in hexadecimal format, HSL and HSLA format, RGB  and RGBA format and name format.|
| dataHref      | object      |             | "event.target" through a local state | To deal with link through <a>, the component need to have the object 'event.target' from event which active the modal display. For instance, if the event is a click on a, then dataHref should be the 'event.target' from onClick action |
| ajaxData      | string      | 'data.id'   | "data.name" | If dataHref is an API, ajaxData is necessary to display some text or data from the API, It's the name of the data to be fetched from the URL. Note that it should began with "data.", as "data.city", or "data.phoneNumber". |
| dataHrefIsAnAPI | bool      | false       | true/false  | Boolean that determines if the extern link clicked is an API and allow to handle specifically the data displayed |

### CSS
It is possible to customise some more of the style with the reference bellow: 
| Tag name      |class name    | Description |
|-------|-------|-------|
| root          | :root (not a class) | styles applied to the root element, contained color variable. |
|               | .tUv39-modal-blocker-div | Styles applied to the back drop modal.|
|               | .tUv39-modal-container   | Styles applied to modal container.    |
|               | .tUv39-modalclose-h3     | Styles applied to modal title.        |
|               | .tUv39-modalclose-p      | Styles applied to modal parapgraph.   |
|               | .tUv39-modalclose-button | Styles applied to modal button.       |
|               | .tUv39-modalclose-button-default | Styles applied to modal default button. |
|               | .tUv39-modal-fadeIn      | animation styles, when class called, animated the element (in this component, applied on .tUv39-modal-blocker-div )     |
|               | .tUv39-modal-fadeOu      | Styles applied to modal button.       |


