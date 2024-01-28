import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200 mt-24">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="relative py-16">
            <div className="relative w-full">
              <div className="relative -top-40 bg-white dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow dark:shadow-gray-800 overflow-hidden">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                  <div className="md:text-start text-center z-1">
                    <h3 className="text-[26px] font-semibold text-slate-900 dark:text-white">
                      Subscribe to Newsletter!
                    </h3>
                    <p className="text-slate-400 max-w-xl mx-auto">
                      Subscribe to get latest updates and information.
                    </p>
                  </div>

                  <div className="subcribe-form z-1">
                    <form className="relative max-w-lg md:ms-auto">
                      <input
                        type="email"
                        id="subcribe"
                        name="email"
                        className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                        placeholder="Enter your email :"
                      />
                      <button
                        type="submit"
                        className="btn absolute top-[2px] end-[3px] h-[46px] bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                <div className="absolute -top-5 -start-5">
                  <div className="uil uil-envelope lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45"></div>
                </div>

                <div className="absolute -bottom-5 -end-5">
                  <div className="uil uil-pen lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                <div className="lg:col-span-4 md:col-span-12">
                  <a
                    href="index-five.html#"
                    className="text-[22px] focus:outline-none"
                  >
                    <img src="/assets/images/logo-white.png" alt="" />
                  </a>
                  <p className="mt-6 text-gray-300">
                    Buy, sell and discover exclusive digital assets by the top
                    artists of NFTs world.
                  </p>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                    Giglink
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href="explore-one.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Explore
                        Item
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="auction.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Live
                        Auction
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="activity.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i>{" "}
                        Activities
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="wallet.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Wallets
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="creators.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Creators
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                    Usefull Links
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href="aboutus.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> About Us
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="blogs.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Blog &
                        News
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="terms.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Terms &
                        Condition
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="privacy.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Privacy
                        policy
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="login.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Login
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="contact.html"
                        className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Contact
                        Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                    Download the Giglink app
                  </h5>

                  <ul className="list-none mt-6">
                    <li className="inline">
                      <img
                        src="/assets/images/app.png"
                        className="h-9 inline-block"
                        alt=""
                      />
                    </li>
                    <li className="inline">
                      <img
                        src="/assets/images/playstore.png"
                        className="h-9 inline-block"
                        alt=""
                      />
                    </li>
                  </ul>

                  <div className="mt-6">
                    <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">
                      Contact Details
                    </h5>

                    <div className="flex mt-6">
                      <i
                        data-feather="mail"
                        className="w-5 h-5 text-violet-600 me-3 mt-1"
                      ></i>
                      <div className="">
                        <a
                          href="mailto:contact@example.com"
                          className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                        >
                          contact@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex mt-6">
                      <i
                        data-feather="phone"
                        className="w-5 h-5 text-violet-600 me-3 mt-1"
                      ></i>
                      <div className="">
                        <a
                          href="tel:+152534-468-854"
                          className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                        >
                          +152 534-468-854
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="md:text-start text-center">
              <p className="mb-0 text-gray-300">
                © <script>document.write(new Date().getFullYear())</script>{" "}
                Giglink. Design with{" "}
                <i className="mdi mdi-heart text-red-600"></i> by{" "}
                <a
                  href="../../shreethemes_default.html"
                  target="_blank"
                  className="text-reset"
                >
                  Shreethemes
                </a>
                .
              </p>
            </div>

            <ul className="list-none md:text-end text-center">
              <li className="inline">
                <a
                  href="https://1.envato.market/giglink"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i
                    className="uil uil-shopping-cart align-middle"
                    title="Buy Now"
                  ></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://dribbble.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i
                    className="uil uil-dribbble align-middle"
                    title="dribbble"
                  ></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://www.behance.net/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i className="uil uil-behance" title="Behance"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="http://linkedin.com/company/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i className="uil uil-linkedin" title="Linkedin"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i
                    className="uil uil-facebook-f align-middle"
                    title="facebook"
                  ></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i
                    className="uil uil-instagram align-middle"
                    title="instagram"
                  ></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="https://twitter.com/shreethemes"
                  target="_blank"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i
                    className="uil uil-twitter align-middle"
                    title="twitter"
                  ></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="mailto:support@shreethemes.in"
                  className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"
                >
                  <i
                    className="uil uil-envelope align-middle"
                    title="email"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}