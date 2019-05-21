<a href="http://piccy.info/view3/13185949/92734046f45fb5aef95567c3145a3f29/" target="_blank"><img src="http://i.piccy.info/i9/9474356b2d657e802e0a70bc6b08aa83/1558442488/23417/1319081/Widgets_500.jpg" alt="Piccy.info - Free Image Hosting" border="0" /></a><a href="http://i.piccy.info/a3c/2019-05-21-12-41/i9-13185949/500x249-r" target="_blank"><img src="http://i.piccy.info/a3/2019-05-21-12-41/i9-13185949/500x249-r/i.gif" alt="" border="0" /></a>

## ReactWidget Component
A component for integrating <a href="http://recharts.org/en-US/">Recharts</a> library into your project quick and easy.

<p>
    <a href="https://github.com/IndeemaSoftware/ReactWidget/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a> <img src="https://img.shields.io/badge/keywords-npm%2C%20recharts%2C%20react-green.svg" />
</p>

## Getting Started

### Prerequisites
Install the <a href="http://recharts.org/en-US/guide/installation">Recharts</a> library.
### Runs On
All browsers that include native Map and Set collection types. 
## Older Browsers Workaround 
If your project supports older browsers and devices that don't include Map and Set (e.g., IE<11) or that have non-compliant implementations (e.g., IE11), consider including a global polyfill in your bundled application, such as [core-js](https://github.com/zloirock/core-js) or babel-polyfill.
### Install Widget
Install ReactWidget component using:
`npm install --save react-indeema-widget`

## Example of Use
```jsx
render () {
  return (
    <Widget
      edit={this.onEditItem}
      remove={this.onRemoveItem(data.i)}
      settings={this.onSettingItem(data.i)}
      isPropertySidebar={this.state.property && data.i === this.state.widgetInd}
      w={d.w}
      h={d.h}
      type={data.type}
      name={data.name}
    />
  );
}
```


## See Also
If you prefer [Highcharts](https://github.com/highcharts/highcharts) over Recharts, check out [Dashboard](https://github.com/IndeemaSoftware/Dashboard) component.

## Support
If you have suggestions, feedback, or encounter any issues, write to [Stackoverflow](https://stackoverflow.com/) or contact us at support@indeema.com. 

To learn more about us, visit https://indeema.com.

## License
[MIT license](https://github.com/IndeemaSoftware/ReactWidget/blob/master/LICENSE)
Copyright 2019 © [Indeema Software](https://indeema.com).
### Developed by Roman Pavliv

## Terms of Use
ReactWidget component is released for testing purposes only. We make no guarantees with respect to its function. By using this software you agree that Indeema is not liable for any damage to your system and data.
