import { readdir } from "node:fs/promises";
import path from "node:path";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getGuidelinesRoot } from "@/utils/getGuidelinesRoot";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { startCase } from "lodash";
import { getTitleFromSlug } from "@/utils/getTitleFromSlug";
import { Layout } from "@/components/Layout";
import { Footer } from "@/components/Footer";
import { getGuidelinesSlugs } from "@/utils/getGuidelinesSlugs";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  slugs: string[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slugs = await getGuidelinesSlugs();

  return {
    props: {
      slugs,
    },
  };
};

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
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
