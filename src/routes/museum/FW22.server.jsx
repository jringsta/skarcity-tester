import {Seo, Image} from '@shopify/hydrogen';
import {Suspense} from 'react';
import {Layout} from '~/components/index.server';

export default function Fall2022() {
  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: 'F22',
          }}
        />
      </Suspense>
      <Fall2022Body />
    </Layout>
  );
}

function Fall2022Body() {
  return (
    <div className="fall2022-container-outer">
      <div className="fall2022-container-inner">
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/0COtY4h.jpg"
            alt="Star Hoodie"
          />
        </div>
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/ELznVB2.jpg"
            alt="Star Tie"
          />
        </div>
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/HNcrV8v.jpg"
            alt="Star Hoodie"
          />
        </div>
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/OP9pm40.jpg"
            alt="Star Tie"
          />
        </div>
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/SwbvgTl.jpg"
            alt="Star Hoodie"
          />
        </div>
        <div className="fall2022-image-container">
          <Image
            className="fall2022-image fadeIn"
            width={300}
            height={300}
            src="https://i.imgur.com/3SkBzjO.jpg"
            alt="Mirror Logo"
          />
        </div>
      </div>
    </div>
  );
}
