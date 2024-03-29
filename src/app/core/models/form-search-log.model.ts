export class SearchLogParams {
    status: any;
    page?: number;
    limit?: number;
    hostName?: string;
    nameDatabase?: string
    nameVirtual?: string
    container?: string
    virtual_id?: string

    constructor(props: {
        status: any;
        page?: number;
        limit?: number;
        hostName?: string;
        nameDatabase: string;
        nameVirtual: string;
        container: string;
        virtual_id: string;
    }) {
        this.page = props?.page;
        this.limit = props?.limit;
        this.status = props?.status;
        this.hostName = props?.hostName;
        this.nameDatabase = props.nameDatabase;
        this.nameVirtual = props.nameVirtual;
        this.container = props.container;
        this.virtual_id = props.virtual_id;
    }
}
