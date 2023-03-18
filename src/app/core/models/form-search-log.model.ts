export class SearchLogParams {
    status: any;
    page?: number;
    limit?: number;
    hostName?: string;
    nameDatabase?: string

    constructor(props: {
        status: any;
        page?: number;
        limit?: number;
        hostName?: string;
        nameDatabase: string;
    }) {
        this.page = props?.page;
        this.limit = props?.limit;
        this.status = props?.status;
        this.hostName = props?.hostName;
        this.nameDatabase = props.nameDatabase;
    }
}
