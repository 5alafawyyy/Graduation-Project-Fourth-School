export class SignCategoryLookupDto{
    nameAr=null;
    nameEn=null;
    syncRef=null;
    id=0;
    image=null;
    value!:ImageValue ;
}

export interface ImageValue{
    id : number,
    image:string;
}

export interface StandardDetourDTO{
    code : string;
    syncRef : string;
}