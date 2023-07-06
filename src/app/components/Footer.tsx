function Footer() {
  return (
    <section id="footer" className="footer_area pb-0">
      <div className="footer_widget pt-70 pb-120">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-8">
            <div className="">
              <div className="footer_info mt-45">
                <h4 className="footer_title">Contact</h4>
                <ul className="info">
                  <li>Phone: 011-2455455</li>
                  <li>
                    Email:{" "}
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="d6beb3babab996b1b7bbbfbaf8b5b9bb"
                    >
                      fitZone@gmail.com
                    </a>
                  </li>
                  <li>Location: 12/1 Nugegoda Road, Colombo 07.</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer_link mt-45">
                <h4 className="footer_title">Course</h4>
                <ul className="link">
                  <li>
                    <a href="javascript:void(0)">Fitness</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Body Building</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Yoga & Meditation</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Registration</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer_link mt-45">
                <h4 className="footer_title">Quick Link</h4>
                <ul className="link">
                  <li>
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Courses</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">About</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Schedules</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="footer_social mt-45">
                <h4 className="footer_title">Follow Us On</h4>
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer_download_app mt-4">
                <h4 className="footer_title">Get the App</h4>
                <ul className="download-app flex gap-1 mt-4">
                  <li>
                    <a
                      href=""
                      className="flex gap-4"
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        width: "120px",
                      }}
                    >
                      <i class="bi bi-google-play"></i>
                      <p>Android</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex gap-4"
                      style={{
                        border: "1px solid #e5e7eb",
                        padding: "10px",
                        width: "120px",
                      }}
                    >
                      <i class="bi bi-apple"></i>
                      <p>Iphone</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="copyright text-center">
            <p>Copyright &copy; 2023. Designed and Developed by XXXX.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
