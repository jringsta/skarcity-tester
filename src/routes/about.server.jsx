import {Seo} from '@shopify/hydrogen';
import {Suspense} from 'react';

import {Layout} from '~/components/index.server';

import {AboutBody} from '~/components';

export default function About() {
  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: 'About',
          }}
        />
      </Suspense>
      <AboutBody heading={`About`}></AboutBody>
    </Layout>
  );
}
