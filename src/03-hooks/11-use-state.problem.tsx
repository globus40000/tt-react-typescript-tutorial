import { useState } from "react";

interface ITag {
  id: number;
  value: string;
}

export const Tags = () => {
  const [tags, setTags] = useState<ITag[]>([]);
  return (
    <div>
      {tags.map((tag) => {
        return <div key={tag.id}>{tag.value}</div>;
      })}
      <button
        onClick={() => {
          setTags([
            ...tags,
            {
              id: new Date().getTime(),
              value: "New",
            },
          ]);
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
