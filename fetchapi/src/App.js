// import POSTapiAppLec53 from "./Lec 52 POST Method/MyApp";
// import FetchImage from "./FETCH Image/FetchImage";
import ParentCONTEXTAPI from "./CONTEXT API Yoshita Jain/Parent";
import ParentCONTEXTAPI2 from "./Context API Yoshita Jain part 2 of 1 vdo/Parent";
import UnsplashImage from "./FetchImageCHATGPT/fetch";
import ImageComponent from "./FetchImageCHATGPT/myfetch";
import GauravImageComponent from "./GAURAV Fetch Images/GauravFetchImage";

import POSTapiAppLec52 from "./Lec 52 POST Method/MyApp";
import POSTapiAppLec52B from "./Lec 52 POST Method/MyApp2";


import MyGetApiAppLec51 from "./Lec50 Fetch API GET Method/Lec50FethGetApiAPP";

import MyDeleteAPILec53B from "./Lec54 Delete Method in API/MyApp2";
import MyDeleteAPILec53C from "./Lec54 Delete Method in API/MyApp3";
import PreFilledLec55 from "./Lec55 Pre Filled form/MyApp2";
import UpdateLec56 from "./Lec56 Update data with api/MyUpdateAPI";
import MyPreviousStateLec57 from "./Lec57 Previous State in Functional component/myAPP";
import MyPreviousStateLec57B from "./Lec57 Previous State in Functional component/myApp2";
import MyPreviousPropsLec58 from "./Lec58 Previous Props with Hooks/MyApp";
import MyAppStateWithObjectLec59 from "./Lec59 State with Object/myStateWithObject";
import MyAppStateWithObjectLec59B from "./Lec59 State with Object/myStateWithObject2";
import Parent from "./PROPs Drilling by Jain/Parent";
import ParentSecondWay from "./Props Driling by Jain 2nd way/Parent";
import GetMyApi from "./Update and Delete API Yoshita Jain/GETmyApi";
import GetApiByAxios from "./Update and Delete API Yoshita Jain/Get";
import UpdateByAxios from "./Update and Delete API Yoshita Jain/update";
import ParentCONTEXTAPI3 from "./useContext by YOSHITA/Parent";
import UseMemoHook from "./useMemo hooks/useMemoHooks";

function App() {

  return (<>

    {/* Lec 51 GET API fetch */}

    <MyGetApiAppLec51 />


    <br /><br /><br /><hr /><hr />

    {/* Lec 53 POST API se data send */}
    <POSTapiAppLec52 />
    <POSTapiAppLec52B />
    {/* <POSTapiAppLec52C /> */}


    <br /><br /><br /><hr /><hr />
    {/* Lec54 Delete API */}

    {/* <MyDeleteAPILec53 /> */}

    <MyDeleteAPILec53B />
    <MyDeleteAPILec53C />




    <br /><br /><br /><hr /><hr />
    {/* fetch image */}
    {/* <FetchImage /> */}

    <h3>e</h3>
    {/* <UnsplashImage /> */}


    <ImageComponent />


    {/* Gaurav Images  */}
    <GauravImageComponent />


    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* PreFilled Lec55 */}
    <PreFilledLec55 />




    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Update api data lec 56 */}
    <UpdateLec56 />



    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Update api Yoshita Jain */}
    <UpdateByAxios />


    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Get api Yoshita Jain */}
    {/* <GetApiByAxios /> */}

    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Get my api based on Yoshita Jain concept */}
    {/* <GetMyApi /> */}


    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Lec57 Previous state in functional component */}
    <MyPreviousStateLec57 />

    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Lec57 Previous state in functional component */}
    <MyPreviousStateLec57B />


    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Lec58 Previous props with hooks */}
    <MyPreviousPropsLec58 />





    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Lec59 State with Object */}{/** Problem:- Jb 1 data ko update karte hai to other gayab  */}
    <MyAppStateWithObjectLec59 />

    <br /><br /><br /><br /><br /><br />
    {/* solution */}
    <MyAppStateWithObjectLec59B />




    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Props Drilling */}
    <Parent />


    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Props Drilling pass data using {name} i.e. inside {} */}
    <ParentSecondWay />




    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Context api */}
    <ParentCONTEXTAPI />




    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* Context api */}
    <ParentCONTEXTAPI2 />


    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* useContext  */}
    <ParentCONTEXTAPI3 />




    <br /><br /><br /><br /><br /><br /><hr /><hr /><hr /><hr />
    {/* useMemo Hooks */}
    <UseMemoHook />

  </>)
}
export default App;