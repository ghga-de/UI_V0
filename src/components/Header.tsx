import './components.css';
import { moduleIds} from '../utils/modules';
import Logo from "../logo.png"
// import { Link } from "react-router-dom";
// import { getCurrentUser } from '../utils/funcUtils';
// import modules from './modules';
// interface barItemProps {
//     children: any;
//     moduleId: moduleIds;
//     moduleFocus: moduleIds;
//     isHome?: boolean;
//     className?: string;
// };
interface topBarProps {
    moduleFocus: moduleIds;
}
// const BarItem = (props: barItemProps) => {
//     // if authentication is required for the
//     // corresponding module,
//     // only render the BarItem if user is logged in
//     const currentUser = getCurrentUser();
    
//     return (modules[props.moduleId].authRequired && !currentUser) ? (
//         <span></span>
//     ) : (
//         <Link 
//             to={`/${props.moduleId}`}
//         >
//             <button
//                 className={
//                     "w3-container w3-button w3-round-xlarge" +
//                     (props.className ? ` ${props.className}` : "") +
//                     (props.isHome ? (
//                             " w3-green"
//                         ) : (
//                             (props.moduleFocus === props.moduleId ? " w3-light-grey" : "")
//                     )) 
//                 }
//                 style={{height: "50px", marginRight: "10px"}}
//             >
//                 {props.children}
//             </button>
//         </Link>
//     );
// };
const Header = (props: topBarProps) => {
    return (
        <header className="header_area">
            <div className="top_menu row m0">
                <div className="container">
                    <div className="float-start">
                        <a href="https://ghga-dev.wacontest.demailto:ghga-office@dkfz.de" className="dn_btn"><i className="ti-email"></i>ghga-office@dkfz.de</a>
                    </div>
                    <div className="float-end">
                        <ul className="list header_social">
                            <li>
                                <a href="https://ghga-dev.wacontest.de/" title="Twitter">
                                    <i className="ti-twitter-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/" title="GitHub">
                                    <i className="ti-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://ghga-dev.wacontest.de/" title="YouTube">
                                    <i className="ti-youtube"></i>
                                </a>
                            </li>
                        </ul>
                        <ul id="language_menu" className="language-menu">
                            <li>
                                <a href="https://ghga-dev.wacontest.de/de/mission/teilprojekte" hrefLang="de" title="Deutsch">
                                    <span>DE</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a href="https://ghga-dev.wacontest.de/" className="navbar-brand logo_h">
                            <img src={Logo} alt="The German Human Genome-Phenome Archive" title="The German Human Genome-Phenome Archive"></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item submenu dropdown">
                                    <a href="https://ghga-dev.wacontest.de/about-us" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About us
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/about-us/team" className="nav-link">
                                                Team
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/institutions" className="nav-link">
                                                Institutions
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/about-us/contact" className="nav-link">
                                                Contact
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/institutions/jobs" className="nav-link">
                                                Jobs
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href="https://ghga-dev.wacontest.de/mission" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Mission
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/mission/mission-statement" className="nav-link">
                                                Mission and Goals
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/mission/task-areas" className="nav-link">
                                                Workstreams
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/mission/partners" className="nav-link">
                                                Partners
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href="https://ghga-dev.wacontest.de/standard-titel" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Community
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/test" className="nav-link">
                                                Cancer
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/standard-titel/default-title" className="nav-link">
                                                Data protection
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/standard-titel/rare" className="nav-link">
                                                Rare Disease
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href="https://ghga-dev.wacontest.de/news-events" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        News &amp; Events
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/news-events/news" className="nav-link">
                                                News
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/default-title" className="nav-link">
                                                Events
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/news-events/publications" className="nav-link">
                                                Publications
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href="https://ghga-dev.wacontest.de/resources" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Resources
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="/browse" className="nav-link">
                                                Portal
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/resources/workflows" className="nav-link">
                                                Workflows
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://ghga-dev.wacontest.de/resources/consent-tools" className="nav-link">
                                                Consent Tools
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="language-menu-item">
                                    <a href="https://ghga-dev.wacontest.de/de/mission/teilprojekte" hrefLang="de" title="Deutsch">
                                        <span>DE</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header;
