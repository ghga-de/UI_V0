// This module contains hardcoded metadata on datasets
// Later this will be served by the backend

import { datasetModel } from "../dataModels/metadata"

export const dsList: datasetModel[] = [
    {
        id: 0,
        uuid: "c8f776eac4b94a98970482bf354be859",
        title: "Test Dataset 1",
        description: "Test Dataset",
        type: "Study",
        files: [],
        has_study: "No",
        creation_date: "2021-11-24T16:47:42Z",
    },
    {
        id: 1,
        uuid: "e772687cd7c04adda8e788f5fac2c519",
        title: "Test Dataset 2",
        description: "Test Dataset",
        type: "Study",
        files: [],
        has_study: "No",
        creation_date: "2021-11-24T16:48:17Z",
    },
    {
        id: 2,
        uuid: "417c1549d049488c9f0bea521f884b44",
        title: "Test Dataset 3",
        description: "Test Dataset",
        type: "Study",
        files: [],
        has_study: "No",
        creation_date: "2021-11-24T16:48:26Z",
    },
]
