import type { Entry } from 'contentful';
import _ from 'lodash';
import React from 'react';
import { ComponentContentTypes, PageContentType, PageContentTypes } from '../../lib/constants';
import { HelpCenterArticle } from './help-center-article';
import { Hero } from './hero';
import { Image } from './image';
import { Nav } from './nav';
import { PopularPosts } from './popular-posts';
import { Post } from './post';
import { RecentPosts } from './recent-posts';
import { Section } from './section';
import { Text } from './text';
import { TopNav } from './topnav';
import { Video } from './video';

type BlockRendererProps = {
  block: any;
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, 'sys.contentType.sys.id');
  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

const fromPage = (fieldName: string) => (parent: Entry<unknown>) => (
  <BlockRenderer block={{ ...parent?.fields[fieldName], parent }} />
);

const ContentTypeMap = {
  [ComponentContentTypes.Hero]: Hero,
  [ComponentContentTypes.Section]: Section,
  [PageContentTypes.HelpDeskArticle]: HelpCenterArticle,
  [PageContentType]: fromPage('content'),
  [ComponentContentTypes.Text]: Text,
  [ComponentContentTypes.Image]: Image,
  [ComponentContentTypes.Video]: Video,
  [ComponentContentTypes.Post]: Post,
  [ComponentContentTypes.Nav]: Nav,
  [ComponentContentTypes.TopNav]: TopNav,
  [ComponentContentTypes.RecentPosts]: RecentPosts,
  [ComponentContentTypes.PopularPosts]: PopularPosts,
};

export { BlockRenderer };
