import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchInput = () => {
    return (
      <form className="relative overflow-hidden w-full pr-12 md:pr-14 shadow-sm rounded-md bg-background">
        <label className="flex items-center py-0.5">
          <Input
            // onChange={(e) => setSearchText(e.target.value)}
            // value={searchText}
            className="form-input w-full appearance-none transition ease-in-out text-sm font-sans focus:ring-0 outline-none border-none focus:outline-none pl-5 h-9 rounded-md bg-background text-muted-foreground"
            placeholder="Search for products (e.g. shirt, pant)"
          />
        </label>
        <button
          aria-label="Search"
          type="submit"
          className="outline-none flex items-center justify-center transition duration-200 ease-in-out focus:outline-none absolute top-0 right-0 inset-e-0 w-12 md:w-14 h-full text-xl text-muted-foreground hover:text-foreground"
        >
          <Search
            className="h-5 w-5 stroke-2"
            aria-hidden="true"
          />
        </button>
      </form>
    )
}

export default SearchInput