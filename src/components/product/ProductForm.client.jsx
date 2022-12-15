import {useEffect, useCallback, useState} from 'react';

import {
  useProductOptions,
  isBrowser,
  useUrl,
  AddToCartButton,
  Money,
  useCart,
} from '@shopify/hydrogen';

import {ProductOptions} from '~/components';

export function ProductForm() {
  const {pathname, search} = useUrl();
  const [params, setParams] = useState(new URLSearchParams(search));

  const [selected, setSelected] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const [productLimit, setProductLimit] = useState({});
  const [limitReached, setLimitReached] = useState(false);

  const {options, setSelectedOption, selectedOptions, selectedVariant} =
    useProductOptions();

  const isOutOfStock = !selectedVariant?.availableForSale || false;
  const isOnSale =
    selectedVariant?.priceV2?.amount <
      selectedVariant?.compareAtPriceV2?.amount || false;

  const product = selectedVariant.image.id;

  useEffect(() => {
    if (params || !search) return;
    setParams(new URLSearchParams(search));
  }, [params, search]);

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
    if (productLimit[product] && productLimit[product] >= 3) {
      setLimitReached(true);
    } else {
      setLimitReached(false);
    }
  }, [productLimit]);

  useEffect(() => {
    options.map(({name, values}) => {
      if (!params) return;
      const currentValue = params.get(name.toLowerCase()) || null;

      if (currentValue) {
        const matchedValue = values.filter(
          (value) => encodeURIComponent(value.toLowerCase()) === currentValue,
        );
        setSelectedOption(name, matchedValue[0]);
      }

      if (values.length === 1)
        params.set(
          encodeURIComponent(name.toLowerCase()),
          encodeURIComponent(selectedOptions[name].toLowerCase()),
        ),
          window.history.replaceState(
            null,
            '',
            `${pathname}?${params.toString()}`,
          );
    });
  }, []);

  const handleChange = useCallback(
    (name, value) => {
      setSelectedOption(name, value);
      if (!params) return;
      params.set(
        encodeURIComponent(name.toLowerCase()),
        encodeURIComponent(value.toLowerCase()),
      );
      if (isBrowser()) {
        window.history.replaceState(
          null,
          '',
          `${pathname}?${params.toString()}`,
        );
      }
    },
    [setSelectedOption, params, pathname],
  );

  return (
    <form className="product-page-form-container">
      {
        <>
          {options.map(({name, values}) => {
            return (
              <div key={name}>
                <div className="product-page-form-money-container">
                  <Money
                    withoutTrailingZeros
                    data={selectedVariant.priceV2}
                    as="span"
                    className="product-page-price"
                  />
                  {isOnSale && (
                    <Money
                      withoutTrailingZeros
                      data={selectedVariant.compareAtPriceV2}
                      as="span"
                      className=" product-page-price opacity-50 strike"
                    />
                  )}
                </div>
                {values.length > 1 && (
                  <div className="product-page-options-container flex flex-wrap">
                    <ProductOptions
                      name={name}
                      handleChange={handleChange}
                      values={values}
                      isOutOfStock={isOutOfStock}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </>
      }
      <div className="product-page-form-cart-container">
        {options[0].values.length > 1 ? (
          <AddToCartButton
            variantId={selectedVariant?.id}
            quantity={1}
            accessibleAddingToCartLabel="Adding item to your cart"
            disabled={isOutOfStock || !selected || addedToCart || limitReached}
            type="button"
            onClick={() => {
              setAddedToCart(true);
              setTimeout(() => {
                setAddedToCart(false);
              }, 750);
            }}
          >
            <div
              className={
                isOutOfStock || !selected || limitReached
                  ? 'product-page-cart-button-disabled'
                  : addedToCart
                  ? 'product-page-cart-button-added'
                  : 'product-page-cart-button'
              }
            >
              {isOutOfStock ? (
                <div className="product-page-add-to-cart-error">SOLD OUT</div>
              ) : selected ? (
                addedToCart ? (
                  <svg
                    width="463"
                    height="469"
                    viewBox="0 0 463 469"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M54 268.03L200.97 415L408.82 55"
                      stroke="white"
                      strokeWidth="108"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : limitReached ? (
                  <div className="product-page-add-to-cart-error-limit">
                    MAX LIMIT REACHED
                  </div>
                ) : (
                  <div className="product-page-add-to-cart-add">
                    ADD TO CART
                  </div>
                )
              ) : (
                <div className="product-page-add-to-cart-error">
                  SELECT SIZE
                </div>
              )}
            </div>
          </AddToCartButton>
        ) : (
          <AddToCartButton
            variantId={selectedVariant?.id}
            quantity={1}
            accessibleAddingToCartLabel="Adding item to your cart"
            disabled={isOutOfStock || addedToCart || limitReached}
            type="button"
            onClick={() => {
              setAddedToCart(true);
              setTimeout(() => {
                setAddedToCart(false);
              }, 750);
            }}
          >
            <div
              className={
                isOutOfStock || limitReached
                  ? 'product-page-cart-button-disabled'
                  : addedToCart
                  ? 'product-page-cart-button-added'
                  : 'product-page-cart-button'
              }
            >
              {isOutOfStock ? (
                <div className="product-page-add-to-cart-error">SOLD OUT</div>
              ) : addedToCart ? (
                <svg
                  width="463"
                  height="469"
                  viewBox="0 0 463 469"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54 268.03L200.97 415L408.82 55"
                    stroke="white"
                    strokeWidth="108"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : limitReached ? (
                <div className="product-page-add-to-cart-error-limit">
                  MAX LIMIT REACHED
                </div>
              ) : (
                <div className="product-page-add-to-cart-add">ADD TO CART</div>
              )}
            </div>
          </AddToCartButton>
        )}
      </div>
    </form>
  );
}
