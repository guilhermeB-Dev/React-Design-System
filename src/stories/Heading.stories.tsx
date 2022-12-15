import { Heading, HeadingProps } from '../components/Heading'
import { Meta, StoryObj } from '@storybook/react'

export default {
	title: 'Component/Heading',
	component: Heading,
	args: {
		children: 'Lorem ipsum.'
	},
	argsTypes: {
		size: {
			options: ['sm', 'md', 'lg'],
			control: {
				type: 'inline-radio'
			}
		}
	}
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
	args: {
		size: 'sm'
	}
}

export const Large: StoryObj<HeadingProps> = {
	args: {
		size: 'lg'
	}
}

export const CustomComponent: StoryObj<HeadingProps> = {
	args: {
		asChild: true,
		children: (
			<h1>Component custom Heading</h1>
		)
	},
	argTypes: {
		children: {
			control: {
				type: null
			}
		},
		asChild: {
			table: {
				disable: true
			}
		}
	}
}
