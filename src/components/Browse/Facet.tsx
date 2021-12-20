import { facetModel } from "../../dataModels/metadata";
import '../components.css';
import { FacetFilterModel } from "../../dataModels/searchfiltering";
import '../../w3.css';

interface facetProps {
    facet: facetModel;
    toggleHandler: Function;
    selectedFacets: FacetFilterModel[];
};

const Facet = (props: facetProps) => {
    return (
        <div className="w3-round-xlarge" id={"facet-panel"}>
            {props.facet.key}
            <hr/>
            {
                props.facet.options.map((opt) => (
                    <div key={opt.option}>
                        <input
                        type="checkbox"
                        id={opt.option}
                        value={opt.option}
                        name={props.facet.key}
                        onChange={(e) => {
                            props.toggleHandler({
                                index: props.facet.key + ":" + opt.option,
                                facet: {
                                    key: props.facet.key,
                                    value: opt.option
                                },
                                checked: e.target.checked
                            });
                        }}
                        defaultChecked={props.selectedFacets.filter(facet=>(facet.key===props.facet.key && facet.value===opt.option)).length > 0}
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
