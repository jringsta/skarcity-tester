import {flattenConnection, Image, Link, Money} from '@shopify/hydrogen';

import {getProductPlaceholder} from '~/lib/placeholders';

export function ProductCard({product, loading, onClick}) {
  const cardData = product?.variants ? product : getProductPlaceholder();

  const {image, priceV2: price} =
    flattenConnection(cardData?.variants)[0] || {};

  return (
    <Link onClick={onClick} to={`/shop/${product.handle}`}>
      <div className="product-card-container">
        <div className="product-card-image-container">
          {image && (
            <Image
              className="product-card-image fadeIn"
              widths={[400]}
              sizes="400px"
              loaderOptions={{
                crop: 'center',
                scale: 2,
                width: 400,
                height: 400,
              }}
              // @ts-ignore Stock type has `src` as optional
              data={image}
              alt={image.altText || `Picture of ${product.title}`}
              loading={loading}
            />
          )}

          <div className="product-card-active-container-outer">
            <div className="product-card-active-container-inner">
              <div className="product-card-title">{product.title}</div>
              <div className="product-card-title-colored flex gap-4">
                {product.availableForSale ? (
                  <Money withoutTrailingZeros data={price} />
                ) : (
                  'SOLD OUT'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
