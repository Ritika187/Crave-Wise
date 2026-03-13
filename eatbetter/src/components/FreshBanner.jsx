export default function FreshBanner() {
  return (
    <div className="bg-white overflow-hidden py-4 border-y border-gray-200">

      <div className="flex whitespace-nowrap animate-marquee">

        {/* First text group */}
        <div className="flex text-green-700 font-semibold tracking-widest text-lg">
          <span className="mx-8">FRESH FROM THE FARM •</span>
          <span className="mx-8">FRESH FROM THE FARM •</span>
          <span className="mx-8">FRESH FROM THE FARM •</span>
          <span className="mx-8">FRESH FROM THE FARM •</span>
        </div>

        {/* Duplicate for infinite effect */}
        <div className="flex text-green-700 font-semibold tracking-widest text-lg">
          <span className="mx-8">FRESH FROM THE FARM •</span>
          <span className="mx-8">FRESH FROM THE FARM •</span>
          <span className="mx-8">FRESH FROM THE FARM •</span>
          <span className="mx-8">FRESH FROM THE FARM •</span>
        </div>

      </div>

    </div>
  )
}