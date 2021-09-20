import React from "react";
import { tabLabels } from "../../data/ContentTitle";

const Tabs = ({ activeTabName, onClickTab }) => {
  const { TAI_LA_SO_1, TAI_DEP_TRAI, TAI_DEV_WEB } = tabLabels;
  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon} id="icon-movie"></i>
      <p>{tabTitle}</p>
    </div>
  );
  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            TAI_LA_SO_1,
            activeTabName === TAI_LA_SO_1,
            "fas fa-door-open fa-3x ",
            "tab-1"
          )}
          {renderTabTitle(
            TAI_DEP_TRAI,
            activeTabName === TAI_DEP_TRAI,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            TAI_DEV_WEB,
            activeTabName === TAI_DEV_WEB,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName === TAI_LA_SO_1 && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${activeTabName === TAI_LA_SO_1 &&
                "show"}`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">được coi 30 ngày thui </p>
                </div>
                <img
                  src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === TAI_DEP_TRAI && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${activeTabName === TAI_DEP_TRAI &&
                "show"}`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  What tv shows and movie anywhere,anytime{" "}
                </p>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt="logo"
                  />
                  <p className="text-md">What on your TVs</p>
                  <p className="text-dark">
                    Smart Tvs,tablet,Xbox,chrome,Apple, play and more
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt="logo"
                  />
                  <p className="text-md">What on your Smart sand tablet</p>
                  <p className="text-dark">
                    Available one phone and tablet,wherever you go.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png"
                    alt="logo"
                  />
                  <p className="text-md">What on your Laptop</p>
                  <p className="text-dark">What right on MovieDev.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === TAI_DEV_WEB && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${activeTabName === TAI_DEV_WEB &&
                "show"}`}
            >
              <div className="text-center">
                <p className="text-lg">
                  Choose one plan and what everything on MovieDev
                </p>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <th>Basic</th>
                      <th>Standard</th>
                      <th>Premium</th>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after month ends 31-05-2022</td>
                    <td>1.000.000</td>
                    <td>3.000.000</td>
                    <td>4.000.000</td>
                  </tr>
                  <tr>
                    <td>HD Available</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>ULtra HD Available</td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screen you can what on at the same time</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>What your Laptops,TV,phone and tablet</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancel anytime</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>First month free</td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Tabs;
