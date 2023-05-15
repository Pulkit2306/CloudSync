import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFileUpload, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

import "./SubBar.css"
import { useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../../redux/actionCreators/fileFolderActionCreator";
import SearchBar from "../SearchBar/SearchBar";

const SubBar = ({setIsCreatedFolder, setIsCreatedFile, setIsUploadedFile}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {currentFolder, currentFolderData, userFolders} = useSelector((state) => ({
        currentFolder: state.filefolders.currentFolder,
        currentFolderData: state.filefolders.userFolders.find(
            (folder) => folder.docId == state.filefolders.currentFolder,
        ),
        userFolders: state.filefolders.userFolders,
    }), shallowEqual);

    const handleNavigate = (link, id) => {
        navigate(link);

        dispatch(changeFolder(id));
    }

  return (
    <nav className="navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-4">
        <nav aria-label = "breadcrumb" className="ms-5">
            <ol className="breadcrumb d-flex align-items-center">
                {currentFolder != "root" ? (
                    <>
                        <button
                            onClick={() => handleNavigate("/dashboard", "root")}
                            className="breadcrumb-item btn btn-link text-decoration-none"
                        >
                            Root
                        </button>
                        {currentFolderData?.data.path.map((folder, index) => (
                            <button
                                key={index}
                                className="breadcrumb-item btn btn-link text-decoration-none"
                                onClick={() => 
                                    handleNavigate( `/dashboard/folder/${userFolders.find((fldr) => folder == fldr.docId).docId}`, userFolders.find((fldr) => folder == fldr.docId).docId)
                                }
                            >
                                {userFolders.find((fldr) => folder == fldr.docId).data.name}
                            </button>
                        ))}
                    </>
                ):(
                    <>
                        <li className="breadcrumb-item active"> Root </li>
                    </>
                )}
            </ol>
        </nav>
        <div className="ms-auto me-5"> <SearchBar/> </div>
        <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item mx-2">
                <button className="btn btn-outline-dark" onClick={()=> setIsUploadedFile(true)}> <FontAwesomeIcon icon={faFileUpload} /> &nbsp; Upload File </button>
            </li>

            <li className="nav-item mx-2">
                <button className="btn btn-outline-dark" onClick={() => setIsCreatedFile(true)}> <FontAwesomeIcon icon={faFileAlt} /> &nbsp; Create File </button>
            </li>

            <li className="nav-item ms-2">
                <button className="btn btn-outline-dark" onClick={() => setIsCreatedFolder(true)}> <FontAwesomeIcon icon={faFolderPlus} /> Create Folder </button>
            </li>
        </ul>
    </nav>
  )
}

export default SubBar