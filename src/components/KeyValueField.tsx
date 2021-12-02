export interface keyValueFieldProps {
    key_: string;
    value: string;
};

const KeyValueField = (props: keyValueFieldProps) => (
    <div style={{display:"flex"}}>
        <div><span className="w3-text-indigo" style={{ padding: "8px", paddingTop:"0", paddingLeft:"0"}}>{props.key_}:</span></div>
        <div><p>{props.value}</p></div>
    </div>
);

export default KeyValueField;
