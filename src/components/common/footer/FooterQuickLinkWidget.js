import React, { Component } from 'react'

class FooterQuickLinkWidget extends Component {
    state = {
        title: 'Liens',
        links: [
            {
                path: 'https://www.res-and-co.fr/qui-sommes-nous/',
                text: 'Qui sommes-nous ?',
            },
            {
                path: 'https://www.res-and-co.fr/nos-partenaires/',
                text: 'Nos partenaires',
            },
            {
                path: 'https://www.res-and-co.fr/rejoignez-nous/',
                text: 'Nous rejoindre',
            },
            {
                path: 'https://www.res-and-co.fr/faq/',
                text: 'FAQ',
            },
            {
                path: 'https://www.res-and-co.fr/blog/',
                text: 'Blog',
            },
        ],
    }
    render() {
        return (
            <>
                <div className="col-lg-3 column-td-6">
                    <div className="footer-item">
                        <h4 className="footer__title">{this.state.title}</h4>
                        <ul className="list-items">
                            {this.state.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.path}>{link.text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default FooterQuickLinkWidget
