import {useEffect} from 'react';

import {
  useCart,
  useCartLine,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  Image,
  Link,
} from '@shopify/hydrogen';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';

export function CartLineItem({productLimit, limitReached, setLimitReached}) {
  const {linesRemove} = useCart();
  const {id: lineId, quantity, merchandise} = useCartLine();

  useEffect(() => {
    if (
      productLimit[merchandise.image.id] &&
      productLimit[merchandise.image.id] >= 3
    ) {
      setLimitReached(true);
    } else {
      setLimitReached(false);
    }
  }, [productLimit]);

  return (
    <li key={lineId} className="flex gap-4 cart-line-container">
      <div className="flex-shrink">
        <Image
          width={112}
          height={112}
          widths={[112]}
          data={merchandise.image}
          loaderOptions={{
            scale: 2,
            crop: 'center',
          }}
          className="object-cover object-center w-24 h-24 rounded md:w-28 md:h-28"
        />
      </div>

      <div className="flex justify-between flex-grow">
        <div className="grid gap-2">
          <div className="cart-text">
            <Link to={`/shop/${merchandise.product.handle}`}>
              {merchandise.product.title}
            </Link>
          </div>

          <div className="grid pb-2">
            {(merchandise?.selectedOptions || []).map((option) => (
              <div className="cart-text-size" key={option.name}>
                {option.name}: {option.value}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex justify-start text-copy">
              <CartLineQuantityAdjust
                lineId={lineId}
                quantity={quantity}
                limitReached={limitReached}
              />
            </div>
            <button
              type="button"
              onClick={() => linesRemove([lineId])}
              className="flex items-center justify-center w-10 h-10 header-button-icon cart-icon-container"
              style={{marginLeft: '1rem'}}
            >
              <span className="sr-only">Remove</span>
              <FontAwesomeIcon className={`cart-icon`} icon={faTrashCan} />
            </button>
          </div>
        </div>
        <div className="cart-text">
          <CartLinePrice as="span" />
        </div>
      </div>
    </li>
  );
}

function CartLineQuantityAdjust({lineId, quantity, limitReached}) {
  return (
    <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
        Quantity, {quantity}
      </label>
      <div className="flex items-center">
        <CartLineQuantityAdjustButton
          adjust="decrease"
          aria-label="Decrease quantity"
          className="w-10 h-10 transition text-primary/50 hover:text-primary disabled:cursor-wait header-button-icon cart-icon-container"
        >
          {/* &#8722; */}
          <svg
            width="400"
            height="72"
            viewBox="0 0 400 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="header-svg"
          >
            <path d="M364.286 0H35.7143C15.9898 0 0 15.9898 0 35.7143C0 55.4387 15.9898 71.4286 35.7143 71.4286H364.286C384.01 71.4286 400 55.4387 400 35.7143C400 15.9898 384.01 0 364.286 0Z" />
          </svg>
        </CartLineQuantityAdjustButton>
        <CartLineQuantity
          as="div"
          className="px-3 text-center cart-amount-text"
        />
        {limitReached ? (
          <div className="w-10 h-10 transition text-primary/50 hover:text-primary header-button-icon header-button-icon-grey cart-icon-container-grey disabled:cursor-wait">
            {/* &#43; */}
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="header-svg-grey"
            >
              <path d="M364.286 164.286H35.7143C15.9898 164.286 0 180.275 0 200C0 219.724 15.9898 235.714 35.7143 235.714H364.286C384.01 235.714 400 219.724 400 200C400 180.275 384.01 164.286 364.286 164.286Z" />
              <path d="M235.714 35.7143C235.714 15.9898 219.725 0 200 0C180.276 0 164.286 15.9898 164.286 35.7143V364.286C164.286 384.01 180.276 400 200 400C219.725 400 235.714 384.01 235.714 364.286V35.7143Z" />
            </svg>
          </div>
        ) : (
          <CartLineQuantityAdjustButton
            adjust="increase"
            aria-label="Increase quantity"
            className="w-10 h-10 transition text-primary/50 hover:text-primary header-button-icon cart-icon-container disabled:cursor-wait"
          >
            {/* &#43; */}
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="header-svg"
            >
              <path d="M364.286 164.286H35.7143C15.9898 164.286 0 180.275 0 200C0 219.724 15.9898 235.714 35.7143 235.714H364.286C384.01 235.714 400 219.724 400 200C400 180.275 384.01 164.286 364.286 164.286Z" />
              <path d="M235.714 35.7143C235.714 15.9898 219.725 0 200 0C180.276 0 164.286 15.9898 164.286 35.7143V364.286C164.286 384.01 180.276 400 200 400C219.725 400 235.714 384.01 235.714 364.286V35.7143Z" />
            </svg>
          </CartLineQuantityAdjustButton>
        )}
      </div>
    </>
  );
}
