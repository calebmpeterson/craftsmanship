import { readdir } from "node:fs/promises";
import path from "node:path";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getGuidelinesRoot } from "@/utils/getGuidelinesRoot";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { startCase } from "lodash";
import { getTitleFromSlug } from "@/utils/getTitleFromSlug";
import { Layout } from "@/components/Layout";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  slugs: string[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const rootDir = getGuidelinesRoot();
  const filenames = await readdir(rootDir);
  const guidelines = filenames.filter((filename) => filename.endsWith(".md"));
  const slugs = guidelines.map((filename) => path.basename(filename, ".md"));

  console.log({ rootDir, guidelines, slugs });

  return {
    props: {
      slugs,
    },
  };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <>
      <Head>
        <title>Coding Guidelines</title>
        <meta
          name="description"
          content="Good practices for writing maintainable software with a focus on frontend development."
        />
      </Head>

      <Layout>
        <TopNav />
        <main>
          <div>
            <ul>
              {props.slugs.map((slug) => (
                <li key={slug}>
                  <Link href={`/guideline/${slug}`}>
                    {getTitleFromSlug(slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <Footer />
      </Layout>
    </>
  );
}
