import { datasetModel, datasetEmbeddedModel } from '../dataModels/metadata';
import { searchResponseModel } from "../dataModels/metadata";
import { FacetFilterModel } from '../dataModels/searchfiltering';

type getAllDatasetsSearchRespType = (
    callbackFunc: (hits: searchResponseModel) => void,
    filterQuery: FacetFilterModel[]
) => void;

const postHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:8000/',
}

export const getAllDatasetsSearchResp: getAllDatasetsSearchRespType = (callbackFunc, filterQuery) => {
    fetch(
        `${process.env.REACT_APP_SVC_SEARCH_URL}/rpc/search?document_type=Dataset&return_facets=true&skip=0&limit=1000`,
        {
            method: 'POST',
            headers: postHeaders,
            body: JSON.stringify({query: "*", filters: filterQuery})
        }
    )
        .then(response => response.json())
        .then(
            (data) => {
                callbackFunc(data);
            },
            (error) => {
                alert("An error occured while fetching the data.");
            }
        );
};

type getDatasetDetailsType = (
    datasetId: string,
    callbackFunc: (dataset: datasetModel) => void
) => void;

export const getDatasetDetails: getDatasetDetailsType = (datasetId, callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_REPOSITORY_URL}/datasets/${datasetId}?embedded=true`,
        {
            method: 'get'
        }
    )
        .then(response => response.json())
        .then(
            (data) => {
                callbackFunc(data);
            },
            (error) => {
                alert("An error occured while fetching the data.");
            }
        );
};

type getAllDatasetsType = (
    callbackFunc: (datasets: datasetModel[]) => void
) => void;

export const getAllDatasets: getAllDatasetsType = (callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_REPOSITORY_URL}/datasets`,
        {
            method: 'get'
        }
    )
        .then(response => response.json())
        .then(
            (data) => {
                callbackFunc(data);
            },
            (error) => {
                alert("An error occured while fetching the data.");
            }
        );
};

type getOneDatasetType = (
    datasetId: string,
    callbackFunc: (dataset: datasetEmbeddedModel) => void
) => void;

export const getOneDataset: getOneDatasetType = (datasetId, callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_REPOSITORY_URL}/datasets/${datasetId}?embedded=true`,
        {
            method: 'get'
        }
    )
        .then(response => response.json())
        .then(
            (data) => {
                callbackFunc(data);
            },
            (error) => {
                alert("An error occured while fetching the data.");
            }
        );
};
