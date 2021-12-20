// import { searchResults } from "../../data/search_response";
import { facetModel } from "../../dataModels/metadata";
import Facet from "./Facet";

const Filters = (props: { facetList : facetModel[] }) => {

    return (
        <div id={"filter-panel"}
            className="w3-panel">
            <h3>Filters:</h3>
            <form >
                {
                    props.facetList.map((fc) => (
                        <Facet facet={fc} key={fc.key} />
                    ))
                }
                <input type="button" value="FILTER" className="w3-bar-item w3-button w3-round-large w3-blue w3-right" disabled={true}/>
            </form>
        </div>
    );
};

export default Filters;
