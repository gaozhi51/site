import ReactMarkdown from "react-markdown";
import { DATE_TIME_FORMAT } from "../../../constants/time";
import all from "../../../content/all.json";
import dayjs from "dayjs";
import remarkGfm from "remark-gfm";
import Head from "next/head";

export async function getStaticPaths() {
  return {
    paths: all.map((i) => ({
      params: {
        id: i.id,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
  const {
    params: { id },
  } = context;

  return {
    props: all.find((i) => i.id === id),
  };
}

const Article = (props: any) => {
  console.log(props);
  const { _content, title, date, description, keywords } = props;
  return (
    <>
      <Head>
        <title>{title}-高职教育</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="content-width mx-auto bg-white p-4">
        <h1>{title}</h1>
        <p className=" border-b border-gray-300 pb-4 text-gray-500">
          发表时间：{dayjs(date).format(DATE_TIME_FORMAT)}
        </p>
        <ReactMarkdown className="md-content" remarkPlugins={[remarkGfm]}>
          {_content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Article;
