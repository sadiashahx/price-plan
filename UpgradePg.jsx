import React, { useState, useRef, useEffect } from "react";
// import Select from 'react-select';
import {
  UpgradeContainerPg,
  UpgradeContainer,
  UpgradePlanContainer,
  DropdownSelect,
  DropdownDiv,
  UpgradeFAQ,
  UpgradePDetail,
  UpgradePInclude,
  UpgradePbox,
  UpgradeButton,
  UpgradeOrderConfirm,
  UpgradeNA,
} from "./UpgradeStyle";

function UpgradePg() {
  // const dropdownOptions = [
  //  { value: "1year", label: "1 year plan" },
  //  { value: "5year", label: "5 years plan" },
  //  { value: "2year", label: "2 years plan" }
  //  ];

  const [upgradePlans, setUpgradePlans] = useState([
    {
      id: "package1",
      discount: "55% OFF",
      plan: "1 Year Plan",
      year: "1 year ",
      lastprice: "$131.4",
      newprice: "$59.95",
      upgradeexpire: "Jul 19, 2022",
    },
    {
      id: "package2",
      discount: "81% OFF",
      plan: "5 Years Plan",
      year: "5 years ",
      lastprice: "$657",
      newprice: "$129.95",
      upgradeexpire: "Jul 19, 2026",
    },
    {
      id: "package3",
      discount: "70% OFF",
      plan: "2 Years Plan",
      year: "2 years ",
      lastprice: "$262.8",
      newprice: "$79.95",
      upgradeexpire: "Jul 19, 2023",
    },
  ]);

  const [selectedPlan, setSelectedPlan] = useState("package1");

  const [planInfo, setPlanInfo] = useState({});

  const UpgradeBox = (upgradePlan) => {
    setSelectedPlan(upgradePlan.id);
    setPlanInfo(upgradePlans.find((plan) => plan.id === upgradePlan.id));
  };

  const scrollToDiv = (ref) => window.scrollTo((0, 50), ref.current.offsetTop);

  const scrollOrderConfirmation = useRef(null);
  const GotoDiv = () => scrollToDiv(scrollOrderConfirmation);

  useEffect(() => {
    setPlanInfo(upgradePlans[0]);
  }, []);

  var availablePlan = upgradePlans.map((upgradePlan) => {
    return (
      <UpgradePbox
        className="mt-3 mx-3"
        key={upgradePlan.id}
        onClick={() => {
          UpgradeBox(upgradePlan);
          GotoDiv();
        }}
        isActive={upgradePlan.id === selectedPlan}
      >
        <p className="pbox-p1 mt-3">{upgradePlan.discount}</p>
        <p className="pbox-p2 mt-3">{upgradePlan.plan}</p>
        <p className="mt-2 pbox-p3">{upgradePlan.lastprice}</p>
        <h1 className="pbox-h1">{upgradePlan.newprice}</h1>

        <button className="pbox-btn mt-3">Upgrade to {upgradePlan.plan}</button>

        <p className="mt-3 pbox-p4">
          After upgrade your plan will expire on {upgradePlan.upgradeexpire}
        </p>
      </UpgradePbox>
    );
  });

  return (
    <UpgradeContainerPg>
      {availablePlan.length ? (
        <UpgradeContainer className="container-fluid">
          <UpgradePlanContainer>
            <h2>Upgrade Page</h2>
            <p className="upgrade-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaecenas at
              pretium enim.
            </p>

            <div className="mt-5 mb-4 d-flex dropdown-row">
              {/* 
               
               --> react select component
               
               <DropdownSelect
               classNamePrefix="select"
               options={dropdownOptions}
               value={{ value: "purevpn", label: "purevpn0d9217230 (Inactive)" }}
               /> 
               
               */}

              <DropdownDiv>
                <select>
                  <option selected disabled>
                    purevpn0d9217230 (Inactive)
                  </option>
                  <option value="1year">Upgrade to 1 Year Plan</option>
                  <option value="5year">Upgrade to 5 Years Plan</option>
                  <option value="2year">Upgrade to 2 Years Plan</option>
                </select>
              </DropdownDiv>

              <div className="px-4 dropdown-monthly">
                <p className="upgrade-p2">
                  Current plan type
                  <p className="upgrade-p3 mt-2">Monthly</p>
                </p>
              </div>

              <div className="px-2">
                <p className="upgrade-p2">
                  Connected Add-ons
                  <p className="upgrade-p3 mt-2">AU Dedicated IP</p>
                </p>
              </div>
            </div>
          </UpgradePlanContainer>

          <UpgradePlanContainer>
            <div className="mt-5">
              <p className="upgrade-p4">
                Limited time offer, upgrade your account and save big!
              </p>
              <h1>
                Grab {planInfo.year} of PureVPN at {planInfo.discount}
              </h1>
            </div>

            <div className="mt-4 d-flex align-items-center justify-content-center text-align-center mx-0 plan-box-responsive">
              {availablePlan}
            </div>

            <div className="mt-4">
              <p className="upgrade-p5">
                All upgraded plan includes a 31-day money-back guarantee.
              </p>
            </div>

            <div ref={scrollOrderConfirmation}></div>
            <div className="mt-5 mb-5">
              <h2>Order Confirmation</h2>

              <div className="d-flex order-confirm-row">
                <UpgradeOrderConfirm className="py-3 px-4 mt-2">
                  <div className="orderbox1 mt-3 d-flex justify-content-between">
                    <p className="orderbox-p1">
                      Upgrade to {planInfo.plan} At {planInfo.discount}
                      <p className="orderbox-p2">
                        This plan will expire on: {planInfo.upgradeexpire}
                      </p>
                    </p>

                    <p className="orderbox-p4">{planInfo.newprice}</p>
                  </div>

                  <div className="orderbox2 d-flex justify-content-between">
                    <p className="orderbox-p3">
                      Order Confirmation
                      <p className="orderbox-p1 mt-2">
                        AU dedicated IP - {planInfo.plan} $1.99 $2.99/month
                      </p>
                    </p>

                    <p className="orderbox-p6">$179.40</p>
                  </div>

                  <div className="orderbox3 d-flex justify-content-between">
                    <p className="orderbox-p3">Total Amount</p>
                    <p className="orderbox-p5">{planInfo.newprice}</p>
                  </div>

                  <UpgradeButton className="mt-4 mb-3">
                    Upgrade to {planInfo.plan}
                  </UpgradeButton>
                </UpgradeOrderConfirm>

                <div className="mx-4 mt-2">
                  <UpgradePInclude>
                    <p className="pinclude-p1">PureVPN plan includes:</p>

                    <div className="mt-2">
                      <p className="pinclude-p2">All premium features & apps</p>
                      <p className="pinclude-p2">
                        All future updates and releases
                      </p>
                      <p className="pinclude-p2">10 multi login</p>
                      <p className="pinclude-p2">24/7 customer support</p>
                      <p className="pinclude-p2">
                        Complete internet freedom & security
                      </p>
                      <p className="pinclude-p3">
                        31 days money back guarantee
                      </p>
                    </div>
                  </UpgradePInclude>
                </div>
              </div>
            </div>
          </UpgradePlanContainer>

          <UpgradePlanContainer noborder className="mt-5">
            <UpgradePDetail className="mb-5">
              <div>
                <p className="pdetail-p1">What is Plan Upgrade?</p>
                <p className="pdetail-p2 mt-2">
                  Plan upgrade is a way to switch your existing PureVPN package
                  plan to a higher package plan at a Discounted price. When you
                  upgrade to a higher plan you pay a one off discounted price
                  and enjoy the same full featured premium services.
                </p>
              </div>

              <div className="mt-4">
                <p className="pdetail-p1">How can I upgrade my plan?</p>

                <p className="pdetail-p2 mt-2">
                  It's super simple!
                  <ul className="mt-4">
                    <li>Select your PureVPN username above</li>
                    <li>Select the plan of your choice to upgrade</li>
                    <li>
                      Click on the Upgrade button & proceed with the payment.
                      Your account is Upgraded!
                    </li>
                  </ul>
                </p>
              </div>

              <div className="mt-5">
                <p className="pdetail-p3">Frequently Asked Questions</p>

                <UpgradeFAQ className="mt-3">
                  <div className="py-3 px-3 pb-0">
                    <p className="faq-p1">
                      I have few months left on my existing PureVPN plan. What
                      will happen if I upgrade?
                    </p>
                    <p className="faq-p2">
                      Your existing plans remaining period will be added to the
                      upgraded plan. For example, if you have 1 year left in
                      your existing plan and you upgrade to our 5-Year plan, the
                      remaining 1 year will be added to the upgraded plan,
                      making it 5-Year + 1 year.
                    </p>
                  </div>
                </UpgradeFAQ>

                <UpgradeFAQ className="mt-3">
                  <div className="py-3 px-3 pb-0">
                    <p className="faq-p1">
                      My PureVPN plan is not expired yet, can I still upgrade?
                    </p>
                    <p className="faq-p2">
                      Yes, you can. In fact, we recommend that you should
                      upgrade your PureVPN plan because it will save you alot of
                      money.
                    </p>
                  </div>
                </UpgradeFAQ>

                <UpgradeFAQ className="mt-3">
                  <div className="py-3 px-3 pb-0">
                    <p className="faq-p1">
                      Are all premium features included in this upgrade offer?
                    </p>
                    <p className="faq-p2">
                      Yes, definitely! All the apps, premium features, future
                      product releases, and 24 free monthly PureVPN plans to
                      gift your friends and family.
                    </p>
                  </div>
                </UpgradeFAQ>

                <UpgradeFAQ className="mt-3">
                  <div className="py-3 px-3 pb-0">
                    <p className="faq-p1">
                      I am facing a problem while upgrading my PureVPN plan.
                      What should I do?
                    </p>
                    <p className="faq-p2">
                      Fret not! Contact our 24x7 live chat support available on
                      the bottom right of this page. You may use it to connect
                      to one of our customer success representative and get your
                      problem solved in no time.
                    </p>
                  </div>
                </UpgradeFAQ>

                <UpgradeFAQ className="mt-3">
                  <div className="py-3 px-3 pb-0">
                    <p className="faq-p1">
                      I cannot upgrade now. Can you book this discount for me?
                    </p>
                    <p className="faq-p2">
                      Unfortunately, not. Some offers like this one are so
                      heavily discounted that we cannot afford to keep them for
                      long.
                    </p>
                  </div>
                </UpgradeFAQ>

                <UpgradeButton className="mt-4" onClick={GotoDiv}>
                  Upgrade to {planInfo.plan}
                  {/* // {availablePlan.length ? `Upgrade to ${planInfo.plan}` : <p className="mt-2">Package not available</p>} // */}
                </UpgradeButton>
              </div>
            </UpgradePDetail>
          </UpgradePlanContainer>
        </UpgradeContainer>
      ) : (
        <UpgradeNA className="d-flex vh-100">
          <div className="d-flex w-100 justify-content-center align-self-center">
            <h1>Package Not Available..</h1>
          </div>
        </UpgradeNA>
      )}
    </UpgradeContainerPg>
  );
}

export default UpgradePg;
