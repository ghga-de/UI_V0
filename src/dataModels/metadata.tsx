export interface datasetSampleModel {
    id: string;
    tissue: string,
}

export interface datasetFileModel {
    accession: string;
    format: string,
}

export interface datasetProjectModel {
    id: string,
    title:string
}

export interface datasetExperimentModel {
    id: string,
    type: string,
    has_sample: datasetSampleModel[]
    has_file: datasetFileModel[]
}

export interface datasetContentModel {
    id: string;
    accession: string,
    title: string,
    description: string,
    type: string[],
    has_study: string,
    has_project: datasetProjectModel[]
    has_experiment: datasetExperimentModel[]
}

export interface datasetModel {
    document_type: string;
    id: string,
    context: string | null,
    content: datasetContentModel[],
}; 


export interface fileModel {
    id: string;
    name: string,
    size: number,
    format: string,
    category: string,
    checksum: string,
    creation_date: string,
}; 


export interface studyModel {
    id: string;
    title: string,
    abstract: string,
}; 


export interface datasetEmbeddedModel {
    id: string;
    title: string,
    description: string,
    type: string,
    files: fileModel[],
    has_study: studyModel,
    creation_date: string,
};

export interface hitContentModel {
    id: string;
    accession: string,
    title: string,
    description: string,
    type: string[],
    has_study: string,
};

export interface hitModel {
    document_type: string;
    id: string,
    context: string | null,
    content: hitContentModel[],
};

export interface facetOptionsModel {
    option: string;
    count: number,
};

export interface facetModel {
    key: string;
    title: string,
    options: facetOptionsModel[],
};

export interface searchResponse {
    hits: hitModel[];
    facets: facetModel[],
};
