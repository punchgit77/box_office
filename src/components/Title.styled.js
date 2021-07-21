import styled from "styled-components";


export const TitleWrapper=styled.div`
         text-align: center;
         margin:0  0 40px;
         h1{
             color:${({theme})=>theme.mainColors.blue};
             letter-spacing: 5px;
             text-transform: uppercase;
             margin: 0 0 10px;


         }
         h1 span{
             color:blue;
             height:20px;
             border-radius:20px;
             font-size:45px;
         }
        

         p{
             margin:0;
             color:${({theme})=>theme.mainColors.dark};
             text-decoration: none;
         }
 

`;