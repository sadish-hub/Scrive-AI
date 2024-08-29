import mock from '../mock';
import { Chance } from 'chance';
import { sub } from 'date-fns';
import { uniqueId } from 'lodash';

const chance = new Chance();

export const ChatData = [
  {
    id: 1,
    name: 'Hackathon Admin',
    status: 'online',
    thumb: '/images/profile/user-10.jpg',
    recent: false,
    excerpt: 'Admin Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          {
            icon: '/images/chat/icon-adobe.svg',
            file: 'service-task.pdf',
            fileSize: '2MB',
          },
          {
            icon: '/images/chat/icon-chrome.svg',
            file: 'homepage-design.fig',
            fileSize: '3MB',
          },
          {
            icon: '/images/chat/icon-figma.svg',
            file: 'about-us.html',
            fileSize: '1KB',
          },
          {
            icon: '/images/chat/icon-javascript.svg',
            file: 'work-project.zip',
            fileSize: '20MB',
          },
          {
            icon: '/images/chat/icon-zip-folder.svg',
            file: 'custom.js',
            fileSize: '2MB',
          },
        ],
        id: uniqueId(),
      },
    ],
  },
];

mock.onGet('/api/data/chat/ChatData').reply(() => {
  return [200, ChatData];
});

export default ChatData;
