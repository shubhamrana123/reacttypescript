
export interface IInputFields {
    required: boolean,
    maxLength: number,
    minLength: number,
}
export interface IInputProps {
    controller: string,
    label: string,
    type: string,
    fields: IInputFields,
    errors: any,

    register: (controller: string, fields: IInputFields) => {},
}
export interface ICardProps {

}