import './App.css';
import AvatarImage from './components/AvatarImage';
import TextTypo from './components/TextTypo';
import SimpleButton from './components/SimpleButton';
import LoadingBtn from './components/LoadingBtn';
import MuiIcon from './components/MuiIcon';
import MuiIconButton from './components/MuiIconButton';
import BasicRating from './components/BasicRating';
import MuiTextField from './components/MuiTextField';
import MuiAlert from './components/MuiAlert';

function App() {

  return (
    <div className="App">
      <div
        style={{
          background: '#f7f7f7',
          width: '400px',
          height: '400px',
          borderRadius: '1rem',
          padding: '2rem',
        }}
      >
        <AvatarImage></AvatarImage>
        <MuiAlert></MuiAlert>
        <TextTypo></TextTypo>
        <SimpleButton></SimpleButton>
        <LoadingBtn></LoadingBtn>
        <MuiIcon></MuiIcon>
        <MuiIconButton></MuiIconButton>
        <BasicRating></BasicRating>
        <MuiTextField></MuiTextField>
      </div>
    </div>
  );
}

export default App;
