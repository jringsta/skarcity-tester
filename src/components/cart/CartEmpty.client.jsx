import {useRef} from 'react';
import {useScroll} from 'react-use';
import {Text} from '~/components';

export function CartEmpty({layout = 'drawer'}) {
  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);

  const container = {
    drawer: `grid content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12 ${
      y > 0 ? 'border-t' : ''
    }`,
    page: `grid pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`,
  };

  return (
    <div ref={scrollRef} className={container[layout]}>
      <section className="grid gap-6">
        <div className="cart-text">Your cart is currently empty.</div>
      </section>
    </div>
  );
}
