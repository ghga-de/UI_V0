import React from 'react';
import { datasetSampleModel } from '../../dataModels/metadata';
// import { datasetEmbeddedModel } from "../../dataModels/metadata";
// import { getOneDataset } from "../../backendCalls/metadata";
import KeyValueField from '../KeyValueField';
import LoadingIndicator from '../LoadingIndicator';
import FileTable from './FileTable';


const DataSetDetails = (props: { datasetId: string }) => {
    // const [dataset, setDataset] = React.useState<datasetEmbeddedModel|null>(null);

    // // on mount:
    // React.useEffect( () => getOneDataset(props.datasetId, setDataset), []);

    const dataset = require('../../data/datasets/' + props.datasetId).default[0];

    return dataset === null ? (
        <LoadingIndicator
            size="large"
            message="Loading dataset details. Please wait ..."
        />
    ) : (
        <div style={{ padding: "4px 12px 0" }}>
            <div className="w3-container">
                <h3>Details:</h3>
                <KeyValueField key_="Description" value={dataset.content[0].description} />
            </div>
            <hr />
            <div className="w3-container">
                <h3>Associated Study:</h3>
                <KeyValueField key_="ID" value={dataset.content[0].has_study} />
            </div>
            <hr />
            <div className="w3-container">
                <h3>Associated Project:</h3>
                <KeyValueField key_="ID" value={dataset.content[0].has_project[0].id} />
                <KeyValueField key_="Title" value={dataset.content[0].has_project[0].title} />
            </div>
            <hr />
            <div className="w3-container">
                <h3>Associated Experiment:</h3>
                <KeyValueField key_="ID" value={dataset.content[0].has_experiment[0].id} />
                <KeyValueField key_="Type" value={dataset.content[0].has_experiment[0].type} />
                <div className="w3-container">
                    <hr />
                    <h5>Samples:</h5>
                    {dataset.content[0].has_experiment[0].has_sample.map((sample: datasetSampleModel) =>
                    (<div><KeyValueField key_="Sample ID" value={sample.id} />
                        <KeyValueField key_="Sample Tissue" value={sample.tissue} /></div>)
                    )}
                </div>
                <hr />
                <h3>Files:</h3>
                <FileTable files={dataset.content[0].has_experiment[0].has_file} />
            </div>
            <hr />
        </div>
    );

};

export default DataSetDetails;
