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
                                <a href="https://ghga-dev.wacontest.de/about-us/team">Team</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/institutions">Institutions</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/about-us/contact">Contact</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/institutions/jobs">Jobs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Mission</h4>
                        <ul>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/mission/mission-statement">Mission and Goals</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/mission/task-areas">Workstreams</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/mission/partners">Partners</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Community</h4>
                        <ul>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/test">Cancer</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/standard-titel/default-title">Data protection</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/standard-titel/rare">Rare Disease</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>News &amp; Events</h4>
                        <ul>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/news-events/news">News</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/default-title">Events</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/news-events/publications">Publications</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-6 single-footer-widget">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="/browse">Portal</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/resources/workflows">Workflows</a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/resources/consent-tools">Consent Tools</a>
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
