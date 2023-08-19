export interface ResponseData<T> {
    status:string,
    errors:string[],
    data:T
}