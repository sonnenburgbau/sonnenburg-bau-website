import React from 'react';
import { Link } from 'gatsby';
import Navbar from './navbar';
import Logo from './logo';

const Header = ({ siteTitle }) => (
	<>
	<section className="hero is-primary is-small is-hidden-touch">
		<div className="hero-body">
			<div className="container has-text-centered">
				<Link to="/">
					<Logo width="540" height="101" />
				</Link>
			</div>
		</div>
	</section>
	<Navbar />
	</>
);

export default Header;
