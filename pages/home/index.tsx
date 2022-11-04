import Link from "next/link";
import Card from "../../components/Card";
import ImageSwiper from "../../components/ImageSwiper";
import List from "../../components/List";
import all from "../../content/all.json";

export async function getStaticProps() {
  // const res = await fse.readFile(path.join(__dirname, "../../content"), "utf8");
  return Promise.resolve({
    props: {
      list: all,
      // res,IProps
    },
  });
}

const parse = (tag) => {
  return all.filter((i) => i.tag.includes("热门"));
};

const Home = () => {
  return (
    <div>
      <ImageSwiper />
      <div className="content-width mx-auto my-4">
        <div className="w-full grid grid-cols-6 gap-4">
          <div className="col-span-4">
            <Card title="热门课程" moreLink="/articles">
              <List list={parse("热门")} />
            </Card>
          </div>
          <div className="col-span-2">
            <Card title="职业教育" moreLink="/articles">
              <List list={parse("热门")} size="s" />
            </Card>
          </div>
          <div className="col-span-3">
            <Card title="技能培训" moreLink="/articles">
              <List list={parse("热门")} />
            </Card>
          </div>
          <div className="col-span-3">
            <Card title="专家访谈" moreLink="/articles">
              <List list={parse("热门")} />
            </Card>
          </div>
          <div className="col-span-2">
            <Card title="技能培训" moreLink="/articles">
              <List list={parse("热门")} />
            </Card>
          </div>
          <div className="col-span-2">
            <Card title="专家访谈" moreLink="/articles">
              <List list={parse("热门")} />
            </Card>
          </div>
          <div className="col-span-2">
            <Card title="专家访谈" moreLink="/articles">
              <List list={parse("热门")} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
