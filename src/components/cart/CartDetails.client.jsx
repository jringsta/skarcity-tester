import {useRef, useEffect, useState} from 'react';
import {useScroll} from 'react-use';
import {
  Link,
  useCart,
  CartLineProvider,
  CartShopPayButton,
  Money,
} from '@shopify/hydrogen';

import {Button, Text, CartLineItem, CartEmpty} from '~/components';

export function CartDetails({layout, onClose}) {
  const [productLimit, setProductLimit] = useState({});
  const [limitReached, setLimitReached] = useState(false);
  const [breakingLimitRules, setBreakingLimitRules] = useState(false);

  const {lines} = useCart();

  useEffect(() => {
    if (lines.length > 0) {
      const productQuantity = {};
      lines.map((product) => {
        productQuantity[product.merchandise.image.id]
          ? (productQuantity[product.merchandise.image.id] =
              productQuantity[product.merchandise.image.id] + product.quantity)
          : (productQuantity[product.merchandise.image.id] = product.quantity);
      });
      setProductLimit(productQuantity);
    } else {
      setProductLimit({});
    }
  }, [lines]);

  useEffect(() => {
    Object.values(productLimit).forEach((num) => {
      if (num > 3) {
        setBreakingLimitRules(true);
        return;
      }
      setBreakingLimitRules(false);
    });
  }, [productLimit]);

  const scrollRef = useRef(null);
  const {y} = useScroll(scrollRef);

  if (lines.length === 0) {
    return <CartEmpty onClose={onClose} layout={layout} />;
  }

  const container = {
    drawer: 'grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]',
    page: 'pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12',
  };

  const content = {
    drawer: 'px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12',
    page: 'flex-grow md:translate-y-4',
  };

  const summary = {
    drawer: 'grid gap-6 p-6 border-t md:px-12',
    page: 'sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full',
  };

  return (
    <form className={container[layout]}>
      <section
        ref={scrollRef}
        aria-labelledby="cart-contents"
        className={`text-color,${content[layout]} ${y > 0 ? 'border-t' : ''}`}
      >
        <ul className="grid gap-6 md:gap-10">
          {lines.map((line) => {
            return (
              <CartLineProvider key={line.id} line={line}>
                <CartLineItem
                  productLimit={productLimit}
                  limitReached={limitReached}
                  setLimitReached={setLimitReached}
                />
              </CartLineProvider>
            );
          })}
        </ul>
      </section>
      {!breakingLimitRules && (
        <div className={`${summary[layout]}, cart-bottom`}>
          <OrderSummary />
          <CartCheckoutActions />
        </div>
      )}
    </form>
  );
}

function CartCheckoutActions() {
  const {checkoutUrl} = useCart();
  return (
    <>
      <div className="grid gap-4 text-color">
        {checkoutUrl ? (
          <Link to={checkoutUrl} prefetch={false} target="_self">
            <Button as="span" width="full" className="cart-button">
              Continue to Checkout
            </Button>
          </Link>
        ) : null}
        <CartShopPayButton />
      </div>
    </>
  );
}

function OrderSummary() {
  const {cost} = useCart();
  return (
    <>
      <dl className="grid">
        <div className="flex items-center justify-between font-medium text-color">
          <Text as="dt">Subtotal</Text>
          <Text as="dd">
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </Text>
        </div>
      </dl>
    </>
  );
}
