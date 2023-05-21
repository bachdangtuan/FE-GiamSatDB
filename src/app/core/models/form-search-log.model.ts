export class SearchLogParams {
    status: any;
    page?: number;
    limit?: number;
    hostName?: string;
    nameDatabase?: string
    nameVirtual?:string
    constructor(props: {
        status: any;
        page?: number;
        limit?: number;
        hostName?: string;
        nameDatabase: string;
        nameVirtual:string;
    }) {
        this.page = props?.page;
        this.limit = props?.limit;
        this.status = props?.status;
        this.hostName = props?.hostName;
        this.nameDatabase = props.nameDatabase;
        this.nameVirtual= props.nameVirtual;
    }
}
