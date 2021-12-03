import Header from './Header';
import Footer from './Footer';
import './components.css';
import { moduleIds } from '../utils/modules';
import { getCurrentUser } from '../utils/funcUtils';
import RequireAuth from './RequireAuth';
import modules from './modules';

const Main = (props: {moduleFocus: moduleIds, moduleTitle: string}) => {
    const currentUser = getCurrentUser();

    document.title = props.moduleTitle + " | GHGA";

    return (
        <div
        style={{padding:"20px"}}
        >
            <Header 
                moduleFocus={props.moduleFocus}
            />
                {(modules[props.moduleFocus].authRequired && !currentUser) ? (
                    <RequireAuth />
                ) : (
                    modules[props.moduleFocus].component
                )}
            <Footer/>
        </div>
    );
};

export default Main;
