import * as React from "react";
import { PostPreviewType } from "../PostList/PostList";

export const RelatedPosts: React.SFC<{ posts: PostPreviewType[] }> = ({ posts }) => {
  const Posts = () => (
    <div className="related_posts">
      <h2>Related Posts</h2>

      <section className="related_posts__list">
        {posts.map((post, index) => {
          return (
            <article key={index}>
               <h3>{ post.title }</h3>
            </article>
          );
        })}
      </section>
    </div>
  );

  return posts.length > 0 && posts[0].title && <Posts /> || null;
};