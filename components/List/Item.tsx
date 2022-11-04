import dayjs from "dayjs";
import Link from "next/link";
import { ROUTES_PATH } from "../../constants/routes";
import { DATE_FORMAT, DATE_TIME_FORMAT } from "../../constants/time";

export interface IItemProps {
  id: string | number;
  title: string;
  tag: string[];
  description?: string;
  date: string;
  size?: "l" | "m" | "s";
}

const Item = (props: IItemProps) => {
  const { id, title, description, date, tag, size = "m" } = props;
  return (
    <li className="py-4">
      <div className="flex justify-between mb-1 break-all">
        <Link href={`${ROUTES_PATH.articles}/${id}`} className="shrink-1 truncate">
          {title}
        </Link>
        <div className="shrink-0">
          {dayjs(date).format(size === "s" ? DATE_FORMAT : DATE_TIME_FORMAT)}
        </div>
      </div>
      {description && size === "l" && <div className="text-sm text-gray-500">{description}</div>}
    </li>
  );
};

export default Item;
