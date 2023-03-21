import { useEffect, useState } from 'react';

import { Job } from '@/features/jobs';

const data = {
  users: [
    {
      id: 'user-1',
      createdAt: 1645628972465,
      email: 'user1@test.com',
      password: 'password',
      orgId: 'org-1',
    },
    {
      id: 'wR7sTzKlPhN8aXf3kGvIq',
      createdAt: 1645643918920,
      email: 'user2@test.com',
      password: 'password',
      orgId: 'jM4nLbH8lWzAoUv1RpQe',
    },
    {
      id: 'uZ6mDkG9cEhYbV7pN3wQt',
      createdAt: 1645702917249,
      email: 'user3@test.com',
      password: 'password',
      orgId: 'jM4nLbH8lWzAoUv1RpQe',
    },
  ],
  organizations: [
    {
      id: 'org-1',
      createdAt: 1645628972465,
      adminId: 'KV4Lv9yUHtNVB42V0ZrFf',
      name: 'Test Org 1',
      email: 'org1@test.com',
      phone: '944-528-1711',
      info: 'Totam alias fuga enim esse ullam sit. Nisi animi ut at voluptatem odit nam ea. Et fuga consequatur similique asperiores non suscipit corrupti aperiam. Molestiae quae aut laborum soluta blanditiis cupiditate hic nobis provident.Et quae aut labore aut rerum. Nisi at autem. Enim ipsum enim consectetur sequi consequatur. Sint qui qui quam. Voluptas dignissimos rem et natus. Autem et mollitia hic suscipit illum placeat.Optio aut sit assumenda quo eius omnis sed non consequatur. Numquam perferendis ea sit rerum officia cupiditate aut itaque doloremque. Itaque alias est repellendus. Esse consectetur tenetur velit autem excepturi. Velit perspiciatis saepe dolorum fugiat. Adipisci odio porro quibusdam similique sunt temporibus ipsam.Dolor assumenda aut qui et in perferendis et. Possimus quam qui impedit. Nesciunt aliquid qui consequatur possimus eos velit deserunt magni qui. Nam accusantium libero corrupti.Nulla in ut sunt rerum voluptatem rerum voluptates. Quis expedita natus earum similique officiis rem. Possimus similique architecto ut ad ea quia laborum. Officia voluptatibus quos aliquid delectus. Est voluptates necessitatibus iure et provident iusto at voluptatem sit. Molestiae exercitationem repellat tempore. Id excepturi officiis iste ullam similique et hic sit. Quis et eaque quidem. Qui voluptas ea et rem recusandae suscipit voluptatem sit. Sint ut officiis nihil perferendis nihil quibusdam molestiae. Blanditiis nihil ab illo. Voluptatem mollitia officia aperiam. Esse voluptatum voluptatem nihil minima.',
    },
    {
      id: 'jM4nLbH8lWzAoUv1RpQe',
      createdAt: 1645702917249,
      adminId: 'uZ6mDkG9cEhYbV7pN3wQt',
      name: 'Test Org 2',
      email: 'org2@test.com',
      phone: '990-723-3156',
      info: 'Saepe doloribus sint ut dolorem molestias. Est voluptatem omnis officia enim cum. Fugiat quis rerum. Et ut iusto magni. Et et itaque. Et cupiditate similique. Et aperiam nobis ut rem id in architecto vel. Vel laborum ipsam est aspernatur quia ut. Qui aliquid et. Qui culpa voluptatem. Quasi nihil iusto expedita. Sit eos dolorem. Sed autem quaerat. Ut molestiae ut sint quidem et eum. Qui natus distinctio non magnam ratione. Earum voluptas voluptas enim. Reiciendis ipsa magni. Sit atque qui. Quia distinctio quis voluptatem molestiae suscipit veritatis.',
    },
  ],
  jobs: [
    {
      id: 'job-1',
      createdAt: 1647070016299,
      orgId: 'org-1',
      position: 'Product Manager',
      info: 'Sequi accusantium repellat ea eius nulla consectetur sit. Quia et dolorem consequatur dolores quae. Et accusamus incidunt hic. Est dolores odio autem molestiae dicta minus laborum. Quia et nobis non officia. Itaque ipsam enim libero dolor aut est quas. Dolor nemo impedit quod illum. Ea tempora aut. Commodi nulla ut corporis. Est ipsum nulla expedita labore ut commodi. Fuga non quam sint fuga. Temporibus accusamus maiores. Ut cupiditate distinctio. Ratione iure quis saepe officia fugit autem. Alias voluptatem accusantium doloribus est et est sunt. Laboriosam ut aspernatur omnis doloremque ducimus eveniet incidunt eius. Quo cumque quas sit et. Non porro placeat nobis perferendis. Assumenda voluptas tempora eum quia aut voluptatem. Similique facere ullam saepe unde totam vel nihil velit. Tempora fuga sint praesentium. Est nihil asperiores sed perferendis id magni. Voluptatem deserunt sint. Consectetur velit qui et atque ea quis. Omnis omnis qui et est. Rerum dignissimos asperiores. Aut rem voluptatem dolor. Animi iure provident in et et voluptatem cumque itaque. Enim ipsum aspernatur autem fugit beatae et. Alias ut nostrum expedita vel et perferendis. Error aliquam distinctio fugiat voluptatem numquam dolorum. Omnis quam consequatur occaecati aliquam. Nesciunt doloremque atque fugit voluptates omnis praesentium. Provident aliquam ex delectus. Corporis ut omnis. Rerum adipisci cum dolor deserunt. Quo voluptatum quae dolor voluptates. Nam placeat optio ex sed inventore nihil labore. Optio aliquam',
      location: 'London',
      department: 'Product',
    },
    {
      id: 'sT2nQfY7jJvOcL1xH8aB',
      createdAt: 1647115814990,
      orgId: 'org-1',
      position: 'Software Engineer',
      info: 'Quam molestiae adipisci quas ipsa. Sint culpa quas repellat cum doloremque aut officia. Sed voluptas maxime perspiciatis doloremque. Impedit laboriosam in modi rem enim maxime. Mollitia aut a itaque totam officia. Eaque omnis molestiae doloribus. Et tempore repellendus est sint id. Aliquid quas qui adipisci. Ea numquam consequuntur vel nemo. Autem repellat nulla fuga animi eligendi non. Voluptate enim blanditiis. Temporibus rem itaque. Rem aliquam excepturi odit aperiam porro aspernatur ad. Odio dolore alias sint autem quae repellat voluptatibus autem. Sequi aut ea corporis aut aliquam aut distinctio ipsam. Accusantium dolorum rerum provident. Rem et iusto impedit numquam. Et quos expedita est sed. Et officiis et eum quisquam repellendus facilis. Quod excepturi quidem ipsam animi enim. Id voluptas natus molestias omnis beatae quibusdam. Omnis sequi qui eum ut suscipit ut. Possimus enim iure natus. Sed necessitatibus sequi. Qui sint sapiente autem voluptatem tempore vel iste. Iusto corporis sunt magni expedita itaque. Ab quasi qui id aut et. Sequi est debitis molestiae. Consequatur magnam qui quia. Doloribus veniam ut qui corporis. Quia occaecati sint nihil est et maiores. Voluptatem quibusdam ullam laboriosam voluptas et. Et voluptatem ad dolores. Reprehenderit distinctio odit est molestiae. Quia expedita a voluptas et sunt. Nihil dolor eos ullam eos asperiores repellendus. Iure earum molestias ut. Fugit asperiores ut ipsam et ut molestiae. Veniam eveniet minus exercitationem quis vel. Aperiam minima aut cum voluptatem saepe veniam. Magnam aliquid ut aut. Vitae ab dolorem ut eos nobis dolore. Vel consequatur accusantium. Velit maiores non velit a distinctio. Et atque doloribus autem doloremque itaque voluptas.',
      location: 'San Francisco',
      department: 'Engineering',
    },
    {
      id: 'uV8fMxN5sSbZpA6oD7hY',
      createdAt: 1647268722006,
      orgId: 'jM4nLbH8lWzAoUv1RpQe',
      position: 'Sales Manager',
      info: 'Minus adipisci corrupti aut. Quas id id est possimus aut doloremque. Est sequi sapiente voluptates aliquid quidem nihil. Non necessitatibus odit omnis. Alias veniam est placeat. Iste autem consectetur tenetur ipsum. Eum minus et. Sit consequatur qui voluptatibus nisi numquam laboriosam. Qui est libero eaque. Deleniti et et culpa ipsa. F',
      location: 'Frankfurt',
      department: 'Development',
    },
    {
      id: 'aR9vGkW4yNtCxL6fQ2jI',
      createdAt: 1647153369147,
      orgId: 'jM4nLbH8lWzAoUv1RpQe',
      position: 'Marketing Analyst',
      info: 'Sit et quisquam eveniet aliquid voluptatem dolores. Voluptatem dolores eaque. Commodi sint incidunt quibusdam et illum perspiciatis dignissimos sit. Quod excepturi consequuntur qui asperiores dignissimos. Aut enim quia nemo et dolore iste. Voluptas et eum autem corporis eligendi corrupti harum. Sed earum soluta officiis fuga. Doloremque cupiditate aliquam omnis. Nam iste doloremque illum saepe nobis. Rerum distinctio id alias non sed. Nesciunt officiis nisi. Molestiae qui suscipit est. Quam iure sit ut molestias modi. Accusantium impedit numquam et et culpa voluptas doloremque consequatur. Sint aut laudantium. Voluptas commodi eos. Dolorem eos quae vel mollitia sit est. Ea minus repellendus. Quo soluta autem ullam reiciendis corporis. Quae labore incidunt voluptates velit ea quia architecto magnam. Harum asperiores molestiae blanditiis magnam. Aut cumque quisquam. Doloremque vel magni. Accusamus nobis illo sunt iure. Sequi excepturi et accusantium impedit animi dolor. Sit velit qui. Nam impedit cumque in voluptas sunt. Ut aliquid architecto et. Error ut ab explicabo nihil. Dolore autem provident architecto voluptatum est voluptatum. Et sint optio sed. Et tempore autem molestias illo illum.',
      location: 'New York',
      department: 'Marketing',
    },
  ],
};

export const getJobs = () => data.jobs;

export const getOrg = async (id: string) => {
  return Promise.resolve(
    data.organizations.find((org) => org.id === id)
  );
};

export const getJobsByOrgId = async (orgId: string) => {
  return Promise.resolve(
    data.jobs.filter((job) => job.orgId === orgId)
  );
};

export const getJobById = async (id: string) => {
  return Promise.resolve(
    data.jobs.find((job) => job.id === id)
  );
};

type User = {
  id: string;
  createdAt: number;
  email: string;
  password: string;
  orgId: string;
};

export const useUser = () => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: User | null;
  }>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    Promise.resolve().then(() =>
      setState({
        isLoading: false,
        data: data.users[0],
      })
    );
  });

  return state;
};

export const useJobs = (orgId: string) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: Job[];
  }>({
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    getJobsByOrgId(orgId).then((jobs) =>
      setState({
        isLoading: false,
        data: jobs,
      })
    );
  }, [orgId]);

  return state;
};

export default data;
