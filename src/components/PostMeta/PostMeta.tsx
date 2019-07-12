import * as React from 'react';
import { TagList } from '../TagList/TagList';

import readingTime from 'reading-time';

const calculateReadingTime = body => {
  const { text } = readingTime(body);

  return text;
}


export const PostMeta = ({ tags, body }) => {
  return (
    <section className='post-list__meta'>
      { tags && <TagList tags={tags} /> }

      <div className='post-list__reading'>{ calculateReadingTime(body) }</div>
    </section>
  )
}