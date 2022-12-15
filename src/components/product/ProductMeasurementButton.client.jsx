import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

import {useState} from 'react';

export function ProductMeasurementButton({table}) {
  const [showTable, setShoWTable] = useState(false);
  return (
    <div className="product-page-description-table-container">
      <button onClick={() => setShoWTable(!showTable)}>
        <div
          id="product-measurement"
          className="product-page-description text-link cursor-pointer flex items-center"
        >
          MEASUREMENTS
          <FontAwesomeIcon
            className={`general-button-icon transition-transform transform-gpu, ${
              showTable ? 'rotate-[180deg]' : ''
            }`}
            icon={faChevronDown}
            style={{padding: '0 .5rem'}}
          />
        </div>
      </button>
      <div style={{position: 'relative', width: '100%'}}>
        {showTable && (
          <div className="product-page-description-table">
            <div
              className="prose product-page-table-text"
              dangerouslySetInnerHTML={{
                __html: table,
              }}
            />
            <div
              className="product-page-table-text"
              style={{fontSize: '9.8px', paddingTop: '4px'}}
            >
              GIVE +/-5% ERROR MARGIN FOR ALL MEASUREMENTS
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
