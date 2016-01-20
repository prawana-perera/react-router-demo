import React, { Component } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

import '../css/style.scss';

export default class Main extends Component {

  constructor(props) {
   super(props);
   this.onItemTouchTap = this.onItemTouchTap.bind(this);
 }

  onItemTouchTap(event, item) {
    console.log('menu item clicked. -> ' + item.props.value);
    this.props.history.push(item.props.value);
  };

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xs-12'>
            <AppBar
              title='Test'
              showMenuIconButton={false}
              iconElementRight={
                <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  onItemTouchTap={this.onItemTouchTap}
                >
                  <MenuItem primaryText="Home" value="/" />
                  <MenuItem primaryText="About" value="/about" />
                  <MenuItem primaryText="Contact" value="/contact" />
                </IconMenu>
              }
            />
          </div>
        </div>
        <div className='row'>
            <div className='col-xs-2'>
              <List>
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
              </List>
            </div>
            <div className='col-xs-10'>
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }

};
