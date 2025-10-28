function Test({ cart }) {
  console.log("cart from Test:", JSON.stringify(cart, null, 2));

  if (!Array.isArray(cart))
    return <div className="bg-amber-400 p-2">در حال بارگذاری...</div>;

  const cleanedCart = cart.filter((item) => item && item.id && item.count);

  if (cleanedCart.length === 0)
    return <div className="bg-amber-400 p-2">سبد خرید خالی است</div>;

  return (
    <>
      <div className="bg-amber-400 p-2 font-bold">سبد خرید</div>
      <div className="bg-pink-600 p-3 text-white">
  {cart.length === 0 ? (
    "سبد خرید خالی است"
  ) : (
    cart.map(item => (
      <div key={item.id}>
        محصول: {item.id} — تعداد: {item.count}
      </div>
    ))
  )}
</div>
    </>
  );
}

export default Test;