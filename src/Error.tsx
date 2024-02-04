import { JsonRender } from './JsonRender'

type ErrorProps = {
  statusCode: number
  error: string
}

export const Error = ({ statusCode, error }: ErrorProps) => (
  <JsonRender
    data={{
      statusCode,
      error
    }}
  />
)
