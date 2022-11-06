import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../components/Card";
import List from "../../components/List";
import all from "../../content/all.json";

export async function getStaticProps() {
  // const res = await fse.readFile(path.join(__dirname, "../../content"), "utf8");
  return Promise.resolve({
    props: {
      list: all,
      // res,
    },
  });
}

const Articles = (props: any) => {
  let { list } = props;
  let title = "文章列表";

  const router = useRouter();
  const {
    query: { tag },
  } = router;

  if (tag) {
    list = list.filter((i) => i.tag.includes(tag));
    title = tag;
  }

  return (
    <Card
      className="content-width mx-auto mt-4"
      title={title}
      extra={<div className="text-gray-400">共{list.length}篇</div>}
    >
      <List list={list} />
    </Card>
  );
};

export default Articles;
