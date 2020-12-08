import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as ROUTES from './routerList'

import Home from '../../pages/Home';
import UserValidation from '../../pages/UserValidation';
import Profile from '../../pages/UserValidation/Profile';
import Announcements from '../../pages/CompanyAnnouncements';
import Management from '../../pages/UsersManagement'
import NewAnnouncement from '../../pages/NewAnnouncement';
import Calendar from '../../pages/CompanyCalendar';

const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.NEWHOME} component={Home} />
        {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
        <Route exact path={ROUTES.USER} component={UserValidation} />
        <Route path={ROUTES.PROFILE} component={Profile} />
        <Route exact path={ROUTES.ANNOUNCEMENTS} component={Announcements} />
        <Route path={ROUTES.MANAGEMENT} component={Management} />
        <Route path={ROUTES.CALENDAR} component={Calendar} />
        <Route path={ROUTES.NEWANNOUNCEMENT} component={NewAnnouncement} />
      </Switch>
    </BrowserRouter>
  )
}

export default PrivateRoutes
