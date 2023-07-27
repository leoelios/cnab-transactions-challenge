import ReactCodeInput from "react-code-input"

export default ({ onChange }: { onChange: (value: string) => {}}) => {
    return <ReactCodeInput onChange={onChange} inputMode="numeric" name="test" fields={5} />
}