import React, { Component } from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

export default class GeneralHeader extends Component {
    componentDidMount() {
        const { $ } = window

        $(window).on('scroll', function () {
            //header fixed animation and control
            if ($(window).scrollTop() > 10) {
                $('.header-menu-wrapper').addClass('header-fixed')
            } else {
                $('.header-menu-wrapper').removeClass('header-fixed')
            }
        })
    }

    state = {
        logo: require('../../assets/images/logo-resandco-sable.png'),
    }
    render() {
        return (
            <>
                <header className="header-area">
                    <div className="header-menu-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-full-width">
                                        {/* Logo */}
                                        <div className="logo">
                                            <Logo url={this.state.logo} />
                                        </div>

                                        {/* Navbar */}
                                        <Navbar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
