// column table Log
import {Select2Data} from "ng-select2-component";

export const COLUMN_LOG = [
    {
        name: 'method',
        label: 'Server & Tên DB',
        width: 150,
    },
    {
        name: 'os',
        label: 'Hệ điều hành',
        width: 150,
    },
    {
        name: 'ip',
        label: 'Địa chỉ IP',
        width: 150,
    },
    {
        name: 'url',
        label: 'Thư mục backup',
        width: 300,
    },
    {
        name: 'status',
        label: 'Trạng thái',
        width: 150,
    },
    {
        name: 'capacityFile',
        label: 'Dung lượng file',
        width: 150,
    },
    {
        name: 'DateBackup',
        label: 'Ngày Backup',
        width: 150,
    },
    {
        name: 'TimeBackupStart',
        label: 'Time Start',
        width: 50,
    },
    {
        name: 'TimeBackupEnd',
        label: 'Time Check',
        width: 150,
    },
];

export const COLUMN_MONITOR=[
    {
        name: 'name',
        label: 'Tên Máy Ảo',
        width: 250,
    },
    {
        name: 'ipaddress',
        label: 'Địa chỉ IP',
        width: 150,
    },
    {
        name: 'cpu',
        label: 'CPU sử dụng',
        width: 150,
    },
    {
        name: 'ram',
        label: 'Total RAM',
        width: 150,
    },
    {
        name: 'ramused',
        label: 'Used RAM',
        width: 150,
    },
    {
        name: 'ramphantram',
        label: '% RAM sử dụng',
        width: 150,
    },
    {
        name: 'disk',
        label: 'KL ổ cứng /',
        width: 150,
    },
    {
        name: 'diskused',
        label: 'KL sử dụng',
        width: 150,
    },
    {
        name: 'diskused',
        label: '% sử dụng DISK',
        width: 150,
    },
    {
        name: 'date',
        label: 'Ngày check',
        width: 150,
    },
]


export const COLUMN_SERVER_PHYSICAL = [
    {
        name: 'type',
        label: 'Dòng máy',
        width: 80,
    },
    {
        name: 'type',
        label: 'Hãng',
        width: 100,
    },
    {
        name: 'ip',
        label: 'Địa chỉ IP',
        width: 100,
    },
    {
        name: 'service',
        label: 'Đã cài đặt',
        width: 100,
    },
    {
        name: 'cpu',
        label: 'CPU',
        width: 100,
    },
    {
        name: 'ram',
        label: 'Ram',
        width: 100,
    },
    {
        name: 'disk',
        label: 'Disk',
        width: 200,
    },
]


// NAME DATABSE
export const STATUS_CONTENT = {
    DB_QMS: 'Database QMS',
    DB_phat_thuoc: 'Database Phát Thuốc',
    DB_Isofh_pay: 'Database Isofh Pay',
    DB_File_Servive: 'Database File Service',
    DB_HIS: 'Database HIS',
    DB_HTML: 'Database HTML Editor',
    DB_Incident: 'Database Medical Incident',
    DB_Prevention: 'Database Infection Prevention',
    DB_vital_signs: 'Database Vital Signs',
    DB_signer: 'Database Signer',
    TAT_CA: 'Tất cả',
}
export const STATUS_VALUE = {
    DB_QMS: 'qms',
    DB_phat_thuoc: 'phat_thuoc',
    DB_Isofh_pay: 'isofh_pay',
    DB_File_Servive: 'file_service',
    DB_HIS: 'his',
    DB_HTML: 'html_editor',
    DB_Incident: 'medical_incident',
    DB_Prevention: 'infection_prevention',
    DB_vital_signs: 'vital_signs',
    DB_signer: 'signer',
    TAT_CA: '',
}
export const STATUS: Select2Data = [
    {
        label: '',
        options: [
            {value: STATUS_VALUE.DB_QMS, label: STATUS_CONTENT.DB_QMS},
            {value: STATUS_VALUE.DB_phat_thuoc, label: STATUS_CONTENT.DB_phat_thuoc},
            {value: STATUS_VALUE.DB_Isofh_pay, label: STATUS_CONTENT.DB_Isofh_pay},
            {value: STATUS_VALUE.DB_File_Servive, label: STATUS_CONTENT.DB_File_Servive},
            {value: STATUS_VALUE.DB_Incident, label: STATUS_CONTENT.DB_Incident},
            {value: STATUS_VALUE.DB_HTML, label: STATUS_CONTENT.DB_HTML},
            {value: STATUS_VALUE.DB_HIS, label: STATUS_CONTENT.DB_HIS},
            {value: STATUS_VALUE.DB_Prevention, label: STATUS_CONTENT.DB_Prevention},
            {value: STATUS_VALUE.DB_vital_signs, label: STATUS_CONTENT.DB_vital_signs},
            {value: STATUS_VALUE.DB_signer, label: STATUS_CONTENT.DB_signer},
            {value: STATUS_VALUE.TAT_CA, label: STATUS_CONTENT.TAT_CA}
        ]
    }
]


// STATUS CODE
export const STATUS_CONTENT_BACKUP = {
    SUCCESS: 'Thành công',
    ERROR: 'Thất bại',
    TAT_CA: 'Tất cả',
}
export const STATUS_CONTENT_BACKUP_VALUE = {
    SUCCESS: 'backup',
    ERROR: 'error',
    TAT_CA: '',
}
export const STATUS_BACKUP: Select2Data = [
    {
        label: '',
        options: [
            {value: STATUS_CONTENT_BACKUP_VALUE.SUCCESS, label: STATUS_CONTENT_BACKUP.SUCCESS},
            {value: STATUS_CONTENT_BACKUP_VALUE.ERROR, label: STATUS_CONTENT_BACKUP.ERROR},
            {value: STATUS_CONTENT_BACKUP_VALUE.TAT_CA, label: STATUS_CONTENT_BACKUP.TAT_CA}
        ]
    }
]
