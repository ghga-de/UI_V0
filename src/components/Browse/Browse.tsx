import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
// import { datasetModel } from '../../dataModels/metadata';
import DataSetList from './DatasetList';
// import { getAllDatasets } from "../../backendCalls/metadata";
import { dsList } from "../../data/datasets";

const Browse = () => {
    // list of all datasets, null if not loaded yet
    // const [dsList, setDsList] = React.useState<datasetModel[]|null>(null);

    // // on mount:
    // React.useEffect( () => getAllDatasets(setDsList), []);

    return (
        <div className="w3-panel">
            <div className="w3-container w3-center">
                <h1>
                    <i className="fas fa-search"/> &nbsp;
                    Browse Our Catalog of Datasets
                </h1>
            </div>
            {dsList == null ? (
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
            )}
        </div>
    );
};

export default Browse;
