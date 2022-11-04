import Link from "next/link";
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
  return (
    <Card className="content-width mx-auto" title="文章列表">
      <List list={props.list} />
    </Card>
  );
};

export default Articles;
