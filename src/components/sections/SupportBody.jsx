export function SupportBody() {
  return (
    <div className="support-body-container-outer">
      <div className="support-body-container-inner">
        <div className="support-orders-container-outer">
          <div className="support-orders-container-inner">
            <div className="support-orders-horizontal-container-top">
              <div className="support-large-bubble">
                <div className="support-text-title">ORDERS</div>
              </div>
              <div className="support-line-vertical-extended" />
            </div>

            <div className="support-orders-horizontal-container-bottom">
              <div className="support-bubble">
                <div className="support-text-small support-text-padding">
                  ALL CUSTOMERS OUTSIDE OF THE UNITED STATES ARE RESPONSIBLE FOR
                  THE CUSTOMS FEES/DUTIES THAT MAY BE CHARGED BY THEIR COUNTRY
                  FOR IMPORT
                </div>
              </div>
              <div className="support-line-horizontal-short" />
              <div className="support-bubble">
                <div className="support-text-large">ALL SALES ARE FINAL</div>
              </div>
            </div>

            <div className="support-orders-horizontal-container-middle">
              <div className="support-bubble">
                <div className="support-text">
                  IF THE ITEM IS “PRE-MADE” IT WILL SHIP IN 3-7 DAYS
                </div>
              </div>
              <div className="support-line-horizontal-extended" />
              <div className="support-bubble">
                <div className="support-text">
                  IF THE ITEM IS “PRE-ORDER” IT WILL SHIP IN 6-12 WEEKS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="support-refunds-container">
          <div className="support-large-bubble">
            <div className="support-text-title">REFUNDS</div>
          </div>
          <div className="support-line-vertical support-monitor" />
          <div className="support-line-horizontal support-mobile" />
          <div className="support-bubble">
            <div className="support-text-small">
              IF THERE ARE ANY ERRORS WITH AN ORDER CONTACT ME AT {` `}
              <a
                href="mailto:contact@skarcity.art?subject=Support"
                className="text-link support-text-small"
              >
                CONTACT@SKARCITY.ART
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
