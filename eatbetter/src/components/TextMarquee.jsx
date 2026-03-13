export default function TextMarquee() {
  return (
    <div className="w-full overflow-hidden bg-orange-500">

      <div
        className="flex whitespace-nowrap text-white font-semibold text-lg py-3"
        style={{
          animation: "marquee 15s linear infinite"
        }}
      >

        <div className="flex gap-16 px-8">
          <span>Natural • Wholesome</span>
          <span>Delicious • Natural • Wholesome</span>
          <span>Delicious • Natural • Wholesome</span>
          <span>Natural • Wholesome</span>
          <span>Delicious • Natural • Wholesome</span>
        </div>

        {/* duplicate for infinite */}
        <div className="flex gap-16 px-8">
          <span>Natural • Wholesome</span>
          <span>Delicious • Natural • Wholesome</span>
          <span>Delicious • Natural • Wholesome</span>
          <span>Natural • Wholesome</span>
          <span>Delicious • Natural • Wholesome</span>
        </div>

      </div>

      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>

    </div>
  )
}