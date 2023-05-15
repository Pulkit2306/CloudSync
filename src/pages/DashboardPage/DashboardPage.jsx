import { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/DashBoardComponents/NavBar/NavBar';
import SubBar from '../../components/DashBoardComponents/SubBar/SubBar';
import HomeDash from '../../components/DashBoardComponents/HomeComponents/HomeDash';
import CreateFolder from '../../components/DashBoardComponents/CreateFolder/CreateFolder';
import { getFiles, getFolders } from '../../redux/actionCreators/fileFolderActionCreator';
import FolderComponent from '../../components/DashBoardComponents/FolderComponent/FolderComponent';
import CreateFile from '../../components/DashBoardComponents/CreateFile/CreateFile';
import FileComponent from '../../components/DashBoardComponents/FileComponent/FileComponent';
import UploadFile from '../../components/DashBoardComponents/UploadFile/UploadFile';



const DashboardPage = () => {

  const [isCreatedFolder, setIsCreatedFolder] = useState(false);
  const [isCreatedFile, setIsCreatedFile] = useState(false);
  const [showSubBar, setShowSubBar] = useState(true);
  const [isUploadedFile, setIsUploadedFile] = useState(false);

  const {pathname} = useLocation();

  const { isLoggedIn, isLoading, userId } = useSelector(state => ({
    isLoggedIn: state.auth.isAuthenticated,
    isLoading: state.filefolders.isLoading,
    userId: state.auth.user.uid,
  }), shallowEqual);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading && userId) {
      dispatch(getFolders(userId));
      dispatch(getFiles(userId));
    }
  }, [dispatch, userId, isLoading])

  useEffect(()=>{
    if(pathname.includes("/file/")){
      setShowSubBar(false);
    }
  }, [pathname])

  return (
    <>
      <NavBar />
    
      {
        isCreatedFolder && (
          <CreateFolder
            setIsCreatedFolder={setIsCreatedFolder}
          />
        )
      }

      {
        isCreatedFile && (
          <CreateFile
            setIsCreatedFile={setIsCreatedFile}
          />
        )
      }

      {
        isUploadedFile && (
          <UploadFile
            setIsUploadedFile={setIsUploadedFile}
          />
        )
      }    
      
      {
        showSubBar &&(
          <SubBar setIsCreatedFolder={setIsCreatedFolder} setIsCreatedFile = {setIsCreatedFile} setIsUploadedFile = {setIsUploadedFile} />
        )
      }
      <Routes>
      
        <Route path="/" element={<HomeDash/>} />
        <Route path="folder/:folderId" element={<FolderComponent />} />
        <Route path="file/:fileId" element={<FileComponent />} />        
      </Routes>
    </>
  )
}

export default DashboardPage