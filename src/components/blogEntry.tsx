import React from "react"
import { Link } from "gatsby"
import { IProps } from "./common/props"

interface IBlogEntry extends IProps {
  slug: string;
  title: string;
  date: string;
  description: string;
  timeToRead: string;
}

const blogEntry = ({slug, title, date, description, timeToRead, className}: IBlogEntry) => {
  return (
    <div className={className}>
      <Link to={slug}>
        <h3 className="font-bold font-rubik text-3xl text-secondary-300">
          {title}
        </h3>
        <div className="font-karla text-surface-300 flex">
          <p>{date}&nbsp;&#x02235;</p>
          <p>&nbsp;{timeToRead}</p>
        </div>
        <p className="text-surface-700">
          {description}
        </p>
      </Link>
    </div>
  )
}

export default blogEntry
