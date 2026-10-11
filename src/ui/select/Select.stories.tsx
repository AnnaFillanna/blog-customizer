import { useState } from 'react';

import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWithState = (): React.JSX.Element => {
  const options = [
    { title: 'Option 1', value: 'Option 1', className: '' },
    { title: 'Option 2', value: 'Option 2', className: '' },
    { title: 'Option 3', value: 'Option 3', className: '' },
    { title: 'Option 4', value: 'Option 4', className: '' },
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <Select
        selected={selected}
        onChange={setSelected}
        options={options}
        title="Bezeichnung der Auswahlliste"
      />
    </>
  );
};

export const SelectStory: Story = {
  render: () => <SelectWithState />,
};
