import React, { useState, useContext } from "react";
import AddressPopup from "../components/AddressPopup";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Checkout() {

const [addressOpen,setAddressOpen] = useState(false);
const [payment,setPayment] = useState("cod");

const { cart, setCart } = useContext(CartContext);

const navigate = useNavigate();

const user =
localStorage.getItem("userEmail") ||
localStorage.getItem("customerPhone");

const address = JSON.parse(
localStorage.getItem(`shippingAddress_${user}`)
);

const phone = localStorage.getItem("customerPhone");

const subtotal = cart.reduce(
(total,item)=> total + item.price * item.qty,0
);

const placeOrder = async () => {

if(!address){
toast.error("Please add address");
return;
}

if(cart.length === 0){
toast.error("Cart empty");
return;
}

const orderData = {
name: address.name,
phone: phone,
address: address.address,
city: address.city,
items: cart,
paymentMethod: payment,
total: subtotal
};

try{

const res = await fetch("http://localhost:5000/place-order",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify(orderData)
});

const data = await res.json();

if(data.success){

toast.success("Order placed successfully 🎉");

setCart([]);

localStorage.removeItem(`shippingAddress_${user}`);

navigate("/order-success");

}

}catch(err){

console.error(err);
toast.error("Order failed");

}

};

return (

<div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

{/* LEFT SIDE */}

<div>

<h2 className="text-xl font-semibold mb-4">
Delivery Address
</h2>

{address ? (

<div className="border p-4 rounded-lg bg-gray-50">

<p className="font-semibold">{address.name}</p>
<p>{address.address}</p>
<p>{address.city}</p>
<p>{address.phone}</p>

<button
className="text-blue-600 mt-2"
onClick={()=>setAddressOpen(true)}
>
Change Address
</button>

</div>

) : (

<button
onClick={()=>setAddressOpen(true)}
className="border p-4 rounded-lg w-full hover:bg-gray-50"
>
Add Address
</button>

)}

{/* PAYMENT METHOD */}

<h2 className="text-xl font-semibold mt-8 mb-4">
Payment Method
</h2>

<div className="border p-4 rounded-lg space-y-3">

<label className="flex items-center gap-3 cursor-pointer">
<input
type="radio"
value="cod"
checked={payment==="cod"}
onChange={(e)=>setPayment(e.target.value)}
/>
Cash on Delivery
</label>

<label className="flex items-center gap-3 cursor-pointer">
<input
type="radio"
value="online"
checked={payment==="online"}
onChange={(e)=>setPayment(e.target.value)}
/>
Online Payment (Coming Soon)
</label>

</div>

<p className="text-sm text-gray-500 mt-3">
🔒 Your order is secure and protected
</p>

</div>

{/* RIGHT SIDE */}

<div className="border p-6 rounded-lg h-fit shadow-sm">

<h2 className="text-lg font-semibold mb-4">
Order Summary
</h2>

{cart.map((item,index)=>(
<div key={index} className="flex justify-between mb-3 text-sm">
<div>
<p>{item.name}</p>
<p className="text-gray-500">Qty: {item.qty}</p>
</div>
<span>₹{item.price * item.qty}</span>
</div>
))}

<hr className="my-3"/>

<p className="flex justify-between">
<span>Subtotal</span>
<span>₹{subtotal}</span>
</p>

<p className="flex justify-between">
<span>Shipping</span>
<span className="text-green-600">Free</span>
</p>

<hr className="my-3"/>

<p className="flex justify-between font-semibold text-lg">
<span>Total</span>
<span>₹{subtotal}</span>
</p>

<p className="text-sm text-gray-500 mt-2">
🚚 Estimated delivery: 3-5 days
</p>

<button
onClick={placeOrder}
className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium"
>
Place Order
</button>

</div>

<AddressPopup
open={addressOpen}
setOpen={setAddressOpen}
/>

</div>

);

}

export default Checkout;