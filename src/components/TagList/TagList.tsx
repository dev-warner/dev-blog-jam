import Chip from "@material-ui/core/Chip";
import * as React from "react";

import "./tagList.scss";

type TagProps = { tags?: string [] };

export const TagList: React.SFC<TagProps> = ({ tags = [] }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => <Chip label={ tag } className="tag-list__tag" variant="outlined" key={ index }/>)}
    </div>
  );
};