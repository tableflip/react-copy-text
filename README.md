# react-copy-text

[![Build Status](https://travis-ci.org/tableflip/react-copy-text.svg?branch=master)](https://travis-ci.org/tableflip/react-copy-text) [![dependencies Status](https://david-dm.org/tableflip/react-copy-text/status.svg)](https://david-dm.org/tableflip/react-copy-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Copy text to the clipboard like it's 1999

Beautifully simples React component to copy the `text` you give to it, with optional `onCopied` callback so you know when it's done.

## Install

```sh
npm install react-copy-text
```

## Usage

```js
import React, { Component } from 'react'
import CopyText from 'react-copy-text'

export default class App extends Component {
  state = {textToCopy: ''}

  onButtonClick = () => this.setState({ textToCopy: 'NOW: ' + Date.now() })
  onCopied = (text) => console.log(`${text} was copied to the clipboard`)

  render () {
    return (
      <div>
        <button onClick={this.onButtonClick}>Copy some text</button>
        <CopyText text={this.state.textToCopy} onCopied={this.onCopied} />
      </div>
    )
  }
}
```

## API

### `<CopyText />`

#### `text`

Type: `PropTypes.string`

The text to copy to the clipboard.

#### `onCopied`

Type: `PropTypes.func`

Callback function called after the text has been copied to the clipboard. Passed the text that was copied.

---

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.
