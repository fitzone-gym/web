import Link from "next/link";
function Pricing() {
  return (
    <section id="pricing" className="pricing_area pt-105 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="section_title text-center pb-16">
              <h3 className="title">Pricing Plans</h3>
              <p>
                Find the perfect membership package that suits your fitness
                journey and budget <br />
                with our transparent and competitive pricing options.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single_pricing mt-30">
              <div className="pricing_wrapper">
                <div className="pricing_header">
                  <h4 className="title">1 Month plan</h4>
                  <span className="price">
                    <span>
                      18,000
                      <span
                        className=""
                        style={{ fontSize: "13px", fontWeight: "200" }}
                      >
                        &nbsp;LKR
                      </span>{" "}
                      /Monthly
                    </span>
                  </span>
                </div>
                <div
                  className="pricing_content"
                  style={{ paddingBottom: "91px" }}
                >
                  <ul>
                    <li>1 Yoga pass</li>
                    <li>1 Full body massage</li>
                    <li>1 Foot massage</li>
                    <li>Kitchen</li>
                    <li>Washing room</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_btn">
                <a href="/Register?type=1-month">Purchase Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single_pricing mt-30">
              <div className="pricing_wrapper">
                <div className="pricing_header">
                  <h4 className="title">6 Month plan</h4>
                  <span className="price">
                    <span>
                      64,000
                      <span
                        className=""
                        style={{ fontSize: "13px", fontWeight: "200" }}
                      >
                        &nbsp;LKR
                      </span>{" "}
                      /Per 6 months
                    </span>
                  </span>
                </div>
                <div
                  className="pricing_content"
                  style={{ paddingBottom: "46px" }}
                >
                  <ul>
                    <li>2 Yoga pass</li>
                    <li>2 Full body massage</li>
                    <li>3 foot massage</li>
                    <li>3 steam spa</li>
                    <li>Kitchen</li>
                    <li>Washing room</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_btn pricing_btn_2">
                <a
                  href="/Register?type=6-months"
                  style={{ backgroundColor: "var(--red)" }}
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single_pricing mt-30">
              <div className="pricing_wrapper">
                <div className="pricing_header">
                  <h4 className="title">Annual paln</h4>
                  <span className="price">
                    <span>
                      95,000
                      <span
                        className=""
                        style={{ fontSize: "13px", fontWeight: "200" }}
                      >
                        &nbsp;LKR
                      </span>{" "}
                      /Per year
                    </span>
                  </span>
                </div>
                <div className="pricing_content">
                  <ul>
                    <li>4 Yoga pass</li>
                    <li>4 Full body massage</li>
                    <li>5 foot massage</li>
                    <li>5 steam spa</li>
                    <li>Pool pass</li>
                    <li>Kitchen</li>
                    <li>Washing room</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_btn">
                <a
                  href="/Register?type=6-months"
                >
                  Purchase Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
