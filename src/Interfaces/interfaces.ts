export interface userDataInterface {

    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": address,
    "phone": string,
    "website": string,
    "company": company

}[]

export interface SelecteduserDataInterface {

    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": address,
    "phone": string,
    "website": string,
    "company": company

}
export interface address {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": geo
}
export interface geo {
    "lat": number,
    "lng": number,
}

export interface company {
    "name": string,
    "catchPhrase": string,
    "bs": string
}
