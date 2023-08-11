import React from "react";
import { checkout } from "../checkout";
import { toast } from "react-toastify";

const Monthly = () => {
  return (
    <>
      <div>
        {/* <!-- component --> */}
        <div class="min-h-screen bg-gray-100 pt-16 overflow-auto">
          <div class="container mx-auto max-w-4xl">
            <div class="mt- text-center">
              <h1 class="text-4xl font-bold text-gray-800">Monthly plans</h1>
            </div>
            <div class="md:flex space-x-10 pt-0 plan flex items-center justify-center m-auto">
              <div class="py-12">
                <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                  <div class="px-8 flex justify-between items-center">
                    <h4 class="text-xl font-bold text-gray-800">Hobby</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h1 class="text-4xl text-center font-bold">₹100.00</h1>
                  <p class="px-4 text-center text-sm ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </p>
                  <div class="text-center bg-gray-200 ">
                    <button
                      class="inline-block my-6 text-gray-800 bg-berry  text-white font-bold py-2 rounded-full p-4 focus:bg-mauve"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1NdYVSSG4NQRpMPzCarBn8M4",
                              quantity: 1,
                            },
                          ],
                        }),
                          toast("Redirecting...");
                      }}
                    >
                      Buy Plan
                    </button>
                  </div>
                </div>
              </div>
              <div class="py-12">
                <div class="bg-white  pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 -translate-y-2 scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                  <div class="px-8 flex justify-between items-center">
                    <h4 class="text-xl font-bold text-gray-800">
                      Professional
                    </h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </div>
                  <h1 class="text-4xl text-center font-bold">₹200.00</h1>
                  <p class="px-4 text-center text-sm ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </p>
                  <div class="text-center bg-pink-600 ">
                    <button
                      class="inline-block my-6 bg-berry  text-white font-bold py-2 rounded-full p-4 focus:bg-mauve"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1NdZNRSG4NQRpMPzvMFBz5pC",
                              quantity: 1,
                            },
                          ],
                        }),
                          toast("Redirecting...");
                      }}
                    >
                      Buy Plan
                    </button>
                  </div>
                </div>
              </div>
              <div class="py-12">
                <div class="bg-white pt-4 rounded-xl space-y-6 overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer">
                  <div class="px-8 flex justify-between items-center">
                    <h4 class="text-xl font-bold text-gray-800">Business</h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h1 class="text-4xl text-center font-bold">₹300.00</h1>
                  <p class="px-4 text-center text-sm ">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </p>
                  <div class="text-center bg-gray-200 ">
                    <button
                      class="inline-block my-6 text-gray-800 bg-berry  text-white font-bold py-2 rounded-full p-4 focus:bg-mauve"
                      onClick={() => {
                        checkout({
                          lineItems: [
                            {
                              price: "price_1NdZO3SG4NQRpMPz6OABQd3p",
                              quantity: 1,
                            },
                          ],
                        }),
                          toast("Redirecting...");
                      }}
                    >
                      Buy Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monthly;
