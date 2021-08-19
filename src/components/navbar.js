import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import Logo from './logo'

const Navbar = () => {
	const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

	return(
	  <StaticQuery
		query={graphql`
		  query NavbarQuery {
			leistungenJson {
				leistungen {
					title
					link
				}
			}
		  }
		`}
		render={data => (
			<nav className="navbar is-spaced is-info is-primary-mobile">
		<div className="navbar-brand is-hidden-desktop">
		<Link className="navbar-logo" to="/">
			<Logo width="217" height="40" />
		</Link>

		<a onClick={() => setHamburgerIsActive(!hamburgerIsActive)} role="button" className={`navbar-burger burger ${hamburgerIsActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
		</div>

		<div id="navbarBasicExample" className={`navbar-menu ${hamburgerIsActive ? 'is-active' : ''}`}>
			<div className="navbar-start" style={{flexGrow: 1, justifyContent: 'center'}}>
				{data.leistungenJson.leistungen.map((e, i) => (
					<Link to={e.link} key={i} className="navbar-item is-size-4 has-text-primary has-text-weight-bold">
						{e.title}
					</Link>
				))
			}
			</div>
		</div>
	</nav>
		)}
	  />
	)}

export default Navbar;
