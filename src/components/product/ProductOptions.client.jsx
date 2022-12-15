import {useProductOptions} from '@shopify/hydrogen';

import {Text} from '~/components';

export function ProductOptions({values, ...props}) {
  return <OptionsGrid values={values} {...props} />;
}

function OptionsGrid({values, name, handleChange, selected, setSelected}) {
  const {selectedOptions, isOptionInStock} = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value && selected === value;
        const id = `option-${name}-${value}`;
        const isInStock = isOptionInStock(name, value);

        return (
          <div key={id}>
            <Text
              as="label"
              htmlFor={id}
              className={
                isInStock
                  ? ` product-page-option cursor-pointer ${
                      checked && 'product-page-option-selected'
                    }`
                  : 'product-page-option product-page-option-oos cursor-pointer'
              }
            >
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option[${name}]`}
                value={value}
                onChange={() => handleChange(name, value)}
                onClick={() => {
                  if (selected === value) {
                    setSelected(false);
                  } else {
                    setSelected(value);
                  }
                }}
              />
              <div
                className={` ${
                  checked ? 'border-primary/50' : 'border-primary/0'
                }`}
              >
                {value}
              </div>
            </Text>
          </div>
        );
      })}
    </>
  );
}
