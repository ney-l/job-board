import { Meta, Story } from '@storybook/react';

import { OrgInfo, OrgInfoProps } from './org-info';

export default {
  title: 'Features/OrgInfo',
  component: OrgInfo,
} as Meta;

const Template: Story<OrgInfoProps> = (args) => (
  <OrgInfo {...args} />
);

const sampleOrg = {
  id: 'amYXmIyT9mD9GyO6CCr',
  createdAt: 1645628972465,
  adminId: 'KV4Lv9yUHtNVB42V0ZrFf',
  name: 'Test Org 1',
  email: 'org1@test.com',
  phone: '944-528-1711',
  info: 'Totam alias fuga enim esse ullam sit. Nisi animi ut at voluptatem odit nam ea. Et fuga consequatur similique asperiores non suscipit corrupti aperiam. Molestiae quae aut laborum soluta blanditiis cupiditate hic nobis provident.Et quae aut labore aut rerum. Nisi at autem. Enim ipsum enim consectetur sequi consequatur. Sint qui qui quam. Voluptas dignissimos rem et natus. Autem et mollitia hic suscipit illum placeat.Optio aut sit assumenda quo eius omnis sed non consequatur. Numquam perferendis ea sit rerum officia cupiditate aut itaque doloremque. Itaque alias est repellendus. Esse consectetur tenetur velit autem excepturi. Velit perspiciatis saepe dolorum fugiat. Adipisci odio porro quibusdam similique sunt temporibus ipsam.Dolor assumenda aut qui et in perferendis et. Possimus quam qui impedit. Nesciunt aliquid qui consequatur possimus eos velit deserunt magni qui. Nam accusantium libero corrupti.Nulla in ut sunt rerum voluptatem rerum voluptates. Quis expedita natus earum similique officiis rem. Possimus similique architecto ut ad ea quia laborum. Officia voluptatibus quos aliquid delectus. Est voluptates necessitatibus iure et provident iusto at voluptatem sit. Molestiae exercitationem repellat tempore. Id excepturi officiis iste ullam similique et hic sit. Quis et eaque quidem. Qui voluptas ea et rem recusandae suscipit voluptatem sit. Sint ut officiis nihil perferendis nihil quibusdam molestiae. Blanditiis nihil ab illo. Voluptatem mollitia officia aperiam. Esse voluptatum voluptatem nihil minima.',
};

export const Default = Template.bind({});
Default.args = {
  org: sampleOrg,
};
