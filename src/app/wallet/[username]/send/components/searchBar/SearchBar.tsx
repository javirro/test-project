import SearchBarIcon from '@/images/searchBar/components/searchBarIcon'
import style from './searchBar.module.css'

interface SearchBarProps {
  setSearchQuery: (query: string) => void
}

function SearchBar({ setSearchQuery }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <nav className={style.container}>
      <div className={style.inputWrapper}>
        <input className={style.input} type="text" placeholder="Search a token" onChange={handleChange} />
        <SearchBarIcon className={style.icon} width="20" height="20" color="#A2ACB0" />
      </div>
    </nav>
  )
}

export default SearchBar
