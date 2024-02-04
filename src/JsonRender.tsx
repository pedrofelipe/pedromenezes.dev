import JsonFormatter from 'react-json-formatter'

type JsonRenderProps = {
  data: object
}

export const JsonRender = ({ data }: JsonRenderProps) => (
  <main className="mx-auto flex min-h-dvh w-full max-w-xl items-center justify-center p-4 md:p-8">
    <JsonFormatter
      json={JSON.stringify(data)}
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
