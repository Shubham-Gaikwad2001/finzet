import React from "react";
import LoanAgainstProperty from "../images/LAP.png";

const Contactus = () => {
  return (
    // <div className="pt-3 my-5">

    //   <section className=" section flex ">
    //     <div className="form1 divider">
    //       <div className="container ">
    //         <div className="card shadow">
    //           <div className="card-body ">
    //             <h2 className="h1-responsive font-weight-bold text-center my-4">
    //               Contact us
    //             </h2>

    //             <p className="text-center w-responsive mx-auto mb-5">
    //               Do you have any questions? Please do not hesitate to contact
    //               us directly. Our team will come back to you within a matter of
    //               hours to help you.
    //             </p>
    //             <div className="container ">
    //               <form
    //                 id="contact-form"
    //                 name="contact-form"
    //                 action="mail.php"
    //                 method="POST"
    //               >
    //                 <div className="from-group">
    //                   <label className="mb-1">Full Name</label>
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="Enter Full Name"
    //                   />
    //                 </div>
    //                 <div className="from-group">
    //                   <label className="mb-1">Phone Number</label>
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="Enter Full Name"
    //                   />
    //                 </div>
    //                 <div className="from-group">
    //                   <label className="mb-1">Email Address</label>
    //                   <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="Enter Full Name"
    //                   />
    //                 </div>
    //                 <div className="from-group">
    //                   <label className="mb-1">Message</label>
    //                   <textarea
    //                     rows="3"
    //                     className="form-control"
    //                     placeholder="Type your message..."
    //                   ></textarea>
    //                 </div>
    //                 <div className="from-group py-3">
    //                   <button
    //                     type="button"
    //                     className="btn btn-primary shadow w-100"
    //                   >
    //                     Send Message
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </section>
    // </div>

    // .....used CSS.....
    <div>
      <section className="section mt-lg-5 pt-lg-4 pb-lg-5">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Contact From</h6>
                  <hr />
                  <div className="from-group">
                    <label className="mb-1">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="from-group">
                    <label className="mb-1">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="from-group">
                    <label className="mb-1">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="from-group">
                    <label className="mb-1">Message</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Type your message..."
                    ></textarea>
                  </div>
                  <div className="from-group py-3">
                    <button
                      type="button"
                      className="btn btn-primary shadow w-100"
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                <div className="img1 divider">
                  <img
                    src={LoanAgainstProperty}
                    className="bd-placeholder-img card-img-top img-fluid"
                    width="400"
                    height="400"
                    alt="Balance Transfer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
