import { facetModel } from "../../dataModels/metadata";
import '../components.css';
import '../../w3.css';

interface facetProps {
    facet: facetModel;
};

const Facet = (props: facetProps) => {
    return (
        <div className="w3-round-xlarge" id={"facet-panel"}>
            {props.facet.title}
            <hr/>
            {
                props.facet.options.map((opt) => (
                    <div>
                        <input type="checkbox" id={opt.option} value={opt.option} name={props.facet.key} onChange={(e) => {
                            // console.log(document.querySelectorAll('input[name="'+props.facet.key+'"]:checked'));
                        }}
                        className="facet-checkbox">
                        </input>
                        <label htmlFor={opt.option}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>{opt.option}</td>
                                    <td>{opt.count}</td>
                                </tr>
                                </tbody>
                            </table>
                        </label>
                    </div>
                )
                )
            }
        </div>
    )
};

export default Facet;
