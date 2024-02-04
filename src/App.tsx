import JsonFormatter from 'react-json-formatter'

const resume = {
  name: 'Pedro Menezes',
  email: 'pedro(at)pedromenezes.dev',
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
  social: [
    {
      name: 'twitter',
      url: 'https://twitter.com/pedrofelipee'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pedrofelipem'
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
  technologies: ['javascript', 'css', 'typescript', 'html', 'nodejs', 'react', 'tailwindcss', 'vite', 'vitest']
}

export const App = () => (
  <main className="mx-auto flex min-h-dvh w-full items-center justify-center p-4 md:p-8">
    <JsonFormatter
      json={JSON.stringify(resume)}
      jsonClassName={{
        braceClassName: 'text-violet-200',
        bracketClassName: 'text-violet-200',
        nullClassName: 'text-zinc-400',
        propertyClassName: 'text-violet-400'
      }}
    />
  </main>
)
