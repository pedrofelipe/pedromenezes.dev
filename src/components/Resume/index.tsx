import { PrettyJson } from '@/components/PrettyJson'

const resume = {
  name: 'Pedro Menezes',
  email: 'pedro(at)pedromenezes.dev',
  about: '',
  languages: [
    {
      language: 'Portuguese',
      level: 'Native'
    },
    {
      language: 'English',
      level: 'Bilingual proficiency'
    }
  ],
  experience: [
    {
      company: 'Cloudflare',
      startDate: '2023-01',
      endDate: null,
      title: 'Frontend Engineer',
      location: 'Porto, Portugal'
    },
    {
      company: 'Barkyn',
      startDate: '2021-01',
      endDate: '2023-01',
      title: 'Frontend Engineer',
      location: 'Porto, Portugal'
    },
    {
      company: 'kununu/New Work SE',
      startDate: '2018-02',
      endDate: '2021-01',
      title: 'Frontend Engineer',
      location: ['Porto, Portugal', 'Vienna, Austria']
    },
    {
      company: 'Codeminer 42',
      startDate: '2015-05',
      endDate: '2018-02',
      title: 'Frontend Engineer',
      location: ['Natal, Brazil', 'São Paulo, Brazil', 'San Francisco, US']
    }
  ],
  technologies: [
    'javascript',
    'typescript',
    'html',
    'css',
    'node.js',
    'react',
    'vite',
    'remix',
    'next.js',
    'tailwindcss'
  ],
  social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/pedrofelipee'
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/pedrofelipem'
    },
    {
      name: 'instagram',
      url: 'https://instagram.com/pedrofelipem'
    },
    {
      name: 'last.fm',
      url: 'https://last.fm/user/pedro-felipe'
    }
  ]
}

export const Resume = () => <PrettyJson json={resume} />