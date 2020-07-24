# Facebook Pixel Injection
Simple Facebook Pixel Injection.
```
pixel_id    --> string (required)
event       --> string (required)
```

## Install
### Install via npm
```
$ npm i facebook-pixel-event-injection
```
### Install via CDN
```
<script src="https://placedv-npm.s3-eu-west-1.amazonaws.com/facebook_pixel_event_injection/index.js"></script>
```

## Simple Usage
To make it work properly, it must have only one event in the declaration function.

```js
import facebook from 'facebook-pixel-event-injection'

// PageView example
facebook('691662573424231', {
    track: 'PageView'
});

// Lead example
facebook('691662573424231', {
    track: 'Lead'
});

// Custom Event
facebook('607791573487795', {
    track: 'PageView',
    trackCustom: 'ShareDiscount'
});
```
