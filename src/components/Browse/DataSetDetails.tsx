import React from 'react';
import { datasetModel, datasetSampleModel } from '../../dataModels/metadata';
import { getDatasetDetails } from "../../backendCalls/metadata";
import KeyValueField from '../KeyValueField';
import LoadingIndicator from '../LoadingIndicator';
import FileTable from './FileTable';


const DataSetDetails = (props: { datasetId: string }) => {
    const [dataset, setDataset] = React.useState<datasetModel|null>(null);

    // // on mount:
    React.useEffect( () => getDatasetDetails(props.datasetId, setDataset), [props.datasetId]);

    return dataset === null ? (
        <LoadingIndicator
            size="large"
            message="Loading dataset details. Please wait ..."
        />
    ) : (
        <div style={{ padding: "4px 12px 0" }}>
            <div className="w3-container">
                <h3>Details:</h3>
                <KeyValueField key_="Description" value={dataset.description} />
            </div>
            {/* <hr />
            <div className="w3-container">
                <h3>Associated Study:</h3>
                <KeyValueField key_="ID" value={dataset.has_study} />
            </div> */}
            <hr />
            <div className="w3-container">
                <h3>Associated Experiment:</h3>
                <KeyValueField key_="ID" value={dataset.has_experiment[0].id} />
                <KeyValueField key_="Type" value={dataset.has_experiment[0].type} />
                {/* <div className="w3-container">
                    <hr />
                    <h5>Samples:</h5>
                    {dataset.has_experiment[0].has_sample.map((sample: datasetSampleModel) =>
                    (<div><KeyValueField key_="Sample ID" value={sample.id} />
                        <KeyValueField key_="Sample Tissue" value={sample.tissue} /></div>)
                    )}
                </div>
                <hr />
                <h3>Files:</h3>
                <FileTable files={dataset.has_experiment[0].has_file} /> */}
            </div>
            <hr />
        </div>
    );

};

export default DataSetDetails;
