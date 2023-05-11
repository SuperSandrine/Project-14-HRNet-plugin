# Getting Started with react-modal-tuv39

It's a costumisable modal with different props.
You can custom content and style, from title, description text, button text to color button and duration of fadeIn animation.

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
        closureButton="I'm closing"
        customButtonColor="orange"
      >{"Here is some description text that your modal displays"}</Modal>
    </div>
  )
}
```

## Documentation
### Props
| Name          | Type        | Default     | Example     | Description |
| -------|------|------|------|------|
| showModal *   | bool        |             | true/false  | If true, the component is shown.
| onClose *     | func        |             | {()=>setAppear(false)} | Callback fired when the component requests to be closed. A local state could be used to open and close modal (eg: usage)
| title         | string      |             | "Here is a title" | If added, the component displays a title in h3.
| children      | string / number / element |  | {"Here is some description text"} | If added, the component displays some description text.
| closureButton | string      | element     | "I'm closing" | If added, the component displays a basic blus button with this text inside. If not, then the component has a basic blue crossed button  |
| backDropClickAndClose | bool | false      | true/false  | If true, the component can be closed with a backdrop click |
| closeAllModalsBefore  | bool | false      | true/false  | If true, the component closes all previous opened modals. |
| fadeIn        | bool        | false       | true/false  |If true, the component adds a fadeIn animation on modal displaying. This animation has a default duration of 2sec that can be changed with animationDuration props|
| animationDuration | string  | 2 sec       | "5"         | This value should be a number in a string type. It will be the duration of the modal fade-in animation and fade-out in seconds.
| fadeOut       | bool        | true/false  |If true, the component adds a fadeOut animation on modal closing. This animation has a default duration of 2sec that can be changed with animationDuration props|
| customButtonColor | string    | #1976d2 (blue hue) | "orange" | Controls colored part: the color of the close button and spinner. If added, the component changed his default color in the one chosen, can be in hexadecimal format, HSL and HSLA format, RGB  and RGBA format and name format.
| dataHref      | string        | Default   | Description |Description |
| ajaxData      | string        | 'data.id' | Description |Description |

### CSS
| class name    | Description |
| -------|------|
| container   | add explanation        