import { searchResponse } from "../dataModels/metadata";

export const searchResults: searchResponse[] = [
    {
        hits: [
            {
                document_type: "Dataset",
                id: "d9320c3a-f641-476b-aed7-f4d5d6c48dfa",
                context: null,
                content: [
                    {
                        id: "d9320c3a-f641-476b-aed7-f4d5d6c48dfa",
                        accession: "EGAD00001000174",
                        title: "DATA_SET_Coverage_bias_sensitivity_of_variant_calling_for_4_WG_seq_tech",
                        description: "1006 Familial early onset gemrline CRC patients sequenced by the Molecular and Population Genetics group of the Institute of Cancer Research",
                        type: [
                            "Sample collection"
                        ],
                        has_study: "451129d4-9e08-43f8-8d46-e9050a58bda3"
                    }
                ]
            },
            {
                document_type: "Dataset",
                id: "b5b5b624-8cf6-4e97-9a89-800bd9fc617d",
                context: null,
                content: [
                    {
                        id: "b5b5b624-8cf6-4e97-9a89-800bd9fc617d",
                        accession: "EGAD00001000366",
                        title: "Whole genome bisufite sequencing for smoking and non-smoking mother-child pairs",
                        description: "WGBS data of whole blood samples from smoking and non-smoking mothers and their children at gestation/birth and follow-up years.",
                        type: [
                            "Profiling collection"
                        ],
                        has_study: "451129d4-9e08-43f8-8d46-e9050a58bda3"
                    }
                ]
            },
            {
                document_type: "Dataset",
                id: "5724f8e3-e172-4459-b3f6-af696846ff91",
                context: null,
                content: [
                    {
                        id: "5724f8e3-e172-4459-b3f6-af696846ff91",
                        accession: "EGAD00001000884",
                        title: "Exome sequencing of serially transplanted genetically marked IC-enriched primary PDAC cultures.",
                        description: "In order to elucidate whether newly acquired genetic alterations during serial transplantation of patient derived primary pancreatic cancer cultures contribute to the observed clonal dynamics in vivo, all coding genes of two patient derived primary cultures and derived genetically marked serial xenografts (1°/2°/3°) were sequenced.",
                        type: [
                            "Exome sequencing"
                        ],
                        has_study: "f0b6d49f-e2f5-43b0-83c1-a9508b8d4b63"
                    }
                ]
            }
        ],
        facets: [
            {
                "key": "dataset.type",
                "title": "Dataset Type",
                "options": [
                    {
                        "option": "Sample collection",
                        "count": 1
                    },
                    {
                        "option": "Profiling collection",
                        "count": 1
                    },
                    {
                        "option": "Exome sequencing",
                        "count": 1
                    }
                ]
            },
            {
                "key": "has_project.title",
                "title": "Project",
                "options": [
                    {
                        "option": "NAKO",
                        "count": 1
                    },
                    {
                        "option": "INFORM",
                        "count": 2
                    }
                ]
            },
            {
                "key": "has_experiment.has_sample.title",
                "title": "Sample",
                "options": [
                    {
                        "option": "Cheek",
                        "count": 1
                    },
                    {
                        "option": "Lung",
                        "count": 2
                    }
                ]
            },
            {
                "key": "has_experiment.has_file.format",
                "title": "File Format",
                "options": [
                    {
                        "option": "fastq",
                        "count": 2
                    },
                    {
                        "option": "bam",
                        "count": 2
                    }
                ]
            },
            {
                "key": "has_experiment.type",
                "title": "",
                "options": [
                    {
                        "option": "WGS",
                        "count": 2
                    },
                    {
                        "option": "RNAseq",
                        "count": 1
                    }
                ]
            }
        ],
    },
]
