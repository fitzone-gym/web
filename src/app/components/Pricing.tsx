function Pricing() {
  return (
    <section id="pricing" className="pricing_area pt-105 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="section_title text-center pb-16">
              <h3 className="title">Pricing Plans</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-content-center">
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single_pricing mt-30">
              <div className="pricing_wrapper">
                <div className="pricing_header">
                  <h4 className="title">Basic</h4>
                  <span className="price">
                    <span>$29</span> /Monthly
                  </span>
                </div>
                <div className="pricing_content">
                  <ul>
                    <li>3 Days a Week</li>
                    <li>Dedicated Trainer Allocated</li>
                    <li>Swimming pool included</li>
                    <li>Morning and Evening Batches</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_btn">
                <a href="javascript:void(0)">Purchase Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <div className="single_pricing mt-30">
              <div className="pricing_wrapper">
                <div className="pricing_header">
                  <h4 className="title">Standard</h4>
                  <span className="price">
                    <span>$49</span> /Monthly
                  </span>
                </div>
                <div className="pricing_content">
                  <ul>
                    <li>3 Days a Week</li>
                    <li>Dedicated Trainer Allocated</li>
                    <li>Swimming pool included</li>
                    <li>Morning and Evening Batches</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_btn pricing_btn_2">
                <a
                  href="javascript:void(0)"
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
                  <h4 className="title">Premium</h4>
                  <span className="price">
                    <span>$99</span> /Monthly
                  </span>
                </div>
                <div className="pricing_content">
                  <ul>
                    <li>3 Days a Week</li>
                    <li>Dedicated Trainer Allocated</li>
                    <li>Swimming pool included</li>
                    <li>Morning and Evening Batches</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_btn">
                <a href="javascript:void(0)">Purchase Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Pricing;