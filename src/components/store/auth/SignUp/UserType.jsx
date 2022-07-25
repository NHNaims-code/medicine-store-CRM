import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';

const data = [
  {
    image: 'https://img.icons8.com/fluency/344/popular-man.png',
    label: 'Viewer',
    value: 'viewer',
    description: 'Only can see all pages. Cannot take action',
  },

  {
    image: 'https://img.icons8.com/fluency/344/admin-settings-male.png',
    label: 'Admin',
    value: 'admin',
    description: 'All access',
  },
  {
    image: 'https://img.icons8.com/office/344/administrator-male--v1.png',
    label: 'Store Man',
    value: 'store_man',
    description: 'Can add medicine and read medicine only',
  },
  {
    image: 'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/344/external-shopkeeper-shopping-and-retail-smashingstocks-flat-smashing-stocks.png',
    label: 'Shopkeeper',
    value: 'shopkeeper',
    description: 'Can sale medicine only',
  },
];


const SelectItem = forwardRef(
  ({ image, label, description, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export default function UserType({onChange}) {
  return (
    <Select
      label="Choose user role"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
      // onChange={onChange}
      searchable
      name='user_role'
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}