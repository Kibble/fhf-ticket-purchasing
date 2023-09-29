import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import '../index.scss';

import CardEntry from '../components/CardEntry';

const meta = {
  title: 'Example/CardEntry',
  component: CardEntry,
//   parameters: {
//     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
//     layout: 'fullscreen',
//   },
} satisfies Meta<typeof CardEntry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const LoggedOut: Story = {};

// // More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
// export const LoggedIn: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const loginButton = await canvas.getByRole('button', {
//       name: /Log in/i,
//     });
//     await userEvent.click(loginButton);
//   },
// };
