import { shallowEqual, useSelector } from "react-redux";
import ShowItems from "../ShowItems/ShowItems";

import "./HomeDash.css";

const HomeDash = () => {

    // const folders = [{name:"New Folder"}, {name :"new folder 2"}];
    // const files = [{name : "New File"}, {name : "new file 2"}];

    const {isLoading, userFolders, userFiles} = useSelector((state) => ({
      isLoading: state.filefolders.isLoading, 
      userFolders: state.filefolders.userFolders.filter((folder)=>folder.data.parent == "root"),

      userFiles: state.filefolders.userFiles.filter(
        (file) =>  file.data.parent == "root"
      )
    }), shallowEqual)

    console.log(userFolders);

  return (
    <div className="col-md-12 w-100">
    {
      isLoading ? (
          <h1 className="display-1 my-5 text-center"> Loading.... </h1>
      )
      :
      (
        <>
        <ShowItems title={"Created Folders"} items={userFolders} type={"folder"} />
        <ShowItems title={"Created Files"} items={userFiles.filter((file) => file.data.url == null)} type={"file"} />
        <ShowItems title={"Uploaded Files"} items={userFiles.filter((file) => file.data.data == null)} type={"file"} />
        </>
      )
    }
        
    </div>
  )
}

export default HomeDash