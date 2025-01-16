import type { CollectionEntry } from "astro:content";
import PostLink from "./PostLink.astro";

type Props = {
  writings: CollectionEntry<"writings">[];
};
type writingListInfo = {
  title: string;
  month: string;
  day: string;
  slug: string;
  description: string;
};

export default function WritingList({ writings }: Props) {
  const writingsByYear = Object.entries(
    writings.reduce((acc: Record<number, writingListInfo[]>, cur) => {
      const year = cur.data.date.getFullYear();
      const month = String(cur.data.date.getMonth()).padStart(2, "0");
      const day = String(cur.data.date.getDate()).padStart(2, "0");
      const title = cur.data.title;
      const slug = cur.id.split("/").pop() as string;
      const description = cur.data.description as string;

      if (acc[year]) {
        acc[year].push({ title, month, day, slug, description });
      } else {
        acc[year] = [{ title, month, day, slug, description }];
      }

      return acc;
    }, {}),
  );

  return (
    <div className="flex flex-col gap-7 sm:gap-4">
      {writingsByYear.map(([year, writings]) =>
        writings.map((writing, index) => {
          return (
            <div className="flex justify-between w-full items-start">
              <div className="basis-1/5 sm:py-3 hidden sm:block">
                {index === 0 && <span>{year}</span>}
              </div>
              <PostLink
                link={writing.slug}
                title={writing.title}
                description={writing.description}
              />
            </div>
          );
        }),
      )}
    </div>
  );
}
