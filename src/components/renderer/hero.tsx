/* eslint-disable @typescript-eslint/camelcase */
// import { isRichText, renderRichText } from 'lib/rich-text';
import { TypeComponent_hero } from 'lib/types';
import { SliderHero } from './hero-slider';
import { Post } from './posts/post';
export const Hero = ({ fields }: TypeComponent_hero) => {
  return (
    <section>
      {/* Popular news  header*/}
      <div className="popular__news-header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 ">
              <SliderHero slider={fields.slider} />
            </div>
            <div className="col-md-4">
              <div className="popular__news-right">
                {/* Post Article */}
                <Post posts={fields.posts} />
                {/* Post Article */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
