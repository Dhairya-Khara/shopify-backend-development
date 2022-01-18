import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import AddItem from './components/AddItem'
import EditItem from './components/EditItem'
import NotFoundPage from './components/NotFoundPage'

class AppRouter extends React.Component {
    render() {
        return (
            // <Dashboard></Dashboard>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Dashboard}exact={true} />
                        <Route path="/dashboard/create" component = {AddItem} />
                        <Route path="/dashboard/edit/:id" component={EditItem} />
                        <Route component={NotFoundPage}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter