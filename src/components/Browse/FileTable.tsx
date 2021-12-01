import { datasetFileModel } from "../../dataModels/metadata";
// import { bytesToGB } from '../../utils/funcUtils';


const TH = (props: {children: any}) => (
    <th
           className="w3-text-indigo" 
        style={{padding: "8px"}}
    >
        {props.children}
    </th>
);


const TD = (props: {children: any}) => (
    <td
        style={{padding: "8px"}}
    >
        {props.children}
    </td>
);


const FileTable = (props: {files: datasetFileModel[]}) => (
    <table className="w3-table">
        <thead>
            <tr>
                <TH>Accession ID</TH>
                {/* <TH>Name</TH> */}
                <TH>Format</TH>
                {/* <TH>Category</TH> */}
                {/* <TH>Size [GB]</TH> */}
            </tr>
        </thead>
        <tbody>
            {props.files.map( (file) =>(
                <tr key={file.accession}>
                    <TD>{file.accession}</TD>
                    {/* <TD>{file.name}</TD> */}
                    <TD>{file.format}</TD>
                    {/* <TD>{file.category}</TD> */}
                    {/* <TD>{bytesToGB(file.size)}</TD> */}
                </tr>
            ))}    
        </tbody>
    </table>
);

export default FileTable;
