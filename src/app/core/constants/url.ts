// Servide Nodejs
export const LINK = 'http://10.0.0.210:5000'
// Service DISK
export const LINK_LARAVEL='http://10.0.0.210:8000'

// export const LINK = 'http://localhost:5000'

export const API_URL = {
    LIST_LOG: `${LINK}/api/databases/total`,
    LIST_PROJECT: `${LINK}/api/projects/detail`,
    LIST_PHYSICAL_MACHINE: `${LINK}/api/physicalmachine/detail`,
    LIST_VIRTUAL_MACHINE: `${LINK}/api/virtualmachine/getnameVM`,
    LIST_CONTAINER: `${LINK}/api/servicecontainer/list`,
    LIST_DISK:`${LINK_LARAVEL}/api/check-disk/get-disk`
}

