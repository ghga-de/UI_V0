// import { searchResults } from "../../data/search_response";
import { facetModel } from "../../dataModels/metadata";
import Facet from "./Facet";
import { FacetFilterModel } from "../../dataModels/searchfiltering";
import React from 'react';

interface filterProps {
    facetList: facetModel[],
    updateFilterDict: Function,
    selectedFacets: FacetFilterModel[],
    toggleHandler: Function,
    facetDict: {
        index: {
            facets: FacetFilterModel,
            checked: boolean
        }
    }
};

const Filters = (props: filterProps) => {

    var selectedFacets = props.selectedFacets;

    var checkedFacets : {facets: FacetFilterModel, checked: boolean}[] = Object.values(props.facetDict).filter((facet) => facet.checked === true)
    selectedFacets = Object.values(checkedFacets).map(facet=>Object.values(facet).filter(fac=>typeof fac !== 'boolean')[0]) as FacetFilterModel[]

    var anyChecked : boolean = checkedFacets.length > 0

    var anyFiltered : boolean = selectedFacets.length>0

    return (
        <div id={"filter-panel"}
            className="w3-panel">
            <h3>Filters:</h3>
            <form>
                {
                    props.facetList.map((fc, index) => (
                        // fc.options.length > 1 ? (
                            <Facet
                                facet={fc}
                                key={index}
                                selectedFacets={props.selectedFacets}
                                toggleHandler={props.toggleHandler} />
                        // ) : ("")
                        ))
                }
                <input type="button" value="Clear Applied"
                    className="w3-button w3-round-large w3-grey w3-left"
                    onClick={(e) => {
                        props.updateFilterDict([])
                    }}
                    disabled={!anyFiltered} />
                <input type="button" value="FILTER"
                    className="w3-bar-item w3-button w3-round-large w3-blue w3-right"
                    onClick={(e) => {
                        props.updateFilterDict(selectedFacets)
                    }}
                    disabled={!anyChecked} />
            </form>
        </div>
    );
};

export default Filters;
