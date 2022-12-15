import {Link, useUrl, useCart} from '@shopify/hydrogen';

import {useEffect, useState, useCallback} from 'react';
import {Menu, Transition} from '@headlessui/react';

import {CartDrawer} from './CartDrawer.client';

import {useDrawer} from './Drawer.client';

/**
 * A client component that specifies the content of the header on the website
 */
export function Header() {
  const [home, setHome] = useState(true);
  const [shop, setShop] = useState(false);
  const [museum, setMuseum] = useState(false);

  let {pathname} = useUrl();
  let pathArray = pathname.split('/');

  const resetState = () => {
    setHome(false);
    setShop(false);
    setMuseum(false);
  };

  const setFocus = useCallback(() => {
    if (pathArray.includes('shop')) {
      resetState();
      setShop(true);
    } else if (pathArray.includes('museum')) {
      resetState();
      setMuseum(true);
    } else if (pathname === '/') {
      resetState();
      setHome(true);
    } else {
      resetState();
    }
  }, [pathArray, pathname]);

  useEffect(() => {
    setFocus();
  }, [pathname, setFocus]);

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <CustomHeader
        home={home}
        shop={shop}
        museum={museum}
        openCart={openCart}
        pathArray={pathArray}
      />
    </>
  );
}

function CustomHeader({home, shop, museum, openCart, pathArray}) {
  return (
    <header role="banner" className="header-container">
      <div className="flex items-center justify-start w-full header-button-container">
        {(shop || museum) && pathArray && pathArray.length > 2 && (
          <Link to={shop ? '/shop' : museum ? '/museum' : '/'}>
            <button onClick={() => {}} className="header-button-icon">
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
          </Link>
        )}
        {!home && (
          <div className="header-dropdown-container">
            <MenuDrawer />
          </div>
        )}
      </div>

      <div className="flex items-center justify-center w-full">
        {!home && (
          <Link to="/shop" onClick={() => {}}>
            <svg
              width="450"
              height="451"
              viewBox="0 0 450 451"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="header-logo"
            >
              <path
                d="M450 225.006C450.046 255.978 443.672 286.623 431.281 315.009C396.555 394.473 317.259 450.012 224.994 450.012C192.277 450.044 159.95 442.926 130.272 429.157C100.595 415.387 74.2845 395.299 53.1828 370.298C34.701 348.466 50.1077 315.009 78.7397 315.009H320.215C329.497 315.009 337.347 307.683 337.497 298.402C337.532 296.186 337.131 293.984 336.316 291.923C335.5 289.862 334.287 287.982 332.745 286.39C331.203 284.798 329.362 283.525 327.328 282.645C325.294 281.764 323.106 281.293 320.89 281.258H56.0641C25.257 281.258 0.0813612 256.401 0.000109058 225.587V225.006C-0.0185724 206.032 2.36289 187.131 7.0878 168.755C10.063 157.21 13.9632 145.923 18.7506 135.004C53.4453 55.5329 132.741 0.000106414 225.006 0.000106414C257.72 -0.0317417 290.046 7.08552 319.721 20.8538C349.396 34.6222 375.704 54.7089 396.805 79.7085C415.293 101.547 399.88 135.004 371.248 135.004H129.772C120.485 135.004 112.628 142.341 112.491 151.629C112.426 156.104 114.14 160.421 117.258 163.632C120.376 166.842 124.641 168.683 129.116 168.748H393.936C424.743 168.748 449.919 193.605 450 224.419V225.006Z"
                fill="#FF9FE2"
              />
            </svg>
          </Link>
        )}
      </div>

      <div className="flex items-center justify-end w-full header-button-container">
        {!home && (
          <div className="relative">
            <button
              onClick={() => {
                openCart();
              }}
              className="header-button-icon-cart"
            >
              <svg
                width="300"
                height="400"
                viewBox="0 0 300 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="header-svg"
              >
                <path d="M208.333 166.667H183.333V116.667H266.667C275.507 116.667 283.986 113.155 290.237 106.904C296.488 100.652 300 92.1739 300 83.3333C300 74.4928 296.488 66.0145 290.237 59.7633C283.986 53.5121 275.507 50 266.667 50H183.333V26.4815C183.333 19.4594 180.544 12.725 175.58 7.75897C170.615 2.79294 163.881 0.00196421 156.859 0H143.148C136.125 0.00196357 129.391 2.79261 124.425 7.75843C119.459 12.7242 116.669 19.4588 116.667 26.4815V50H91.6667C67.3552 50 44.0393 59.6578 26.8485 76.8486C9.65767 94.0394 0 117.355 0 141.667C0 165.978 9.65767 189.294 26.8485 206.485C44.0393 223.676 67.3552 233.333 91.6667 233.333H116.667V283.333H33.3333C24.4928 283.333 16.0143 286.845 9.76309 293.096C3.51188 299.348 0 307.826 0 316.667C0 325.507 3.51188 333.986 9.76309 340.237C16.0143 346.488 24.4928 350 33.3333 350H116.667V373.519C116.667 380.542 119.457 387.278 124.423 392.244C129.389 397.21 136.125 400 143.148 400H156.859C160.337 400 163.78 399.315 166.992 397.984C170.205 396.653 173.123 394.703 175.582 392.244C178.04 389.784 179.99 386.865 181.32 383.652C182.65 380.439 183.334 376.996 183.333 373.519V350H208.333C232.645 350 255.961 340.342 273.151 323.151C290.342 305.961 300 282.645 300 258.333C300 234.022 290.342 210.706 273.151 193.515C255.961 176.324 232.645 166.667 208.333 166.667ZM91.6741 166.667C85.0437 166.667 78.6848 164.033 73.9964 159.344C69.308 154.656 66.6741 148.297 66.6741 141.667C66.6741 135.036 69.308 128.677 73.9964 123.989C78.6848 119.301 85.0437 116.667 91.6741 116.667H116.667V166.667H91.6741ZM226.015 276.008C223.696 278.334 220.94 280.178 217.905 281.435C214.871 282.692 211.618 283.337 208.333 283.333H183.333V233.333H208.333C213.277 233.333 218.111 234.799 222.222 237.546C226.333 240.292 229.537 244.196 231.429 248.764C233.322 253.331 233.818 258.357 232.854 263.207C231.89 268.056 229.51 272.511 226.015 276.008V276.008Z" />
              </svg>
            </button>
            <CartBadge />
          </div>
        )}
      </div>
    </header>
  );
}

function MenuDrawer() {
  return (
    <Menu>
      {({open}) => (
        <>
          <Menu.Button className="header-button-icon" onClick={() => {}}>
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                !open ? '' : 'rotate-[45deg]'
              } transition-transform transform-gpu duration-200 header-svg`}
            >
              <path d="M364.286 164.286H35.7143C15.9898 164.286 0 180.275 0 200C0 219.724 15.9898 235.714 35.7143 235.714H364.286C384.01 235.714 400 219.724 400 200C400 180.275 384.01 164.286 364.286 164.286Z" />
              <path d="M235.714 35.7143C235.714 15.9898 219.725 0 200 0C180.276 0 164.286 15.9898 164.286 35.7143V364.286C164.286 384.01 180.276 400 200 400C219.725 400 235.714 384.01 235.714 364.286V35.7143Z" />
            </svg>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="header-dropdown">
              <Menu.Item>
                <Link to="/shop" onClick={() => {}}>
                  <div className="header-dropdown-button header-dropdown-button-right">
                    <div className="header-dropdown-text header-text-shop">
                      SHOP
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/museum" onClick={() => {}}>
                  <div className="header-dropdown-button header-dropdown-button-left">
                    <div className="header-dropdown-text header-text-museum">
                      MUSEUM
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/support" onClick={() => {}}>
                  <div className="header-dropdown-button header-dropdown-button-right">
                    <div className="header-dropdown-text header-text-support">
                      SUPPORT
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about" onClick={() => {}}>
                  <div className="header-dropdown-button header-dropdown-button-left">
                    <div className="header-dropdown-text header-text-about">
                      ABOUT
                    </div>
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/terms-and-conditions" onClick={() => {}}>
                  <div className="header-dropdown-button header-dropdown-button-right">
                    <div className="header-dropdown-text header-text-terms">
                      TERMS AND CONDITIONS
                    </div>
                  </div>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

function CartBadge() {
  const {totalQuantity} = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div className="header-badge-count">
      <span>{totalQuantity}</span>
    </div>
  );
}
