import SearchForm from '@/components/SearchForm'
import { trendingData } from '@/data/trending'

export default function Home() {
  return (
    <main className="bg-primary">
      <section className="ml-10">
        <h2 className="text-white font-bold text-5xl">Find your next stay</h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trendingData.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
