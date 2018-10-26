// custom dependencies
import AOS from 'aos';
import svgInjector from 'svg-injector-2';
import slick from 'slick-carousel';
import { getEvents } from './aclib/Granicus';

const deps = {
  AOS: AOS,
  svgInjector: svgInjector,
  slickCarousel: slick,
  Granicus: getEvents,
};

export default deps;
