import Link from "next/link";
import Card from "../../components/Card";
import ImageSwiper from "../../components/ImageSwiper";
import List from "../../components/List";
import all from "../../content/all.json";
import { homeTagConfig } from "../../constants/tag";

export async function getStaticProps() {
  // const res = await fse.readFile(path.join(__dirname, "../../content"), "utf8");
  return Promise.resolve({
    props: {
      list: all,
      // res,IProps
    },
  });
}

const parse = (list: any, tag: string) => {
  return all.filter((i) => i.tag.includes(tag));
};

const Home = (props: any) => {
  const { list } = props;

  return (
    <div className="span-xxx">
      <ImageSwiper />
      <div className="content-width mx-auto my-4">
        <div className="w-full grid grid-cols-6 gap-4">
          {homeTagConfig.map((i) => {
            const { name, href, span } = i;
            return (
              <div key={name} className={`col-span-${span}`}>
                <Card title={name} moreLink={href}>
                  <List list={parse(list, name) as any} max={3} />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
