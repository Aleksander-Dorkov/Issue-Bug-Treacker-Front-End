import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import {UserLogin} from "../../views/user/login/UserLogin";
import {UserRegister} from "../../views/user/register/UserRegister";
import {AdminPage} from "../../views/user-roles/AdminPage";
import {UserDetails} from "../../views/user-roles/UserDetails";
import {AccountSettings} from "../../views/user/account-settings/AccountSettings";

function WebsiteRoutes() {
    return (
        <Switch>
            <Route exact path={'/users/login'}><UserLogin/></Route>
            <Route exact path={'/users/register'}><UserRegister/></Route>
            <Route exact path={'/users/account-settings/:username'}><AccountSettings/></Route>
            <Route exact path={'/admins/get-all-users'}><AdminPage/></Route>
            <Route exact path={'/admins/get-user-details-by-id/:userId'}><UserDetails/></Route>
            {/* @Put   todo /admins/update-user-by-id/{userId}*/}
            {/*/users/account-settings/${reduxState.userDetails.username}*/}
        </Switch>
    )
}

export {WebsiteRoutes}
