import Link from "next/link";
import { ReactNode } from "react";
import cx from "classnames";

interface IProps {
  children: string | ReactNode;
  title: string | ReactNode;
  extra: string | ReactNode;
  moreLink?: string;
  className?: string;
}

const Card = (props: IProps) => {
  const { title, moreLink, children, className, extra } = props;
  return (
    <div className={cx("border rounded-xl shadow-md border-gray-200 p-4 bg-white", className)}>
      <div className="flex justify-between h-10 text-base pb-3 border-b border-gray-300">
        <div className="h-full relative ">
          <div className="base-background-color w-2 h-full absolute"></div>
          <div className="ml-3 base-text-color">{title}</div>
        </div>
        {extra && extra}
        {moreLink && (
          <div className="text-slate-500">
            <Link href={moreLink}>更多</Link>
          </div>
        )}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Card;
