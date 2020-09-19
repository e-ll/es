import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Badge, Button, Link } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Desktop = ({ isAuthenticated, notificationsUnread, onShowNotification, onShowUserMenu }) => {
    const notificationsList = (
        <Badge badgeContent={notificationsUnread} color="secondary" onClick={onShowNotification} className="xm-1">
          <NotificationsIcon className="icon-s" />
        </Badge>
    );

    const authLinks = (
        <div className="hiddenDesk">
            {notificationsList}
            <Badge color="secondary" onClick={onShowUserMenu}>
                <PersonIcon className="icon-m" />
            </Badge>
        </div>
    );
    
    const guestLinks = (
      <div className="hiddenDesk">
        <Link className="white-link" href="https://yandex.ru/maps/54/yekaterinburg/?ll=60.640971%2C56.854188&mode=usermaps&source=constructorLink&um=constructor%3A22fa8454936361f900b9580234b923c0596ec191920f478543730d53c11fa881&z=13"
            >
          Ofline карта
        </Link>
        <Link className="white-link" component={RouterLink} to="/login">
          Войти
        </Link>
        {/* <Button className="secondary-color white-link" component={RouterLink} to="/register" variant="contained">
                Зарегистрироваться
            </Button> */}
      </div>
    );
    
    return isAuthenticated ? authLinks : guestLinks;
}

export default Desktop;