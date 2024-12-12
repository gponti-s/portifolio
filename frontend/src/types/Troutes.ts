import React from "react";

export enum RouteGroups {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    ADMIN = 'ADMIN',
    AUTH = 'AUTH'
}

export interface RouteType {
    group: RouteGroups;
    name: string;
    path: string;
    element: React.ReactElement;
    offcanvas: boolean;
    icon?: React.ReactElement;
    disabled?: boolean;
}

