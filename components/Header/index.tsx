import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import cx from "classnames";

const navList = [
  {
    href: "/home",
    title: "首页",
  },
  {
    href: "/articles",
    title: "文章",
  },
  {
    href: "/about",
    title: "关于我们",
  },
];

const Header = () => {
  const router = useRouter();
  const { asPath, query } = useRouter();

  return (
    <>
      <Head>
        <title>高职教育</title>
        <meta name="description" content="专业职业教育、技能培训、互联网教育及企业咨询等课程" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white">
        <div className="content-width mx-auto h-24 flex items-center justify-between shrink-0">
          <h1 className="text-red-600 text-4xl font-bold tracking-widest">
            高职
            <span className="text-stone-800">教育</span>
          </h1>
          <h2 className="text-sm">
            <p>专业职业教育、技能培训、互联网教育及企业咨询等课程</p>
            <p>
              合作咨询热线：<span className="text-xl">13333333333</span>
            </p>
          </h2>
        </div>
      </header>
      <nav className="h-12 bg-rose-600">
        <ul className="h-12 content-width mx-auto text-lg line-height-h-12 flex">
          {navList.map((nav) => {
            return (
              <li
                key={nav.title}
                className={cx("px-8 text-rose-50 hover:bg-rose-700 ", {
                  "bg-rose-800": asPath.startsWith(nav.href),
                })}
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
