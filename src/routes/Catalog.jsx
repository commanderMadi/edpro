function Catalog() {

  return (
    <div className="p-8 mr-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Course Catalog</h1>
        <div>Searchbar</div>
      </div>

      {/* Section */}
      <div>
        <h2 className="font-bold text-accent py-5">Web Development</h2>
        <div className="grid grid-cols-3 space-x-20 mx-20">
          <div className="flex flex-col items-center rounded overflow-hidden shadow-md">
            <img src='place' className="object-cover"/>
            <div className="text-accent font-bold text-sm my-3">Front-End Developer</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Catalog