import JsonFormatter from 'react-json-formatter'

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
  workExperience: [
    {
      company: 'Cloudflare',
      startDate: '2023-01',
      endDate: null,
      title: 'Frontend Engineer'
    },
    {
      company: 'Barkyn',
      startDate: '2021-01',
      endDate: '2023-01',
      title: 'Frontend Engineer'
    },
    {
      company: 'kununu/New Work SE',
      startDate: '2018-02',
      endDate: '2021-01',
      title: 'Frontend Engineer'
    },
    {
      company: 'Codeminer 42',
      startDate: '2015-05',
      endDate: '2018-02',
      title: 'Frontend Engineer'
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
      url: 'https://www.linkedin.com/in/pedrofelipem'
    }
  ]
}

export const App = () => (
  <main className="mx-auto flex min-h-dvh w-full max-w-xl items-center justify-center p-4 md:p-8">
    <JsonFormatter
      json={JSON.stringify(resume)}
      jsonClassName={{
        braceClassName: 'text-violet-200/55',
        bracketClassName: 'text-violet-200/55',
        commaClassName: 'text-violet-200/55',
        nullClassName: 'text-zinc-400/80',
        propertyClassName: 'text-violet-400'
      }}
    />
  </main>
)
