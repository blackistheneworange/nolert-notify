# @nolert/notify

A lightweight utility library for creating notifications for the web developed using vanilla Javascript and plain CSS.

## Installation & Setup

[**View the live demo**](https://blackistheneworange.github.io/nolert-notify/)

Install the plugin from npm:

```sh
npm install @nolert/notify
```

Import the css file in your root file:
```js
import "@nolert/notify/dist/style.min.css";
```

Then import the plugin in your js file:

```js
import notify from "@nolert/notify";
```

If you want to import it directly in your html file, add the below script tag in your html file:

```html
<script src="@nolert/notify/dist/script.min.js"></script>
<!-- The element can be accessed using NolertNotify variable -->
<script>
    NolertNotify.setConfig({});
    NolertNotify.trigger({message: "My custom message"});
</script>
```
## Setting config at root
```js
notify.setConfig({
    display:("solo" | "stack"),
    cssOverrides:{borderRadius:"4px",zIndex:100}, /*custom overrides (only borderRadius & zIndex are supported as of now)*/
    type: ("info" | "success" | "warning" | "danger" | "dark" | "light"), 
    position: ("top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"), 
    autoClose: (true | false), /*determine whether the notification should close automatically or not*/
    closeButton: (true | false), /*determine whether to show close button or not*/
    closeIn: 3000, /*time for the notification to close automatically in milliseconds*/
    iconType: ("info" | "success" | "warning" | "danger"),
    noIcon: (true | false) /*determine whether to show default notification icon or not*/
});
```

## Basic usage

```js
notify.trigger({
    message: "My custom message", /*Message to be displayed*/
    type: ("info" | "success" | "warning" | "danger" | "dark" | "light"), 
    position: ("top" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"), 
    autoClose: (true | false), /*determine whether the notification should close automatically or not*/
    closeButton: (true | false), /*determine whether to show close button or not*/
    closeIn: 3000, /*time for the notification to close automatically in milliseconds*/
    iconType: ("info" | "success" | "warning" | "danger"),
    noIcon: (true | false) /*determine whether to show default notification icon or not*/
});
```
