import { Fragment } from "react";
import Link from 'next/link'


export default function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <a href="/news/next-js-is-great">Next js is A great framework</a>
        </li>
        <li>Something else</li>
      </ul>
    </Fragment>
  );
}
