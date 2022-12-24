import { within, userEvent, waitFor } from '@storybook/testing-library'
import { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/jest'
import { SignIn } from '../pages/SignIn'
import { rest } from 'msw'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/login', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu E-mail'), 'guilherme.2203@hotmail.com')
    userEvent.type(canvas.getByPlaceholderText('***********'), 'Lindão')

    userEvent.click(canvas.getByRole('button'))

    /* await waitFor(() => {
      return expect(canvas.getByAltText('Login realizado!'))
    }) */
  }
}
