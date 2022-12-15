import {Suspense} from 'react';
import {
  gql,
  ProductOptionsProvider,
  Seo,
  ShopifyAnalyticsConstants,
  useLocalization,
  useRouteParams,
  useServerAnalytics,
  useShopQuery,
  Link,
} from '@shopify/hydrogen';

import {MEDIA_FRAGMENT} from '~/lib/fragments';
import {NotFound, Layout} from '~/components/index.server';
import {
  ProductForm,
  ProductGallery,
  ProductMeasurementButton,
} from '~/components';

export default function Product() {
  const {handle} = useRouteParams();
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {
    data: {product},
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      country: countryCode,
      language: languageCode,
      handle,
    },
    preload: true,
  });

  if (!product) {
    return <NotFound type="product" />;
  }

  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.product,
      resourceId: product.id,
    },
  });

  const {media, title, descriptionHtml} = product;

  let start_list, end_list, start_table, end_table;
  if (descriptionHtml) {
    start_list = descriptionHtml.indexOf('<ul');
    end_list = descriptionHtml.indexOf('</ul>');
    start_table = descriptionHtml.indexOf('<table');
    end_table = descriptionHtml.indexOf('</table>');
  }

  return (
    <Layout>
      <Suspense>
        <Seo type="product" data={product} />
      </Suspense>
      <ProductOptionsProvider data={product}>
        <div className="product-page-container-outer">
          {/* <div className="grid items-start md:gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3"> */}
          <div className="product-page-container-inner">
            <ProductGallery media={media.nodes} />
            {/* <div className="sticky md:-mb-nav md:top-nav md:-translate-y-nav md:h-screen md:pt-nav hiddenScroll md:overflow-y-scroll"> */}
            <div className="product-page-info-container-outer">
              {/* <div className="flex flex-col"> */}
              <div className="product-page-info-container-inner">
                <div style={{width: '100%'}}>
                  <h1 className="product-page-title">{title}</h1>
                </div>
                <ProductForm />
                <div className="product-page-description-container">
                  {descriptionHtml && (
                    <div>
                      {start_list >= 0 && end_list >= 0 && (
                        <div
                          className="dark:prose-invert prose product-page-description"
                          dangerouslySetInnerHTML={{
                            __html: descriptionHtml.slice(start_list, end_list),
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
                {descriptionHtml && (
                  <div className="product-page-description-extras-container">
                    <Link to="/support">
                      <div className="product-page-description text-link prose dark:prose-invert">
                        SHIPPING/RETURN INFO
                      </div>
                    </Link>
                    {start_table >= 0 && end_table >= 0 && (
                      <ProductMeasurementButton
                        table={descriptionHtml.slice(start_table, end_table)}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ProductOptionsProvider>
    </Layout>
  );
}

const PRODUCT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      vendor
      descriptionHtml
      media(first: 7) {
        nodes {
          ...Media
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
    shop {
      shippingPolicy {
        body
        handle
      }
      refundPolicy {
        body
        handle
      }
    }
  }
`;
