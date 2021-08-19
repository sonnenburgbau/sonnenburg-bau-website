import React from 'react';

import Layout from '../components/layout';

const PrivacyPage = () => (
    <Layout>
        <section className="section is-medium">
            <div className="container">
                <div class="content is-large is-medium-mobile">
                    <h1>Impressum</h1>
                    <p>
                        Sonnenburg Bau UG<br/>
                        Nideggerstrasse 11<br/>
                        53115 Bonn
                    </p>
                    <p>
                        Vertretungsberechtigter Geschäftsführer: Wladislaw Sonnenburg<br/>
                        Registergericht: Amtsgericht Bonn<br/>
                        Registernummer: HRB 26268
                    </p>
                    <p>
                        Tel.: 0179 8093 261<br/>
                        E-Mail: <a href="mailto:info@sonnenburg-bau.de">info@sonnenburg-bau.de</a>
                    </p>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE XX/XXX/XXXXX</p>
                </div>     
            </div>
	    </section>
    </Layout>
);

export default PrivacyPage;
