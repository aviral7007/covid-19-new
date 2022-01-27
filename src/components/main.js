import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COVID_DATA } from "./graphql";
import { useState } from "react";
  import Header from "./header";
 import Footer from "./Footer";
import {
  
  CovidTrakerContainer,
  CovidTrakerInnerContainer,
  HeaderBar,
  SearchBar,
  SearchButton,
  DataOuterContainer,
  PrimaryInfromation,
  Grid,
  Menu,
  ContentBox,
  Content1,
  Menucontainer,
 
  

} from "./style";


function Main() {
  const { getCode } = require("country-list");
  
  const [countrySearched, setCountrySearched] = useState("");
  const [getCovidData, { data, error }] = useLazyQuery(GET_COVID_DATA, {
    variables: { code: getCode(countrySearched) },
  });

  if (error)
    return (
      <h1 style={{ textAlign: "center", marginTop: "20%" }}>
        PLEASE ENTER RELEVANT COUNTRY NAME
      </h1>
    );
  if (data) 
   console.log(data);

  return (
   <Grid>
     <Header/>
     
    <Menu>
      
      <HeaderBar >Select Country</HeaderBar>
    <SearchBar
          // className="mx-3"
          type="text"
          placeholder="SEARCH COUNTRY............................"
          onChange={(event) => {
            setCountrySearched(event.target.value);
          }}
        />
        <SearchButton className="btn btn-light" onClick={() => getCovidData()}>
          Search
        </SearchButton>
        <Menucontainer>
          <h1>About us</h1>
          <h1>covid-relief</h1>
        </Menucontainer>
        
       </Menu>
       
       <CovidTrakerContainer>
     
       <CovidTrakerInnerContainer>
       
        
        {data ? (
          <>
            <DataOuterContainer>
              <ContentBox>
                <Content1>Country : {data.country.name}</Content1>
                <Content1>Region : {data.country.region.name}</Content1>
                <Content1>Sub-Region : {data.country.subRegion.name}</Content1>
              </ContentBox>
              <br></br>
              <ContentBox>
                <Content1>
                
                  Confirmed Cases :{data.country.latest.confirmed}
                
                </Content1>
                <Content1>
                
                  Deceased : {data.country.latest.deceased}
                
                </Content1>
                <Content1>
                   
                  LastUpdated : {data.country.latest.lastUpdated}
                
                </Content1>
              </ContentBox>
             
              
            </DataOuterContainer>
          </>
        ) : (
           <PrimaryInfromation>
          <h1>Covid Cases</h1>
           </PrimaryInfromation>
        )}

        
      </CovidTrakerInnerContainer><br></br><br/>
      
    </CovidTrakerContainer>
   
    <Footer/>
    </Grid>
  );
}

export default Main;
