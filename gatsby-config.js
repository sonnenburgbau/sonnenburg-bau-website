const path = require(`path`)

module.exports = {
	pathPrefix: `/sonnenburg-bau`,
	siteMetadata: {
		title: 'Sonnenburg Bau',
		imageUrl: 'https://sonnenburg-bau.de/sonnenburg-bau.png',
		description: 'Beschreibung',
		keywords: `Keywords`,
		siteUrl: `https://sonnenburg-bau.de`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-htaccess',
			options: {
			  RewriteBase: true,
			  https: true,
			  www: true,
			  host: 'sonnenburg-bau.de',
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-json',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Sonnenburg Bau',
				short_name: 'Sonnenburg Bau',
				start_url: '/',
				background_color: '#006332',
				theme_color: '#006332',
				display: 'standalone',
				icon: 'src/images/sonnenburg-bau-icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
	]
};
