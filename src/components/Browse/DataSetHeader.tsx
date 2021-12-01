import { datasetModel } from '../../dataModels/metadata';
import { formatIsoDate } from '../../utils/funcUtils';
import '../components.css';

const DataSetHeader = (props: {dataset: datasetModel}) => (
    <div 
        className="w3-bar w3-round-xlarge w3-hover-amber interactive-item-header"
    >   
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td    className="w3-text-indigo">
                        ID:
                    </td>
                    <td>{props.dataset.id}</td>
                </tr>
                <tr>
                    <td    className="w3-text-indigo">
                        Date:
                    </td>
                    <td>{formatIsoDate(props.dataset.creation_date)}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td    className="w3-text-indigo">
                        Title:
                    </td>
                    <td>{props.dataset.title}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td    className="w3-text-indigo">
                        Description:
                    </td>
                    <td>{props.dataset.description}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item w3-right">
            <i className="fas fa-chevron-down" />
        </div>
    </div>

);

export default DataSetHeader;
