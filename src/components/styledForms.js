import styled from "styled-components";

const IconWrapperStyledComponent=styled.div`
display: flex;
    width: 40px;
    background-color: hotpink;
    padding: 5px;
    border-radius: 50%;
    align-items: center;
    align-content: center;
`
const IconStyledComponent=styled.img`
width: 30px;
height: auto;
margin: 5px;
`
const Input=styled.input`
width:100%;
height:40px;
margin-top:10px;
margin-bottom:10px;
padding-left:6px;
background-color:black;
color:white;
border:1px solid grey;
font-size: .60em;

`
const CheckBoxSC=styled.input`
align-items:start;
align-content: start;
height: 15px;
width: 15px;
cursor:pointer;
padding:-100px;
color:black;
margin-top:15px;
`
const ConfirmButtonSC=styled.button`
width:100%;
height:30px;
margin:5px;
margin-top:25px;
padding-left:6px;
background-color: rgb(131, 203, 236);
color:black;
border:1px solid grey;
border-radius:5px;
font-size: .60em;
`
const ForgetPasswordButtonSC=styled.button`

background-color:black;
color:rgb(131, 203, 236);
font-size: .4em;
border: solid black;
margin-top:10px;

`
const CopyrightParagraphSC=styled.p`
font-size: .4em;
color:grey;
margin-top:20px;
margin-bottom:0;
padding-top:20px;
`

export  {IconWrapperStyledComponent,IconStyledComponent,Input,CheckBoxSC,
    ConfirmButtonSC,ForgetPasswordButtonSC,CopyrightParagraphSC};