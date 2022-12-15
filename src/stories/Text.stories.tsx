import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '../components/Text'

export default {
    title: 'Component/Text',
    component: Text,
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Component custom Text</p>
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
