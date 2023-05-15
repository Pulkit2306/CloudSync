import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems/ShowItems";


const FolderComponent = () => {

    const {folderId} = useParams();

    const { childFolders, childFiles} = useSelector((state) => ({
      currentFolderData: state.filefolders.userFolders.find((folder) => folder.docId == folderId)?.data,
      childFolders: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent == folderId,
      ),

      childFiles: state.filefolders.userFiles.filter(
        (file) => file.data.parent == folderId
      )
    }), shallowEqual);

    const createdFiles = childFiles && childFiles.filter((file) => file.data.url == null);
    const uploadedFiles = childFiles && childFiles.filter((file) => file.data.data == null);

  return (
    <div>
      {
        childFolders.length > 0 ? (
          <>
          {childFolders.length > 0  &&(
            <ShowItems title={"Created Folders"} items={childFolders} type={"folder"} />
          ) }
            
            {
              createdFiles && createdFiles.length > 0 &&(
                <ShowItems title={"Created Files"} items={createdFiles} type={"file"} />
              )
            }

            {
              uploadedFiles && uploadedFiles.length > 0  &&(
                <ShowItems title={"Uploaded Files"} items={uploadedFiles} type={"file"} />
              )
            }
            
          </>
        ):(
          <p className="text-center my-5">
            Empty Folder
          </p>
        )
      }
    </div>
  )
}

export default FolderComponent