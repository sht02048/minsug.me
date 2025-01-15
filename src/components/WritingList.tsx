import type { CollectionEntry } from "astro:content";

type Props = {
  writings: CollectionEntry<"writings">[];
};
type writingListInfo = {
  title: string;
  month: string;
  day: string;
  slug: string;
};

export default function WritingList({ writings }: Props) {
  const writingsByYear = Object.entries(
    writings.reduce((acc: Record<number, writingListInfo[]>, cur) => {
      const year = cur.data.date.getFullYear();
      const month = String(cur.data.date.getMonth()).padStart(2, "0");
      const day = String(cur.data.date.getDate()).padStart(2, "0");
      const title = cur.data.title;
      const slug = cur.id.split("/").pop() as string;

      if (acc[year]) {
        acc[year].push({ title, month, day, slug });
      } else {
        acc[year] = [{ title, month, day, slug }];
      }

      return acc;
    }, {}),
  );

  return (
    <div className="flex flex-col">
      {writingsByYear.map(([year, writings]) =>
        writings.map((writing, index) => {
          return (
            <div className="flex justify-between w-full items-center">
              <div className="basis-1/5">
                {index === 0 && <span>{year}</span>}
              </div>
              <a
                className="flex basis-4/5 justify-between font-medium hover:bg-[#191918] sm:py-3 px-3 cursor-pointer"
                href={writing.slug}
              >
                <span>{writing.title}</span>
                <span className="text-secondary text-start min-w-16">{`${writing.month}. ${writing.day}.`}</span>
              </a>
            </div>
          );
        }),
      )}
    </div>
  );
}
