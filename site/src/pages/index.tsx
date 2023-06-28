import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { TopNav } from "@/components/TopNav";
import { getTitleFromSlug } from "@/utils/getTitleFromSlug";
import { Layout } from "@/components/Layout";
import { Footer } from "@/components/Footer";
import { getGuidelinesSlugs } from "@/utils/getGuidelinesSlugs";

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
