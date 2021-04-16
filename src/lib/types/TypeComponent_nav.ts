import * as Contentful from 'contentful';

export interface TypeComponent_navFields {
  title: Contentful.EntryFields.Symbol;
  date: Contentful.EntryFields.Symbol;
  navItems?: Contentful.Entry<any>[];
  topNavItems?: Contentful.Entry<any>[];
}

export type TypeComponent_nav = Contentful.Entry<TypeComponent_navFields>;
