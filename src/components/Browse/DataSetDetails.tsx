import React from 'react';
import { datasetModel } from '../../dataModels/metadata';
import { getDatasetDetails } from "../../backendCalls/metadata";
import KeyValueField from '../KeyValueField';
import LoadingIndicator from '../LoadingIndicator';
import '../components.css'
// import FileTable from './FileTable';


const DataSetDetails = (props: { datasetId: string }) => {
    const [dataset, setDataset] = React.useState<datasetModel | null>(null);

    // // on mount:
    React.useEffect(() => getDatasetDetails(props.datasetId, setDataset), [props.datasetId]);

    return dataset === null ? (
        <LoadingIndicator
            size="large"
            message="Loading dataset details. Please wait ..."
        />
    ) : (
        <div id={"dataset-details"}>
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
                <h3>Associated Experiment(s):</h3>
                {dataset.has_experiment.map(experiment => (<div className="experiment-div">
                    <KeyValueField key_="ID" value={experiment.id} />
                    <KeyValueField key_="Type" value={experiment.type} />
                </div>
                ))
                }
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
