import React ,{useState} from 'react'
import { Button } from 'react-bootstrap';




const Payment = () => {
  const [amount, setamount] = useState('');
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_W15v8LLHv8oskL",
        key_secret:"9ALK0yBMb8FWtAXCgf2Ewyju",
        amount: amount *100,
        currency:"INR",
        name:"PARADIZE INN",
        description:"Thank you for choosing us....",
        handler: function(response){
          alert(response.razorpay_payment_id);
          alert("Your Payment is Successfull");
        },
        prefill: {
          name:"Rajnish Patel",
          email:"rajnishpatel201golden@gmail.com",
          contact:"9570904195"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  


  
  return (
    <div>
      

<div style={{marginTop:110,marginBottom:-60}} className='app2'>
         <div className="container ">
          <h1 style={{color:"black",marginTop:"0px"}} className="ju2">Payment Gateway</h1>
          {/* <div className="ju" ><h1 className="text-center mt-3 ">Contact Us</h1></div> */}
           <div  className="row">
           <div className="col-12 col-md-6 d-none d-md-block coll1 text-center">
                <h1 className="text-center mt-3 lets">Paradise Inn</h1>
                    <div className="biggyy">
                    
                      <img style={{marginTop:"40px"}} src="https://www.emstell.com/wp-content/uploads/2020/11/Payment-GATEWAY-Integrations.png" alt="" width={400} height={300}/>
                   
                     </div>
                  

              </div>
              <div className="col-12 col-md-6 coll2">
              <h1 style={{fontSize:"20px"}} className="text-center mt-3 mb-2 ju2">We are trustworthy body, we never share the details of our customer,you can trust and share your details with us!</h1>
              <div className="biggyy">
           
              <input className="mt-3" placeholder='Enter your Name'/>
          

            
              </div>
              <div className="biggyy">
            
            
              <input  placeholder='Enter your Email'/>
             
              </div>
              <div className="biggyy">
            
            
              <input  placeholder='Enter your Contact Number'/>
             
              </div>
              <div className="biggyy">
            
            
              <input  placeholder='Enter your Aadhar Number'/>
             
              </div>
              <div className="biggyy">
            
            
              {/* <input  placeholder='Enter Amount'/> */}
              <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
             
              </div>
              
              <div className="biggyy">

             <button  style={{paddingLeft:"12px",fontSize:"20px",paddingRight:"12px",paddingTop:"6px",paddingBottom:"6px",marginBottom:"10px"}} className='btn56' onClick={handleSubmit}>Pay Now </button>
              </div>
           </div>
           </div>
         </div>
    </div>





    </div>
  )
}

export default Payment
