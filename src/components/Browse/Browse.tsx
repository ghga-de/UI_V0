import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
import DataSetList from './DatasetList';
import Filters from './Filters';
import { facetModel, hitModel, searchResponseModel } from '../../dataModels/metadata';
import { getAllDatasetsSearchResp } from '../../backendCalls/metadata';

const Browse = () => {

    // list of all datasets, null if not loaded yet
    const [searchResults, setSearchResp] = React.useState<searchResponseModel | null>(null);

    // on mount:
    React.useEffect(() => getAllDatasetsSearchResp(setSearchResp), [])

    var dsList: hitModel[] | null;
    var facetList: facetModel[] | null;

    dsList = null;
    facetList = null

    if (searchResults !== null) {
        if (searchResults.hits.length > 0) {
            dsList = searchResults.hits;
            facetList = searchResults.facets;
        }
        else
        {
            dsList = [];
            facetList = [];
        }
    }

    return (
        <div style={{ display: "flex", width: "100%" }}>
            {
                facetList == null ? ("") : (
                    <Filters facetList={facetList} />
                )
            }
            <div
                className="w3-panel foreground"
                style={{ height: "calc(100% - 70px)", flexGrow: 20 }}
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
                            <div><div className="w3-panel w3-round-large" style={{ display: "inline-block", backgroundColor: "rgba(196,52,34,0.4)", padding: "12px", border: "1px solid rgba(196,52,34,0.5)" }}>
                                Total datasets: {dsList.length.toString()}
                            </div>
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
