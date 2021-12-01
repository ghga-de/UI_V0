import { hitModel } from '../../dataModels/metadata';
import DataSet from './DataSet';

interface dataSetListProps {
    datasets: hitModel[];
};

const DataSetList = (props: dataSetListProps) => (
    <div style={ {overflow:"auto"} }>
            {
                props.datasets.map( (hit) => (
                            <DataSet 
                                key={hit.id} 
                                dataset={hit}
                                hasFocus={false}
                            />
                    )
                )
            }
    </div>
);


export default DataSetList;
