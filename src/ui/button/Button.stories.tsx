import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          title="Anwenden"
          htmlType="submit"
          type="apply"
          onClick={() => alert('Auf Anwenden geklickt')}
        />
        <Button
          title="Zurücksetzen"
          htmlType="reset"
          type="clear"
          onClick={() => alert('Auf Zurücksetzen geklickt')}
        />
      </div>
    );
  },
};
