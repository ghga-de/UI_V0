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

    const dsList = hits.filter((hit) =>
        hit.content[0].type.includes("Profiling collection") === true
        // console.log(hit.content[0].type.includes("Profiling collection"))
    );

    return (
        <div className="w3-panel">
            <div className="w3-container w3-center">
                <h1>
                    <i className="fas fa-search" />
                    Browse Our Catalogue of Datasets
                </h1>
            </div>
            {
            dsList == null ? (
                <LoadingIndicator
                    size="large"
                    message="Loading the list of all datasets..."
                />
            ) : (
                dsList.length === 0 ? (
                    <div style={{ display: "flex" }}>
                        <Filters />
                        <span>No datasets found.</span>
                    </div>
                ) : (
                    <div style={{ display: "flex" }}>
                        <Filters />
                        <DataSetList datasets={dsList} />
                    </div>
                )
            )
            }
        </div>
    );
};

export default Browse;
