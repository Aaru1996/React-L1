import logo from './logo.svg';
import { AppLogo,AppHeader,AppStyled,Flexbox, } from './App.style';
import styles from './App.module.css'

function App() {

  // const flexprop={flexDirection:"row"}

  return (

    <AppStyled >
     
      <AppHeader >
        <AppLogo src={logo}  alt="logo" />
        <Flexbox flexDirection="column ">
           <div>A</div>
           <div>B</div>
        </Flexbox>
      </AppHeader>
    </AppStyled>



    // <AppStyled id={styles.App} style={{backgroundColor:"red",color:"white"}}>
    //  <AppStyled >
    //   <h1>Arun</h1>
    //   <p>Yadav</p>
    // </AppStyled>

    
  );
}

export default App;
