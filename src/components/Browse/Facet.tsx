import { facetModel } from "../../dataModels/metadata";
import '../components.css';
import '../../w3.css';

interface facetProps {
    facet: facetModel;
};

const Facet = (props: facetProps) => {
    return (
        <div className="w3-round-xlarge" style={{ backgroundColor: "white", margin: "12px -4px", padding: "12px", border:"1px solid rgba(17,45,233,0.2)" }}>
            {props.facet.title}
            <hr style={{ margin: "8px 0 2px" }} />
            {
                props.facet.options.map((opt) => (
                    <div style={{ display: "flex", padding: "4px" }}>
                        <input type="checkbox" id={opt.option} value={opt.option} name={props.facet.key} onChange={(e) => {
                            // console.log(document.querySelectorAll('input[name="'+props.facet.key+'"]:checked'));
                        }}>
                        </input>
                        <label htmlFor={opt.option} style={{ paddingLeft: "5px", width: "100%" }}>
                            <table style={{ width: "100%" }}>
                                <tbody>
                                <tr style={{ width: "100%" }}>
                                    <td style={{}}>{opt.option}</td>
                                    <td style={{ display: "inline-block", textAlign: "right", width: "100%" }}>{opt.count}</td>
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
