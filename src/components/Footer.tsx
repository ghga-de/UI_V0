import './components.css';

const Footer = () => {
    return(
        <footer className="footer-area area-padding-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>About us</h4>
                        <ul>
                            <li>
                                <a href="/about-us/team">Team</a>
                            </li>
                            <li>
                                <a href="/institutions">Institutions</a>
                            </li>
                            <li>
                                <a href="/about-us/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/institutions/jobs">Jobs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Mission</h4>
                        <ul>
                            <li>
                                <a href="/mission/mission-statement">Mission and Goals</a>
                            </li>
                            <li>
                                <a href="/mission/task-areas">Workstreams</a>
                            </li>
                            <li>
                                <a href="/mission/partners">Partners</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Community</h4>
                        <ul>
                            <li>
                                <a href="/test">Cancer</a>
                            </li>
                            <li>
                                <a href="/standard-titel/default-title">Data protection</a>
                            </li>
                            <li>
                                <a href="/standard-titel/rare">Rare Disease</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>News &amp; Events</h4>
                        <ul>
                            <li>
                                <a href="/news-events/news">News</a>
                            </li>
                            <li>
                                <a href="/default-title">Events</a>
                            </li>
                            <li>
                                <a href="/news-events/publications">Publications</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="/resources/portal">Portal</a>
                            </li>
                            <li>
                                <a href="/resources/workflows">Workflows</a>
                            </li>
                            <li>
                                <a href="/resources/consent-tools">Consent Tools</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <div id="c202" className="frame frame-default frame-type-list frame-layout-0">
                            <div className="cookie-set">Cookie Settings</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
