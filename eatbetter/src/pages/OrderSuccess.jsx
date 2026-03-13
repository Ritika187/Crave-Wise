import React from "react";

function OrderSuccess(){

return(

<div className="flex flex-col items-center justify-center h-screen">

<h1 className="text-3xl font-bold text-green-600">
Order Placed Successfully 🎉
</h1>

<p className="mt-3 text-gray-600">
Your order will be delivered soon
</p>

<a
href="/"
className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
>
Continue Shopping
</a>

</div>

);

}

export default OrderSuccess;