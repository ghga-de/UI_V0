import { searchResults } from "../../data/search_response";
import { facetModel } from "../../dataModels/metadata";
import Facet from "./Facet";

const Filters = () => {

    const facetList : facetModel[] = searchResults[0].facets;

    return (
        <div style={{ width: "250px", marginRight: "20px", border: "2px solid rgba(17,45,233,0.2)", flexShrink:0}}
            className="w3-panel w3-round-large">
                <h3>Filters:</h3>
            {
                facetList.map((fc) => (
                    <Facet facet={fc} key={fc.key} />
                // )
                // console.log(fc)
                ))
            }
        </div>
    );
};

export default Filters;
