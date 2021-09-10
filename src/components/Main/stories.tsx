import { Meta } from '@storybook/react'
import React from 'react'

import Main, { MainProps } from '.'

export default {
  component: Main,
  title: 'Components/Main'
} as Meta

// eslint-disable-next-line @typescript-eslint/ban-types
export const Primary: React.VFC<MainProps> = args => <Main {...args} />
