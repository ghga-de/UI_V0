import { facetModel } from "../../dataModels/metadata";
import '../components.css';
import '../../w3.css';

interface facetProps {
    facet: facetModel;
};

const Facet = (props: facetProps) => {
    return (
        <div>
            <div className="w3-round-large">
                {props.facet.title}:
                {
                    props.facet.options.map((opt) => (
                        <form style={{ paddingLeft: "5px" }}>
                            <input type="checkbox" id={opt.option} value={opt.option} name={props.facet.key} onChange={(e) => {
                                // console.log(document.querySelectorAll('input[name="'+props.facet.key+'"]:checked'));
                            }}></input>
                            <label htmlFor={opt.option} style={{ paddingLeft: "5px" }}>{opt.option} ({opt.count})</label>
                        </form>
                    )
                    )
                }
            </div>
            <hr />
        </div>
    )
};

export default Facet;
