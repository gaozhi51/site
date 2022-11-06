import dayjs from "dayjs";
import { DATE_TIME_FORMAT } from "../../constants/time";
import Item, { IItemProps } from "./Item";
import cx from "classnames";

interface IProps {
  list: IItemProps[];
  /**
   * l 最大的
   * m 不展示description，但是日期是全的
   * s 只展示日期，不展示时间
   */
  size?: "l" | "m" | "s";
  max?: number;
}

const List = (props: IProps) => {
  const { list, size = "m", max = list.length } = props;
  return (
    <ul
      className={cx("list-none divide-y divide-dashed divide-slate-400", {
        "py-6": size === "l",
        "py-2": size === "s" || size === "m",
      })}
    >
      {list.slice(0, max).map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default List;
