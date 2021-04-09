/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import { isPreviewEnabled } from 'lib/preview';
import { withLocale } from 'lib/translations';
import { PageLink } from 'components/page-link';
import { PageHead } from 'components/page-head';
import { PageContentTypes } from 'lib/constants';
import { getPage, getPagesOfType } from 'lib/api';
import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypePage, TypePage_landing } from 'lib/types';

const NoBodyAlert = () => {
  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
      <span className="font-bold block">Oops!</span>
      <span>Looks like the article content is missing, please add one and try again.</span>
    </div>
  );
};

type ArticleProps = {
  page: TypePage;
};

export default function Article({ page }: ArticleProps) {
  const router = useRouter();
  const content = page?.fields.content as TypePage_landing;

  if (!router.isFallback && !content) {
    return <ErrorPage statusCode={404} />;
  }

  const { sections = [], nav } = content?.fields || {};

  return (
    <>
      <PageHead page={page} />
      <BlockRenderer block={nav} />
      <BlockRenderer block={sections} />
    </>
  );
}

export const getServerSideProps = withLocale(async (locale, { params, query }) => {
  const slug = String(params.slug);
  const preview = isPreviewEnabled(query);
  const pageContentType = PageContentTypes.LandingPage;
  const [page, otherPages] = await Promise.all([
    getPage({ slug, preview, locale, pageContentType }),
    getPagesOfType({ preview, locale, pageContentType }),
  ]);

  return {
    props: { page, otherPages },
  };
});
