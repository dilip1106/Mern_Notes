import { useState } from 'react'
import ProfileCardInfo from '../Card/ProfileCardInfo'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({onSearchNote, handleClearSearch}) => {


    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery)
        }
    }

    const onClearSearch = () => {
        setSearchQuery("")
        handleClearSearch()
    }

    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
            <h2 className='text-xl font-medium text-black py-2'>Notes</h2>

            <SearchBar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />
            <ProfileCardInfo />
        </div>
    )
}

export default Navbar