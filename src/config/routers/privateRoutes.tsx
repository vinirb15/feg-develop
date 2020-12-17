import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as ROUTES from './routerList'

import Home from '../../pages/Home';
import UserValidation from '../../pages/UserValidation';
import Profile from '../../pages/UserValidation/Profile';
import Announcements from '../../pages/Announcements';
import Management from '../../pages/UsersManagement'
import NewAnnouncement from '../../pages/NewAnnouncement';
import CompanyAnnouncement from '../../pages/CompanyAnnouncement';
import LocalAnnouncement from '../../pages/LocalAnnouncement';
import Calendar from '../../pages/CompanyCalendar';

const PrivateRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.NEWHOME} component={Home} />
        {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
        <Route exact path={ROUTES.USER} component={UserValidation} />
        <Route exact path={ROUTES.PROFILE} component={Profile} />
        <Route exact path={ROUTES.ANNOUNCEMENTS} component={Announcements} />
        <Route exact path={ROUTES.NEWANNOUNCEMENT} component={NewAnnouncement} />
        <Route path={ROUTES.ANNOUNCEMENTCOMPANY} component={CompanyAnnouncement} />
        <Route path={ROUTES.ANNOUNCEMENTLOCAL} component={LocalAnnouncement} />
        <Route path={ROUTES.MANAGEMENT} component={Management} />
        <Route path={ROUTES.CALENDAR} component={Calendar} />
      </Switch>
    </BrowserRouter>
  )
}

export default PrivateRoutes
