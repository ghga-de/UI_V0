import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
import DataSetList from './DatasetList';
import Filters from './Filters';
import { facetModel, hitModel, searchResponseModel } from '../../dataModels/metadata';
import { getAllDatasetsSearchResp } from '../../backendCalls/metadata';
import '../components.css'
import { FacetFilterModel } from '../../dataModels/searchfiltering';

const Browse = () => {

    const [facetDict, setFacetDict] = React.useState<
        {
            index: {
                facets: FacetFilterModel,
                checked: boolean
            };
        }>(
            {
                "index": {
                    facets: {
                        key: "",
                        value: ""
                    },
                    checked: false
                }
            }
        );

    const toggleHandler = (facets: { index: string, facet: FacetFilterModel, checked: boolean }) => {
        setFacetDict((state) => ({
            ...state,
            [facets.index]: state[facets.index as keyof {
                index: [{
                    index: string,
                    facets: FacetFilterModel,
                    checked: boolean
                }];
            }]
                ? {
                    facet: {
                        key: facets.facet.key,
                        value: facets.facet.value
                    },
                    checked: facets.checked
                } : {
                    facet: {
                        key: facets.facet.key,
                        value: facets.facet.value
                    },
                    checked: facets.checked
                }
        }));
    };

    const [filterDict, setFilterDict] = React.useState<FacetFilterModel[]>([]);

    // list of all datasets, null if not loaded yet
    const [searchResults, setSearchResp] = React.useState<searchResponseModel | null>(null);

    // on mount:
    React.useEffect(() => getAllDatasetsSearchResp(setSearchResp, filterDict), [filterDict])

    var dsList: hitModel[] | null;
    var facetList: facetModel[] | null;

    dsList = null;
    facetList = null

    if (searchResults !== null) {
        if (searchResults.hits.length > 0) {
            dsList = searchResults.hits;
            facetList = searchResults.facets;
        }
        else {
            dsList = [];
            facetList = [];
        }
    }

    function updateFilterDict(selectedFacets: FacetFilterModel[]) {
        setFilterDict(selectedFacets)
    }

    return (
        <div id={"browse-panel"}>
            {
                facetList == null ? ("") : (
                    <Filters facetList={facetList} updateFilterDict={updateFilterDict} selectedFacets={filterDict} toggleHandler={toggleHandler} facetDict={facetDict} />
                )
            }
            <div
                className="w3-panel foreground"
                id={"datasets-panel"}
            >
                {
                    dsList == null ? (
                        <LoadingIndicator
                            size="large"
                            message="Loading the list of all datasets..."
                        />
                    ) : (
                        dsList.length === 0 ? (
                            <span>No datasets found.</span>
                        ) : (
                            <div><div className="w3-panel w3-round-large" id={"dataset-list-panel"}>
                                Total datasets: {dsList.length.toString()}
                            </div>
                            <div id={"selected-filters"}>
                                {filterDict.map(filter => {
                                    return (<div className='filter-widget w3-round-large'>
                                        <table><tbody><tr><td><input type="button" onClick={(e) => {
                                            var removedFilter = filterDict.filter(filt => !(filt.key === filter.key && filt.value === filter.value))
                                            toggleHandler({
                                                index: filter.key + ":" + filter.value,
                                                facet: {
                                                    key: filter.key,
                                                    value: filter.value
                                                },
                                                checked: false,
                                            })
                                            updateFilterDict(removedFilter)
                                            }} value={"X"}></input></td><td>
                                            {filter.key}: {filter.value}</td></tr></tbody></table>
                                    </div>)
                                })}</div><br/>
                                <DataSetList datasets={dsList} />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Browse;
