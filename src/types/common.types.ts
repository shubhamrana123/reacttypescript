
export interface IInputFields {
    required: boolean,
    maxLength: number,
    minLength: number,
pattern:any
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
export interface IDrawerProps {
    anchor: "left" | "top" | "right" | "bottom" | undefined,

    width : number,

    open : boolean,

    onClose : ()=>void

    component : any
}