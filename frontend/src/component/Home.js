import React, { component } from "react";
import ContainerDesing from "./ContainerDesing";
import { withRouter } from "react-router-dom";






//<FixedMenuLayout/>
class Home extends React.Component {
    render() {
        return (
            <div>
               
                    
               <ContainerDesing/>
                
            </div>
        )
    }
}
export default withRouter(Home);