import { Button, ButtonProps } from '../components/Button'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Click me'
  },
  argsTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
