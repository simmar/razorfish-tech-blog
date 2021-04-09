/* eslint-disable @typescript-eslint/camelcase */
// import { isRichText, renderRichText } from 'lib/rich-text';
import { TypeComponent_hero } from 'lib/types';
import { SliderHero } from './hero-slider';
import { PostMiniV1 } from './posts/postMiniV1';
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
                {fields.posts.map((item, index) => (
                  <PostMiniV1 post={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
