import React from 'react'

type Items = {
  title?: string;
  component?: string | JSX.Element;
}

type Props = {
  items: Items[];
  css?: string;
  isDisplay?: boolean;
}

const GridToolsbar = (props: Props) => {
  return (
    <div className={`${props.css} toolsbar-grid mb-2 mx-2 px-3`}>
      <div className="flex flex-row gap-3 actions">
        {props.items.map((item, key) => (
          <div key={key} className={`flex flex-col items-center gap-0 py-1 item`}
            title={item.title}>
            {item.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridToolsbar