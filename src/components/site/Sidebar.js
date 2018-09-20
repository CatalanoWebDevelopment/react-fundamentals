import React from 'react'

import { 
    Route, 
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponent from './FunctionalComponent'
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp'
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp'
import FriendsListApp from '../apps/friends-list/FriendsListApp'
import Video from '../apps/YouTubeApi/Video'


const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rationale">Rationale</Link></li>
        <li><Link to="/functionalcomponent">Functional Component</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/timer">Timers</Link></li>
        <li><Link to="/reactconceptslist">React Concepts Checklist</Link></li>
        <li><Link to="/friends-list">Friends List Application</Link></li>
        <li><Link to='/youtube-search'>Search the YouTube Database</Link></li>
      </ul>
    </div>
    <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/resources"><Resources /></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/functionalcomponent"><FunctionalComponent /></Route>
            <Route exact path="/timer"><TimePiecesApp /></Route>
            <Route exact path="/reactconceptslist"><ReactConceptsApp /></Route>
            <Route exact path="/friends-list"><FriendsListApp /></Route>
            <Route exact path="/youtube-search"><Video /></Route>
        </Switch>
    </div>
  </div>

)
 
export default Sidebar;