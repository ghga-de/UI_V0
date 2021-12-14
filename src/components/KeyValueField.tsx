export interface keyValueFieldProps {
    key_: string;
    value: string;
};

const KeyValueField = (props: keyValueFieldProps) => (
    <div id={"keyvaluefield"}>
        <div><span className="w3-text-indigo">{props.key_}:</span></div>
        <div><p>{props.value}</p></div>
    </div>
);

export default KeyValueField;
