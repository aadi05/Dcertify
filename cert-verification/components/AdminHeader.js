import React from 'react';
import { Menu } from 'semantic-ui-react';

const menuStyle = {
    fontSize:'17px',
    marginLeft:'0px'
}

export default () => {
    return (
        <Menu inverted style={menuStyle}>
            <Menu.Item>Admin Dcertify</Menu.Item>

            <Menu.Menu position="right">
                    <Menu.Item>Help</Menu.Item>
                    <Menu.Item>About</Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};