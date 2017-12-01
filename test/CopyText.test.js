import './_setup'
import test from 'ava'
import { shallow, mount, configure } from 'enzyme'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import CopyText from '../src/CopyText'

configure({ adapter: new Adapter() })

test('should mount without exploding', (t) => {
  t.notThrows(() => {
    shallow(
      <CopyText />
    )
  })
})

test('should copy text when set', (t) => {
  const _execCommand = global.document.execCommand

  const execCommand = (arg) => {
    execCommand.called = true
    execCommand.calledWith = (calledWithArg) => calledWithArg === arg
  }

  global.document.execCommand = execCommand

  const text = 'TEST' + Date.now()

  const wrapper = mount(<CopyText />)

  wrapper.setProps({ text })

  t.true(execCommand.called, 'execCommand called')
  t.true(execCommand.calledWith('copy'), 'execCommand called with "copy"')

  global.document.execCommand = _execCommand
})

test('should call onCopied after copy', (t) => {
  const _execCommand = global.document.execCommand

  const execCommand = (arg) => {
    execCommand.called = true
    execCommand.calledWith = (calledWithArg) => calledWithArg === arg
  }

  global.document.execCommand = execCommand

  const text = 'TEST' + Date.now()

  const onCopied = (arg) => {
    onCopied.called = true
    onCopied.calledWith = (calledWithArg) => calledWithArg === arg
  }

  const wrapper = mount(<CopyText />)

  wrapper.setProps({ text, onCopied })

  t.true(execCommand.called, 'execCommand called')
  t.true(execCommand.calledWith('copy'), 'execCommand called with "copy"')
  t.true(onCopied.called, 'onCopied called')
  t.true(onCopied.calledWith(text), `onCopied called with "${text}"`)

  global.document.execCommand = _execCommand
})
