import {Fragment, useState} from 'react';
// @ts-expect-error @headlessui/react incompatibility with node16 resolution
import {Dialog, Transition} from '@headlessui/react';

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
function Drawer({heading, open, onClose, openFrom = 'right', children}) {
  const offScreen = {
    right: 'translate-x-full',
    left: '-translate-x-full',
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`fixed inset-y-0 flex max-w-full ${
                openFrom === 'right' ? 'right-0' : ''
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom={offScreen[openFrom]}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo={offScreen[openFrom]}
              >
                <Dialog.Panel className="w-screen h-screen max-w-lg text-left align-middle transition-all transform shadow-xl bg-contrast">
                  <header
                    className={`sticky top-0 flex items-center px-6 h-nav sm:px-8 md:px-12 cart-main-container-top ${
                      heading ? 'justify-between' : 'justify-end'
                    }`}
                  >
                    {heading !== null && (
                      <Dialog.Title>
                        <div
                          className="drawer-title text-color"
                          id="cart-contents"
                        >
                          {heading}
                        </div>
                      </Dialog.Title>
                    )}
                    <button
                      type="button"
                      className="header-button-icon"
                      onClick={onClose}
                    >
                      <svg
                        width="400"
                        height="400"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="header-svg"
                      >
                        <path d="M309.091 30.3034L30.303 309.091C13.5671 325.827 13.5671 352.961 30.303 369.697C47.0389 386.433 74.1732 386.433 90.9091 369.697L369.697 90.9094C386.433 74.1735 386.433 47.0393 369.697 30.3034C352.961 13.5675 325.827 13.5675 309.091 30.3034Z" />
                        <path d="M90.9091 30.3032C74.1732 13.5673 47.0389 13.5673 30.303 30.3032C13.5671 47.0391 13.5671 74.1733 30.303 90.9092L309.091 369.697C325.827 386.433 352.961 386.433 369.697 369.697C386.433 352.961 386.433 325.827 369.697 309.091L90.9091 30.3032Z" />
                      </svg>
                    </button>
                  </header>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export {Drawer};

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
