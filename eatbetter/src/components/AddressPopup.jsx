import React, { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

function AddressPopup({ open, setOpen }) {

const [form,setForm] = useState({
pincode:"",
address:"",
locality:"",
city:"",
phone:"",
name:"",
email:""
});

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const saveAddress = ()=>{

// Required validation
if(!form.name || !form.phone || !form.address || !form.city){
toast.error("Please fill required fields");
return;
}

// Phone validation
if(form.phone.length !== 10){
toast.error("Enter valid phone number");
return;
}

// Get current user
const user =
localStorage.getItem("userEmail") ||
localStorage.getItem("customerPhone") ||
form.phone;

// Save address user wise
localStorage.setItem(
`shippingAddress_${user}`,
JSON.stringify(form)
);

// Success message
toast.success("Address Saved Successfully");

// Reset form
setForm({
pincode:"",
address:"",
locality:"",
city:"",
phone:"",
name:"",
email:""
});

// Close popup
setOpen(false);

};

if(!open) return null;

return (

<div className="fixed inset-0 bg-black/40 flex items-end justify-center z-50">

<div className="bg-white w-[380px] rounded-t-3xl p-6">

<div className="flex justify-between mb-4">

<h2 className="text-lg font-semibold">
Add new address
</h2>

<X
className="cursor-pointer"
onClick={()=>setOpen(false)}
/>

</div>

<input
name="pincode"
placeholder="Pincode"
value={form.pincode}
onChange={handleChange}
className="border-b w-full p-2 mb-3"
/>

<input
name="address"
placeholder="Address"
value={form.address}
onChange={handleChange}
className="border-b w-full p-2 mb-3"
/>

<input
name="locality"
placeholder="Locality"
value={form.locality}
onChange={handleChange}
className="border-b w-full p-2 mb-3"
/>

<input
name="city"
placeholder="City"
value={form.city}
onChange={handleChange}
className="border-b w-full p-2 mb-3"
/>

<input
name="phone"
placeholder="Phone"
maxLength={10}
value={form.phone}
onChange={handleChange}
className="border-b w-full p-2 mb-3"
/>

<input
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
className="border-b w-full p-2 mb-3"
/>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className="border-b w-full p-2 mb-4"
/>

<button
onClick={saveAddress}
className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg"
>
Save Address
</button>

</div>

</div>

);

}

export default AddressPopup;