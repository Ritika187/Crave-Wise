
import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductPage = () => {

  const { addToCart } = useContext(CartContext);
  const location = useLocation();
  const product = location.state?.product;

  const [qty, setQty] = useState(1);
  const [image, setImage] = useState(product?.image1);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [average, setAverage] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviews, setReviews] = useState([]);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  // ⭐ Fetch rating and reviews
  useEffect(() => {

    const fetchRatings = async () => {
      try {

        const avgRes = await fetch(
          `http://localhost:5000/rating/average/${product.id}`
        );

        const avgData = await avgRes.json();

        setAverage(Number(avgData.averageRating) || 0);
        setTotalReviews(avgData.totalReviews || 0);

        const revRes = await fetch(
          `http://localhost:5000/rating/${product.id}`
        );

        const revData = await revRes.json();

        setReviews(revData);

      } catch (err) {

        console.error("Failed to fetch rating data:", err);
        toast.error("Failed to load reviews");

      }
    };

    fetchRatings();

  }, [product.id]);

  // ⭐ Submit review
  const submitReview = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (rating === 0) {
      toast("Please select a rating ⭐");
      return;
    }

    if (!review.trim()) {
      toast("Please write a review ✍️");
      return;
    }

    try {

      const res = await fetch("http://localhost:5000/rating/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          product_id: product.id,
          user_id: user.id,
          rating,
          review,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      const newReview = {
        id: Date.now(),
        user_id: user.id,
        product_id: product.id,
        rating,
        review,
      };

      setReviews([newReview, ...reviews]);
      setTotalReviews(totalReviews + 1);

      setAverage(
        (average * totalReviews + rating) / (totalReviews + 1)
      );

      setRating(0);
      setReview("");

      toast.success("Review submitted successfully!");

    } catch (err) {

      console.error(err);
      toast.error("Failed to submit review");

    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* images */}

      <div>

        <img
          src={image}
          alt=""
          className="w-full rounded-lg"
        />

        <div className="flex gap-4 mt-4">

          {[product.image1, product.image2, product.image3, product.image4]
            .filter(Boolean)
            .map((img, i) => (

              <img
                key={i}
                src={img}
                onClick={() => setImage(img)}
                className={`w-20 cursor-pointer border-2 rounded ${
                  image === img
                    ? "border-orange-500"
                    : "border-gray-300"
                }`}
              />

            ))}

        </div>

      </div>

      {/* content */}

      <div>

        <h1 className="text-3xl font-bold mb-2">
          {product.name}
        </h1>

        {/* rating */}

        <div className="flex items-center gap-2 text-yellow-500">

          ⭐ {average.toFixed(1)}

          <span className="text-gray-500">
            ({totalReviews} reviews)
          </span>

        </div>

        {/* price */}

        <div className="flex gap-3 mt-4">

          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>

          <span className="text-2xl font-bold">
            ₹{product.price}
          </span>

          <span className="text-green-600">
            Save {discount}%
          </span>

        </div>

        {/* quantity */}

        <div className="mt-6 flex items-center border w-fit">

          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            className="px-4 py-2"
          >
            -
          </button>

          <span className="px-4">{qty}</span>

          <button
            onClick={() => setQty(qty + 1)}
            className="px-4 py-2"
          >
            +
          </button>

        </div>

        {/* add to cart */}

        <button
          onClick={() => {
            addToCart(product);
            toast.success("Product added to cart 🛒");
          }}
          className="mt-6 w-full bg-orange-500 text-white py-3 rounded"
        >
          ADD TO CART
        </button>

        {/* write review */}

        <div className="mt-10">

          <h2 className="font-semibold mb-3">
            Write a Review
          </h2>

          <div className="flex text-2xl mb-3">

            {[1, 2, 3, 4, 5].map((star) => (

              <span
                key={star}
                onClick={() => setRating(star)}
                className={
                  star <= rating
                    ? "text-yellow-500 cursor-pointer"
                    : "text-gray-300 cursor-pointer"
                }
              >
                ★
              </span>

            ))}

          </div>

          <textarea
            placeholder="Write review"
            className="border p-2 w-full mb-3"
            value={review}
            onChange={(e) =>
              setReview(e.target.value)
            }
          />

          <button
            onClick={submitReview}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>

        </div>

        {/* reviews list */}

        <div className="mt-10">

          <h2 className="text-xl font-semibold mb-4">
            Customer Reviews
          </h2>

          {reviews.length === 0 && (
            <p className="text-gray-500">
              No reviews yet
            </p>
          )}

          {reviews.map((r) => (

            <div
              key={r.id}
              className="border-b py-4"
            >

              <div className="text-yellow-500">
                {"★".repeat(r.rating)}
              </div>

              <p className="text-gray-700">
                {r.review}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default ProductPage;

