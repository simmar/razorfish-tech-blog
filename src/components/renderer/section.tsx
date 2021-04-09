/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { BlockRenderer } from 'components/renderer/block-renderer';
import { TypeComponent_section } from 'lib/types';

const Column = ({ column }: { column: unknown }) => {
  return <BlockRenderer block={column} />;
};

export function Section(section: TypeComponent_section) {
  const { columns } = section.fields;

  if (!columns) {
    return null;
  }

  return (
    <section className="pt-0">
        <div className="popular__section-news">
          <div className="container">
            <div className="flex flex-row flex-wrap lg:px-4">
              {columns.map((column, index) => (
                <Column key={index} column={column} />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
