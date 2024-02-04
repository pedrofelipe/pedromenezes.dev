import React, { CSSProperties, useMemo, useCallback } from 'react'

export type JsonObject = { [key: string]: JsonObject } | string | object | number | boolean | null | undefined

interface JsonStyle {
  booleanStyle?: CSSProperties
  braceStyle?: CSSProperties
  bracketStyle?: CSSProperties
  commaStyle?: CSSProperties
  falseStyle?: CSSProperties
  linkStyle?: CSSProperties
  nullStyle?: CSSProperties
  numberStyle?: CSSProperties
  propertyStyle?: CSSProperties
  stringStyle?: CSSProperties
  style?: CSSProperties
  tabSpaceStyle?: CSSProperties
  trueStyle?: CSSProperties
}

interface JsonClassName {
  booleanClassName?: string
  braceClassName?: string
  bracketClassName?: string
  className?: string
  commaClassName?: string
  falseClassName?: string
  linkClassName?: string
  nullClassName?: string
  numberClassName?: string
  propertyClassName?: string
  stringClassName?: string
  tabSpaceClassName?: string
  trueClassName?: string
}

export interface JsonFormatterProps {
  /**
   * The JSON data to be formatted. The value could be a stringified string or a valid json object.
   */
  json: JsonObject
  /**
   * Optional class names for different elements of the JSON formatter.
   */
  jsonClassName?: JsonClassName
  /**
   * Optional inline styles for different elements of the JSON formatter.
   */
  jsonStyle?: JsonStyle
  /**
   * The width of the tab space. Default is 2.
   */
  tabWith?: number
}

/**
 * A React component that formats and displays JSON data in a styled manner.
 */
export function JsonFormatter({
  json,
  jsonClassName: {
    booleanClassName = '',
    braceClassName = '',
    bracketClassName = '',
    className = '',
    commaClassName = '',
    falseClassName = '',
    linkClassName = '',
    nullClassName = '',
    numberClassName = '',
    propertyClassName = '',
    stringClassName = '',
    tabSpaceClassName = '',
    trueClassName = ''
  } = {},
  jsonStyle: {
    booleanStyle = {},
    braceStyle = {},
    bracketStyle = {},
    commaStyle = {},
    falseStyle = {},
    linkStyle = {},
    nullStyle = {},
    numberStyle = {},
    propertyStyle = {},
    stringStyle = {},
    style = {},
    tabSpaceStyle = {},
    trueStyle = {}
  } = {},
  tabWith = 2
}: JsonFormatterProps): JSX.Element {
  const jsonObject: JsonObject = useMemo(() => {
    if (typeof json === 'string') {
      try {
        return JSON.parse(json)
      } catch (error) {
        return json
      }
    }
    return json
  }, [json])

  const repeatTabSpace = useCallback(
    (times: number): JSX.Element => (
      <span
        className={tabSpaceClassName}
        style={tabSpaceStyle}>
        {'\xa0'.repeat(tabWith * times)}
      </span>
    ),
    [tabSpaceClassName, tabSpaceStyle, tabWith]
  )

  const categorize = useCallback(
    (data: JsonObject, tabSpaceRepeatTimes: number): JSX.Element | JSX.Element[] => {
      switch (Object.prototype.toString.call(data)) {
        case '[object Number]': {
          return (
            <span
              className={numberClassName}
              style={numberStyle}>
              {data as number}
            </span>
          )
        }

        case '[object String]': {
          const isUrl = (url: string): boolean => {
            const urlRegex = new RegExp(
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/giy
            )

            return !!url.match(urlRegex)
          }

          const dataJSX = isUrl(data as string) ? (
            <span
              className={stringClassName}
              style={stringStyle}>
              {`"`}
              <a
                className={linkClassName}
                style={{ ...linkStyle }}
                href={data as string}
                target="_blank"
                rel="noopener noreferrer">
                {data as string}
              </a>
              {`"`}
            </span>
          ) : (
            <span
              className={stringClassName}
              style={stringStyle}>{`"${data}"`}</span>
          )

          return dataJSX
        }

        case '[object Boolean]': {
          const dataJSX = data ? (
            <span
              className={`${booleanClassName} ${trueClassName}`}
              style={{ ...booleanStyle, ...trueStyle }}>
              true
            </span>
          ) : (
            <span
              className={`${booleanClassName} ${falseClassName}`}
              style={{ ...booleanStyle, ...falseStyle }}>
              false
            </span>
          )
          return dataJSX
        }

        case '[object Object]': {
          return (
            <React.Fragment>
              <span
                className={braceClassName}
                style={braceStyle}>
                {'{'}
              </span>
              <br />
              {Object.entries(data as Record<string, JsonObject>).map(([key, value], index, list) => (
                <React.Fragment key={index}>
                  {repeatTabSpace(tabSpaceRepeatTimes + 1)}
                  <span
                    className={propertyClassName}
                    style={propertyStyle}>{`"${key}": `}</span>
                  {categorize(value, tabSpaceRepeatTimes + 1)}
                  {index !== list.length - 1 && (
                    <span
                      className={commaClassName}
                      style={commaStyle}>
                      ,
                    </span>
                  )}
                  <br />
                </React.Fragment>
              ))}
              {repeatTabSpace(tabSpaceRepeatTimes)}
              <span
                className={braceClassName}
                style={braceStyle}>
                {'}'}
              </span>
            </React.Fragment>
          )
        }

        case '[object Array]': {
          return (
            <React.Fragment>
              <span
                className={bracketClassName}
                style={bracketStyle}>
                [
              </span>
              <br />
              {(data as unknown as JsonObject[]).map((value, index, list) => (
                <React.Fragment key={index}>
                  {repeatTabSpace(tabSpaceRepeatTimes + 1)}
                  {categorize(value, tabSpaceRepeatTimes + 1)}
                  {index !== list.length - 1 && (
                    <span
                      className={commaClassName}
                      style={commaStyle}>
                      ,
                    </span>
                  )}
                  <br />
                </React.Fragment>
              ))}
              {repeatTabSpace(tabSpaceRepeatTimes)}
              <span
                className={bracketClassName}
                style={bracketStyle}>
                ]
              </span>
            </React.Fragment>
          )
        }

        case '[object Null]': {
          return (
            <span
              className={nullClassName}
              style={nullStyle}>
              null
            </span>
          )
        }

        default:
          return <span>type error</span>
      }
    },
    [
      booleanClassName,
      booleanStyle,
      braceClassName,
      braceStyle,
      bracketClassName,
      bracketStyle,
      commaClassName,
      commaStyle,
      falseClassName,
      falseStyle,
      linkClassName,
      linkStyle,
      nullClassName,
      nullStyle,
      numberClassName,
      numberStyle,
      propertyClassName,
      propertyStyle,
      repeatTabSpace,
      stringClassName,
      stringStyle,
      trueClassName,
      trueStyle
    ]
  )

  const result = useMemo(() => categorize(jsonObject, 0), [categorize, jsonObject])

  return (
    <div
      className={className}
      style={style}>
      <div>{result}</div>
    </div>
  )
}
