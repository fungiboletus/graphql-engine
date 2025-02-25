import React from 'react';
import { Meta, Story } from '@storybook/react';
import { z } from 'zod';
import { SimpleForm } from '@/new-components/Form';

import {
  ColumnPermissionsSection,
  ColumnPermissionsSectionProps,
} from './ColumnPermissions';

const schema = z.object({ columns: z.record(z.optional(z.boolean())) });

export default {
  title: 'Features/Permissions Tab/Permissions Form/Components/Column Section',
  component: ColumnPermissionsSection,
  decorators: [
    (StoryComponent: React.FC) => (
      <SimpleForm
        schema={schema}
        onSubmit={() => {}}
        options={{
          defaultValues: {
            columns: { id: false, name: false, description: false },
          },
        }}
        className="p-4"
      >
        <StoryComponent />
      </SimpleForm>
    ),
  ],
  parameters: {
    // Disable storybook for playground stories
    chromatic: { disableSnapshot: true },
  },
} as Meta;

const columns = ['id', 'name', 'description'];

export const Insert: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
Insert.args = {
  roleName: 'two',
  queryType: 'insert',
  columns,
};

export const Select: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
Select.args = {
  ...Insert.args,
  queryType: 'select',
};

export const Update: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
Update.args = {
  ...Insert.args,
  queryType: 'update',
};

export const Delete: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
Delete.args = {
  ...Insert.args,
  queryType: 'delete',
};

export const PartiallySelected: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
PartiallySelected.args = {
  ...Insert.args,
  queryType: 'insert',
};
PartiallySelected.decorators = [
  (S: React.FC) => (
    <SimpleForm
      schema={schema}
      onSubmit={() => {}}
      options={{
        defaultValues: {
          columns: { id: true, name: false, description: true },
        },
      }}
      className="p-4"
    >
      <S />
    </SimpleForm>
  ),
];

export const AllSelected: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
AllSelected.args = {
  ...Insert.args,
};
AllSelected.decorators = [
  (S: React.FC) => (
    <SimpleForm
      schema={schema}
      onSubmit={() => {}}
      options={{
        defaultValues: {
          columns: { id: true, name: true, description: true },
        },
      }}
      className="p-4"
    >
      <S />
    </SimpleForm>
  ),
];

export const Showcase: Story<ColumnPermissionsSectionProps> = args => (
  <ColumnPermissionsSection {...args} />
);
Showcase.args = {
  ...Insert.args,
};
Showcase.parameters = {
  chromatic: { disableSnapshot: false },
};
