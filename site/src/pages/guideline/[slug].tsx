import { readFile } from "node:fs/promises";
import path from "node:path";
import Head from "next/head";
import { Inter } from "next/font/google";
import graymatter from "gray-matter";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getGuidelinesRoot } from "@/utils/getGuidelinesRoot";
import Link from "next/link";
import { isArray } from "lodash";
import ReactMarkdown from "react-markdown";
import { TopNav } from "@/components/TopNav";
import { getTitleFromSlug } from "@/utils/getTitleFromSlug";
import { Layout } from "@/components/Layout";
import { css } from "@emotion/react";
import { components } from "@/components/markdown";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  slug: string;
  content: string;
  data: Record<string, unknown>;
}

const debugCss = css`
  max-width: 100%;
  overflow: auto;
  font-size: 12px;
`;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
  res,
}) => {
  if (!params?.slug) {
    throw new Error(`Route is missing [slug]`);
  }

  const slug = isArray(params.slug) ? params.slug[0] : params.slug;

  const rootDir = getGuidelinesRoot();
  const filename = path.join(rootDir, `${slug}.md`);
  const contents = await readFile(filename, "utf-8");
  const markdown = graymatter(contents);

  return {
    props: {
      slug,
      content: markdown.content,
      data: markdown.data,
    },
  };
};

export default function Guideline(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  const title = getTitleFromSlug(props.slug);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.content} />
      </Head>

      <Layout>
        <TopNav hasHomeLink title={title} />

        <main>
          <div>
            <ReactMarkdown components={components}>
              {props.content}
            </ReactMarkdown>
          </div>
        </main>

        <Footer />
      </Layout>
    </>
  );
}
