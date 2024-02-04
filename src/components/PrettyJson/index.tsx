import { JsonFormatter, type JsonObject } from './JsonFormatter'

type PrettyJsonProps = {
  json: JsonObject
}

export const PrettyJson = ({ json }: PrettyJsonProps) => (
  <main className="mx-auto flex min-h-dvh w-full max-w-xl items-center justify-center p-4 md:p-8">
    <JsonFormatter
      json={JSON.stringify(json)}
      jsonClassName={{
        braceClassName: 'text-violet-200/55',
        bracketClassName: 'text-violet-200/55',
        commaClassName: 'text-violet-200/55',
        linkClassName: 'underline underline-offset-4 hover:underline-text-violet-300 hover:text-violet-300',
        nullClassName: 'text-zinc-400/80',
        propertyClassName: 'text-violet-400'
      }}
    />
  </main>
)
