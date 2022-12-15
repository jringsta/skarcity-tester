import {Seo} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {Layout} from '~/components/index.server';

export default function Terms() {
  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: 'Terms',
          }}
        />
      </Suspense>
      <TermsBody />
    </Layout>
  );
}

function TermsBody() {
  return (
    <div className="terms-container">
      <div className="terms-bubble">
        <div className="terms-text">
          TERMS AND CONDITIONS:BY ACCESSING THIS WEBSITE YOU ACKNOWLEDGE THAT
          ALL MATERIALS HERE ARE SUBJECT TO COPYRIGHT AND MAY NOT BE DISTRIBUTED
          OR REPLICATED WITHOUT THE EXPRESSED CONSENT OF SKARCITY. BY PROCEEDING
          TO PURCHASE ANY PRODUCTS OR SERVICES ON THIS SITE, YOU ALSO
          ACKNOWLEDGE THAT YOU HAVE CAREFULLY READ AND AGREED TO THE SITE
          POLICIES, AS WELL AS SHIPPING/RETURN DETAILS THEREIN.
        </div>
      </div>
    </div>
  );
}
