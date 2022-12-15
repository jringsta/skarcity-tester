import {Seo} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {Layout} from '~/components/index.server';
import {SupportBody} from '../components/index';

export default function Cart() {
  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: 'Support',
          }}
        />
      </Suspense>
      <SupportBody />
    </Layout>
  );
}
