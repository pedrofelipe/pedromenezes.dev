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
  technologies: ['javascript', 'css', 'typescript', 'html', 'node.js', 'react', 'tailwind css', 'vite', 'vitest']
}

export const App = () => (
  <main className="mx-auto flex min-h-dvh w-full items-center justify-center text-pretty break-words p-4 md:p-8">
    <JsonFormatter json={resume} />
  </main>
)
