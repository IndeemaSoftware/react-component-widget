## Title

React Widget Component


## Author

Roman Pavliv

## Github url

https://github.com/IndeemaSoftware/ReactWidget

## Installation

`npm install --save react-indeema-widget`

## License
React Widget Component works under the MIT license.

## Minimum requirements 

React Widget Component on the collection types Map and Set. If you support older browsers and devices which may not yet provide these natively (e.g. IE < 11) or which have non-compliant implementations (e.g. IE 11), consider including a global polyfill in your bundled application, such as core-js or babel-polyfill.

## Terms
React Widget Component is released for testing purposes only. We make no guarantees with respect to its function. By using this software you agree that Indeema is not liable for any damage to your system and data.

## Communication and Support
If you encounter an issue or you have any comments or propositions with using the QPredix library then you can reach us in several different ways:
- Having difficulties with using React Widget Component you can write at [Stackoverflow](https://stackoverflow.com/) You will be helped by the community of this resource or our specialists will help you with an answer.

To know more about us, visit our website https://indeema.com

## Example

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