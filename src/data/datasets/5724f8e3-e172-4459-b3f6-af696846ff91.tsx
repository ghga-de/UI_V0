import { datasetModel } from "../../dataModels/metadata"

export const dataset: datasetModel[] = [
    {
        document_type: "Dataset",
        id: "5724f8e3-e172-4459-b3f6-af696846ff91",
        context: null,
        content: [{
            id: "5724f8e3-e172-4459-b3f6-af696846ff91",
            accession: "EGAD00001000884",
            title: "Exome sequencing of serially transplanted genetically marked IC-enriched primary PDAC cultures.",
            description: "In order to elucidate whether newly acquired genetic alterations during serial transplantation of patient derived primary pancreatic cancer cultures contribute to the observed clonal dynamics in vivo, all coding genes of two patient derived primary cultures and derived genetically marked serial xenografts (1°/2°/3°) were sequenced.",
            type: [
                "Exome sequencing"
            ],
            has_study: "f0b6d49f-e2f5-43b0-83c1-a9508b8d4b63",
            has_project: [
                {
                    id: "proj002",
                    title: "INFORM"
                }
            ],
            has_experiment: [
                {
                    id: "exp004",
                    type: "WGS",
                    has_sample: [
                        {
                            id: "sample003",
                            tissue: "Cheek"
                        }
                    ],
                    has_file: [
                        {
                            accession: "file006",
                            format: "fastq"
                        },
                        {
                            accession: "file007",
                            format: "bam"
                        }
                    ]
                }
            ]
        }]
    }
]
export default dataset;
