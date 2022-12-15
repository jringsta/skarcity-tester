import {MediaFile} from '@shopify/hydrogen/client';
import {ATTR_LOADING_EAGER} from '~/lib/const';

import {useState} from 'react';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export function ProductGallery({media}) {
  const [visibleImage, setVisibleImage] = useState(0);

  if (!media.length) {
    return null;
  }

  const handleArrowClickNext = () => {
    const total = media.length;
    const current = visibleImage + 1;

    if (current === total) {
      setVisibleImage(0);
    } else {
      setVisibleImage(current);
    }
  };

  const handleArrowClickBack = () => {
    const total = media.length;
    const current = visibleImage - 1;

    if (current < 0) {
      setVisibleImage(total - 1);
    } else {
      setVisibleImage(current);
    }
  };

  const PreviewCircles = () => {
    return media.map((med, i) => {
      return (
        <button key={med.id || med.image.id} onClick={() => setVisibleImage(i)}>
          <div
            className={`product-gallery-preview-circle ${
              i === visibleImage && 'product-gallery-preview-circle-colored'
            }`}
          />
        </button>
      );
    });
  };

  let mediaProps = {};
  let med = media[visibleImage];

  const data = {
    ...med,
    image: {
      // @ts-ignore
      ...med.image,
      altText: med.alt || 'Product image',
    },
  };

  switch (med.mediaContentType) {
    case 'IMAGE':
      mediaProps = {
        width: 800,
        widths: [400, 800, 1200, 1600, 2000, 2400],
      };
      break;
    case 'VIDEO':
      mediaProps = {
        width: '100%',
        autoPlay: true,
        controls: false,
        muted: true,
        loop: true,
        preload: 'auto',
      };
      break;
    case 'EXTERNAL_VIDEO':
      mediaProps = {width: '100%'};
      break;
    case 'MODEL_3D':
      mediaProps = {
        width: '100%',
        interactionPromptThreshold: '0',
        ar: true,
        loading: ATTR_LOADING_EAGER,
        disableZoom: true,
      };
      break;
  }

  if (med.mediaContentType === 'IMAGE') {
    mediaProps.loading = ATTR_LOADING_EAGER;
  }

  return (
    <div className="product-gallery-container">
      <div className="product-gallery-container-inner">
        <div className="product-gallery-container-top">
          {media.length > 1 && (
            <div className="product-gallery-arrow-container">
              <button
                onClick={() => handleArrowClickBack()}
                className="header-button-icon"
              >
                <svg
                  width="384"
                  height="400"
                  viewBox="0 0 384 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-svg"
                >
                  <path d="M349.537 233.627H114.73L223.715 342.62C226.836 345.741 229.312 349.447 231.001 353.525C232.691 357.603 233.56 361.973 233.56 366.387C233.56 370.802 232.691 375.172 231.001 379.25C229.312 383.328 226.836 387.034 223.715 390.155V390.155C220.594 393.276 216.889 395.752 212.811 397.442C208.732 399.131 204.362 400 199.948 400C195.534 400 191.163 399.131 187.085 397.442C183.007 395.752 179.301 393.276 176.18 390.155L9.84493 223.753C6.72371 220.631 4.24781 216.926 2.55861 212.848C0.869419 208.77 0 204.399 0 199.985C0 195.571 0.869419 191.2 2.55861 187.122C4.24781 183.044 6.72371 179.339 9.84493 176.217L176.21 9.84511C179.331 6.7239 183.037 4.24803 187.115 2.55884C191.193 0.869647 195.564 0 199.978 0C204.392 0 208.762 0.869647 212.84 2.55884C216.918 4.24803 220.624 6.7239 223.745 9.84511C226.866 12.9663 229.342 16.6717 231.031 20.7497C232.72 24.8278 233.59 29.1984 233.59 33.6125C233.59 38.0265 232.72 42.3972 231.031 46.4753C229.342 50.5533 226.866 54.2587 223.745 57.3799L114.76 166.373H349.566C358.481 166.373 367.03 169.914 373.334 176.218C379.637 182.521 383.179 191.071 383.179 199.985V199.985C383.182 204.404 382.315 208.781 380.626 212.864C378.936 216.947 376.458 220.658 373.334 223.783C370.209 226.907 366.499 229.385 362.415 231.074C358.332 232.764 353.956 233.631 349.537 233.627V233.627Z" />
                </svg>
              </button>
            </div>
          )}
          <MediaFile
            tabIndex="0"
            className={`product-gallery-image`}
            data={data}
            options={{
              crop: 'center',
              scale: 2,
            }}
            {...mediaProps}
          />
          {media.length > 1 && (
            <div className="product-gallery-arrow-container">
              <button
                onClick={() => handleArrowClickNext()}
                className="header-button-icon rotate-[180deg]"
              >
                <svg
                  width="384"
                  height="400"
                  viewBox="0 0 384 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="header-svg"
                >
                  <path d="M349.537 233.627H114.73L223.715 342.62C226.836 345.741 229.312 349.447 231.001 353.525C232.691 357.603 233.56 361.973 233.56 366.387C233.56 370.802 232.691 375.172 231.001 379.25C229.312 383.328 226.836 387.034 223.715 390.155V390.155C220.594 393.276 216.889 395.752 212.811 397.442C208.732 399.131 204.362 400 199.948 400C195.534 400 191.163 399.131 187.085 397.442C183.007 395.752 179.301 393.276 176.18 390.155L9.84493 223.753C6.72371 220.631 4.24781 216.926 2.55861 212.848C0.869419 208.77 0 204.399 0 199.985C0 195.571 0.869419 191.2 2.55861 187.122C4.24781 183.044 6.72371 179.339 9.84493 176.217L176.21 9.84511C179.331 6.7239 183.037 4.24803 187.115 2.55884C191.193 0.869647 195.564 0 199.978 0C204.392 0 208.762 0.869647 212.84 2.55884C216.918 4.24803 220.624 6.7239 223.745 9.84511C226.866 12.9663 229.342 16.6717 231.031 20.7497C232.72 24.8278 233.59 29.1984 233.59 33.6125C233.59 38.0265 232.72 42.3972 231.031 46.4753C229.342 50.5533 226.866 54.2587 223.745 57.3799L114.76 166.373H349.566C358.481 166.373 367.03 169.914 373.334 176.218C379.637 182.521 383.179 191.071 383.179 199.985V199.985C383.182 204.404 382.315 208.781 380.626 212.864C378.936 216.947 376.458 220.658 373.334 223.783C370.209 226.907 366.499 229.385 362.415 231.074C358.332 232.764 353.956 233.631 349.537 233.627V233.627Z" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="product-gallery-preview-container">
          <PreviewCircles />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div
  //     // className={`swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 ${className}`}
  //     className={`swimlane hiddenScroll product-gallery-container-inner ${className}`}
  //   >
  //     {media.map((med, i) => {
  //       let mediaProps = {};
  //       // const isFirst = i === 0;
  //       // const isFourth = i === 3;
  //       // const isFullWidth = i % 3 === 0;
  //       const isFullWidth = true;

  //       const data = {
  //         ...med,
  //         image: {
  //           // @ts-ignore
  //           ...med.image,
  //           altText: med.alt || 'Product image',
  //         },
  //       };

  //       switch (med.mediaContentType) {
  //         case 'IMAGE':
  //           mediaProps = {
  //             width: 800,
  //             widths: [400, 800, 1200, 1600, 2000, 2400],
  //           };
  //           break;
  //         case 'VIDEO':
  //           mediaProps = {
  //             width: '100%',
  //             autoPlay: true,
  //             controls: false,
  //             muted: true,
  //             loop: true,
  //             preload: 'auto',
  //           };
  //           break;
  //         case 'EXTERNAL_VIDEO':
  //           mediaProps = {width: '100%'};
  //           break;
  //         case 'MODEL_3D':
  //           mediaProps = {
  //             width: '100%',
  //             interactionPromptThreshold: '0',
  //             ar: true,
  //             loading: ATTR_LOADING_EAGER,
  //             disableZoom: true,
  //           };
  //           break;
  //       }

  //       if (i === 0 && med.mediaContentType === 'IMAGE') {
  //         mediaProps.loading = ATTR_LOADING_EAGER;
  //       }

  //       const style = [
  //         // isFullWidth ? 'md:col-span-2' : 'md:col-span-1',
  //         // isFirst || isFourth ? '' : 'md:aspect-[4/5]',
  //         isFullWidth ? 'md:col-span-2' : 'md:col-span-1',
  //         'aspect-square snap-center product-image w-mobileGallery md:w-full',
  //       ].join(' ');

  //       return (
  //         <div
  //           className={style}
  //           // @ts-ignore
  //           key={med.id || med.image.id}
  //         >
  //           <MediaFile
  //             tabIndex="0"
  //             className={`w-full h-full aspect-square fadeIn object-cover`}
  //             data={data}
  //             sizes={'(min-width: 64em) 60vw, (min-width: 48em) 50vw, 90vw'}
  //             // sizes={
  //             //   isFullWidth
  //             //     ? '(min-width: 64em) 60vw, (min-width: 48em) 50vw, 90vw'
  //             //     : '(min-width: 64em) 30vw, (min-width: 48em) 25vw, 90vw'
  //             // }
  //             // @ts-ignore
  //             options={{
  //               crop: 'center',
  //               scale: 2,
  //             }}
  //             {...mediaProps}
  //           />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}
