import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CopyText extends Component {
  static propTypes = {
    text: PropTypes.string,
    onCopied: PropTypes.func
  }

  state = {copying: false}

  componentWillReceiveProps (nextProps) {
    if (nextProps.text && this.props.text !== nextProps.text) {
      this.setState({copying: true})
    }
  }

  onInputRef = (ref) => {
    if (!ref) return
    ref.select()
    document.execCommand('copy')
    this.setState({copying: false})
    if (this.props.onCopied) this.props.onCopied(this.props.text)
  }

  render () {
    return this.state.copying
      ? <input ref={this.onInputRef} value={this.props.text} readOnly />
      : null
  }
}
