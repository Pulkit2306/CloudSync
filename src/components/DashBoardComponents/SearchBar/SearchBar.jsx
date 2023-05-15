import { useState } from "react"
import { useSelector } from "react-redux";

const SearchBar = () => {

  const {userFolders, userFiles} = useSelector(
    (state) => ({
      userFolders: state.filefolders.userFolders,
      userFiles: state.filefolders.userFiles,
    })
  )


  const [search, setSearch] = useState("");

  let folderPresent = [];
  let filePresent = [];

  const searchBar = (e) => {
    e.preventDefault();
    folderPresent = userFolders.filter((e) => 
      e.data.name.toLowerCase().includes(search.toLowerCase())
    )
    filePresent = userFiles.filter((e) => 
      e.data.name.toLowerCase().includes(search.toLowerCase())
    )
    console.log(filePresent)
  }

  return (
    <div className="container">
      <form className="d-flex" onSubmit={(e) => searchBar(e)}>
        <input className="form-control me-2" type="search" placeholder="Search Docs Here..." onChange={(e) =>{setSearch(e.target.value)}}/>
        <button className="btn btn-outline-info" type="submit"> Search </button>
        {

        }
      </form>
    </div>
  )
}

export default SearchBar