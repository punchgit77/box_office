import styled from "styled-components";
import { SearchCard } from "../styled";

export const StyledShowcard=styled(SearchCard)`
                    .btns{
                    margin-top:15px ;
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    Link{
                        text-decoration-color:#000;
                        color:#000;
                        &:hover{
                            text-decoration-color:purple;
                            color:blue;
                            
                        }
                    }
                    button{ 
                        outline:none;
                        border:2px solid #8e8e8e;
                        border-radius: 15px;
                        padding:5px 20px;
                        background-color:#fff;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        &:hover{
                            cursor:pointer;
                        }

                    }
                }`;