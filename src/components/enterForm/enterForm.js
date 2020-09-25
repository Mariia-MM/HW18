import React from "react";
import "./enterForm.css";
import 
{IconWrapperStyledComponent,
    Input,
    CheckBoxSC,
    ConfirmButtonSC,
    ForgetPasswordButtonSC,
    CopyrightParagraphSC} from "../styledForms";

export default class EnterForm extends React.Component{
    state={

    }
    render(){
        return(
            
                <div className="wrapper">
                    <IconWrapperStyledComponent>
                        
                     <img className="icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZD0iTTI1NiwzOTAuMDk1YzI2LjgxOSwwLDQ4Ljc2Mi0yMS45NDMsNDguNzYyLTQ4Ljc2MmMwLTI2LjgxOS0yMS45NDMtNDguNzYyLTQ4Ljc2Mi00OC43NjINCgkJCQljLTI2LjgxOSwwLTQ4Ljc2MiwyMS45NDMtNDguNzYyLDQ4Ljc2MkMyMDcuMjM4LDM2OC4xNTIsMjI5LjE4MSwzOTAuMDk1LDI1NiwzOTAuMDk1eiIvPg0KCQkJPHBhdGggZD0iTTQwMi4yODYsMTcwLjY2N2gtMjQuMzgxdi00OC43NjJDMzc3LjkwNSw1NC42MTMsMzIzLjI5MSwwLDI1NiwwUzEzNC4wOTUsNTQuNjEzLDEzNC4wOTUsMTIxLjkwNXY0OC43NjJoLTI0LjM4MQ0KCQkJCWMtMjYuODE5LDAtNDguNzYyLDIxLjk0My00OC43NjIsNDguNzYydjI0My44MWMwLDI2LjgxOSwyMS45NDMsNDguNzYyLDQ4Ljc2Miw0OC43NjJoMjkyLjU3MQ0KCQkJCWMyNi44MTksMCw0OC43NjItMjEuOTQzLDQ4Ljc2Mi00OC43NjJ2LTI0My44MUM0NTEuMDQ4LDE5Mi42MSw0MjkuMTA1LDE3MC42NjcsNDAyLjI4NiwxNzAuNjY3eiBNMTgwLjQxOSwxMjEuOTA1DQoJCQkJYzAtNDEuNjkxLDMzLjg5LTc1LjU4MSw3NS41ODEtNzUuNTgxczc1LjU4MSwzMy44OSw3NS41ODEsNzUuNTgxdjQ4Ljc2MkgxODAuNDE5VjEyMS45MDV6IE00MDIuMjg2LDQ2My4yMzhIMTA5LjcxNHYtMjQzLjgxDQoJCQkJaDI5Mi41NzFWNDYzLjIzOHoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                    </IconWrapperStyledComponent>
                    <p>Sign In</p>
                    <Input placeholder="Email Address*"></Input>
                    <Input placeholder="Password*"></Input>
                    <label className="checkBoxLabel">
                        <CheckBoxSC type="checkbox"  ></CheckBoxSC>
                         Remember me 
                    </label>
                    <ConfirmButtonSC>Sign In</ConfirmButtonSC>
                    <span className="buttonSpan">
                    <ForgetPasswordButtonSC>Forgot password?</ForgetPasswordButtonSC>
                    <ForgetPasswordButtonSC>Don`t have an account? Sign Up</ForgetPasswordButtonSC>
                    </span>
                    <CopyrightParagraphSC>Copyright © Your Website 2020.</CopyrightParagraphSC>
                    
               
                </div>
            
        )
    }
}