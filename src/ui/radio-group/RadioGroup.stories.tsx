import { useState } from 'react';

import { RadioGroup } from './RadioGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = (): React.JSX.Element => {
  const options = [
    { title: 'Option 1', value: 'Option 1', className: '' },
    { title: 'Option 2', value: 'Option 2', className: '' },
    { title: 'Option 3', value: 'Option 3', className: '' },
    { title: 'Option 4', value: 'Option 4', className: '' },
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <>
      <RadioGroup
        selected={selected}
        name="radio"
        onChange={setSelected}
        options={options}
        title="Bezeichnung der Optionsgruppe"
      />
    </>
  );
};

export const RadioGroupStory: Story = {
  render: () => <RadioGroupWithState />,
};
