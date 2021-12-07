import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
// import { datasetModel } from '../../dataModels/metadata';
import DataSetList from './DatasetList';
// import { getAllDatasets } from "../../backendCalls/metadata";
import { searchResults } from "../../data/search_response";
import Filters from './Filters';

const Browse = () => {
    // list of all datasets, null if not loaded yet
    // const [dsList, setDsList] = React.useState<datasetModel[]|null>(null);

    // // on mount:
    // React.useEffect( () => getAllDatasets(setDsList), []);

    const hits = searchResults[0].hits;

    // const dsList = hits.filter((hit) =>
    //     hit.content[0].type.includes("Profiling collection") === true
    //     // console.log(hit.content[0].type.includes("Profiling collection"))
    // );

    var dsList = hits;

    return (
        <div style={{display:"flex", width:"100%"}}>
            <Filters />
            <div
                className="w3-panel foreground"
                style={{ height: "calc(100% - 70px)", flexGrow:20}}
            >
                <div className="w3-panel w3-round-large" style={{display:"inline-block", backgroundColor: "rgba(196,52,34,0.4)", padding:"12px", border: "1px solid rgba(196,52,34,0.5)"}}>
                    Total datasets: {dsList.length.toString()}
                </div>
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

                            <DataSetList datasets={dsList} />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Browse;
