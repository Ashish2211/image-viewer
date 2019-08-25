import React, { Component } from 'react';
import './Home.css';
import '../../screens/login/Login.css';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
//import IconButton from '@material-ui/core/IconButton';
import { IconButton } from '@material-ui/core';

class Home extends Component {

    render() {
        return (
            <div>
                <header className="app-header" >
                    <div className="logo"> Image Viewer</div>
                    <div>
                        <form className="searchForm">
                            <input className="searchInput" type="text" placeholder="Search..."/>
                            <SearchIcon className ="searchIcon"fontSize="default"></SearchIcon>
                        </form>
                    </div>
                    <IconButton class = "profileIcon" size="medium"></IconButton>
                </header>
            </div>
        )
    }

}

export default Home;