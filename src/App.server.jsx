import {Suspense} from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  FileRoutes,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  Route,
  Router,
  ShopifyAnalytics,
  ShopifyProvider,
  LocalizationProvider,
  CartProvider,
} from '@shopify/hydrogen';

import {DefaultSeo, NotFound} from '~/components/index.server';

function App({routes, request}) {
  const pathname = new URL(request.normalizedUrl).pathname;
  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  return (
    <Suspense>
      <ShopifyProvider>
        <LocalizationProvider countryCode={countryCode}>
          <CartProvider countryCode={countryCode}>
            <Suspense>
              <DefaultSeo />
            </Suspense>
            <Router>
              <FileRoutes routes={routes} />
              <Route path="*" page={<NotFound />} />
            </Router>
          </CartProvider>
          <PerformanceMetrics />
          {import.meta.env.DEV && <PerformanceMetricsDebug />}
          <ShopifyAnalytics />
        </LocalizationProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
