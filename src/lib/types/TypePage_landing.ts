import * as Contentful from 'contentful';
import { TypeComponent_heroFields } from './TypeComponent_hero';
import { TypeComponent_sectionFields } from './TypeComponent_section';
import { TypeComponent_navFields } from './TypeComponent_nav';

export interface TypePage_landingFields {
  name: Contentful.EntryFields.Symbol;
  hero: Contentful.Entry<TypeComponent_heroFields>;
  nav: Contentful.Entry<TypeComponent_navFields>;
  sections: Contentful.Entry<TypeComponent_sectionFields>[];
}

export type TypePage_landing = Contentful.Entry<TypePage_landingFields>;
