import { TextInput, TextInputRootProps, } from '../components/TextInput'
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Component/TextInput',
  component: TextInput.Root,
  args: {
    children: [
			<TextInput.Icon>
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input placeholder="Type Your text" />
		],
  },
  argsTypes: {}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
	argTypes: {
		children: {
			control: {
				type: null
			}
		}
	}
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
	args: {
    children: <TextInput.Input placeholder="Type Your text" />
  },
	argTypes: {
		children: {
			control: {
				type: null
			}
		}
	}
}
