## Introduction

React Widget Component

## Installation

`npm install --save react-indeema-widget`

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
