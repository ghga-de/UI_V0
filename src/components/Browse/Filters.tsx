import { searchResults } from "../../data/search_response";
import { facetModel } from "../../dataModels/metadata";
import Facet from "./Facet";

const Filters = () => {

    const facetList: facetModel[] = searchResults[0].facets;

    return (
        <div style={{ width: "300px", marginRight: "20px", border: "1px solid rgba(17,45,233,0.2)", flexShrink: 0, backgroundColor: "rgba(17,45,233,0.05)", height:"max-content" }}
            className="w3-panel">
            <h3>Filters:</h3>
            <form >
                {
                    facetList.map((fc) => (
                        <Facet facet={fc} key={fc.key} />
                    ))
                }
                <input type="button" value="FILTER" className="w3-bar-item w3-button w3-round-large w3-blue w3-right" style={{width:"150px", margin: "24px 0 12px"}} disabled={true}/>
            </form>
        </div>
    );
};

export default Filters;
