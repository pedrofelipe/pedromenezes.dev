import { PrettyJson } from '@/components/PrettyJson'

type ErrorProps = {
  statusCode: number
  error: string
}

export const Error = ({ statusCode, error }: ErrorProps) => (
  <PrettyJson
    json={{
      statusCode,
      error
    }}
  />
)
