import React from "react";
import Button from "./Button";
function Section({count,setcount}) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-4 row-cols-md-2   row-cols-xl-4 justify-content-center">
         
         
         
         {/* card-1 */}
          <div className="col mb-5">
            {/* card-1 */}
            <div className="card h-100">
              {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Fancy Products</h5>" $40.00 - $80.00 "
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
          </div> 

        {/* card=-2 */}
          <div className="col mb-5">
            {/* card-2 */}
            <div className="card h-100">
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}> sale
              </div>
              {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Special Item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  <span className="text-muted text-decoration-line-through">
                    "$20.00
                  </span>
                  -$18.00 "
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                   <Button count= {count} setcount={setcount}/>
                   </div>
              </div>
            </div>
           
          </div>


            {/*card- 3  */}
          <div className="col mb-5">
            {/*<div> col-3 */}
            <div className="card h-100">
            <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                sale
              </div>
             
              {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5>Sale Items</h5>
                  <span className="text-muted text-decoration-line-through">
                    " $50.00
                  </span>
                  - $25.00 "
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
          </div>
    
         {/* card-4 */}
           <div className="col mb-5">
            {/* card-4 */}
            <div className="card h-100">
              {/* card image */}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5>Popular Items</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  "$40.00 "
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
          </div>
  
        
           {/* card-5 */}
          <div className="col mb-5">
            
            {/* card-5 */}
            <div className="card h-100">
            <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                sale
              </div>
              {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5>Sale Item</h5>
                  <span className=" text-muted text-decoration-line-through">
                    " $50.00
                  </span>
                  $25.00 "
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
            
          </div>
         
         
          {/* card-6 */}
          <div className="col mb-5">
            {/* card-6 */}
            <div className="card h-100">
              {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5>Fancy Products</h5>" $120.00 - $280.00 "
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
        
          </div>
        
         
            {/* card-7*/} 
          <div className="col mb-5">
            {/* card-7 */}
            <div className="card h-100">
            <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                sale
              </div>
               {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5>Special ItemS </h5>
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      "$20.00
                    </span>
                    -$18.00 "
                  </div>
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
       
          </div> 
            
        
        
         {/* card-8*/} 
          <div className="col mb-5">
            {/* card-8 */}
            <div className="card h-100">
              {/* card image */}
              <img
                className="card-img-top"
                src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt=""
              />
              {/*product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  <h5>Fancy Products</h5>

                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                                        
                  </div>
                         $40              
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                <Button count= {count} setcount={setcount}/>
                </div>
              </div>
            </div>
     
          </div>
       
       
        </div> 
      </div>  
    </section>
  );
}

export default Section;