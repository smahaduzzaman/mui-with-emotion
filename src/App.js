import { createTheme, CssBaseline, Paper, Switch, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import HeroCard from './components/SecondSteps/HeroCard';
// import './App.css';
// import AvatarImage from './components/AvatarImage';
// import TextTypo from './components/TextTypo';
// import SimpleButton from './components/SimpleButton';
// import LoadingBtn from './components/LoadingBtn';
// import MuiIcon from './components/MuiIcon';
// import MuiIconButton from './components/MuiIconButton';
// import BasicRating from './components/BasicRating';
// import MuiTextField from './components/MuiTextField';
// import MuiAlert from './components/MuiAlert';
// import SxSystemProps from './components/SxSystemProps';
// import ResponsiveValues from './components/ResponsiveValues';

function App() {

  // return (
  //   <div className="App">
  //     <div
  //       style={{
  //         background: '#f7f7f7',
  //         width: '400px',
  //         height: '400px',
  //         borderRadius: '1rem',
  //         padding: '2rem',
  //       }}
  //     >
  //       <AvatarImage></AvatarImage>
  //       <MuiAlert></MuiAlert>
  //       <TextTypo></TextTypo>
  //       <SimpleButton></SimpleButton>
  //       <LoadingBtn></LoadingBtn>
  //       <MuiIcon></MuiIcon>
  //       <MuiIconButton></MuiIconButton>
  //       <BasicRating></BasicRating>
  //       <MuiTextField></MuiTextField>
  //       <SxSystemProps></SxSystemProps>
  //       <ResponsiveValues></ResponsiveValues>
  //     </div>
  //   </div>
  // );

  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#FF0000',
      },
    }
  })

  const theme2 = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FFFF00',
      },
    }
  })



  return (
    <ThemeProvider theme={darkMode ? theme2 : theme}>

      <Paper
        sx={{
          // background: 'lightblue',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          placeItems: 'center',
        }}
      >
        <div>
          <Switch onClick={() => setDarkMode(!darkMode)}></Switch>
        </div>
        <CssBaseline />
        <HeroCard></HeroCard>

        {/* <Paper
          sx={{
            width: '100px',
            height: '50px',
            borderRadius: '1rem',
            padding: '2rem',
          }}
        ></Paper> */}

      </Paper>
    </ThemeProvider>

  )





}

export default App;
