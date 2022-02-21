import React, { Component } from "react";
import { Table as TableMantine } from '@mantine/core';

interface TableProps {
    // children: JSX.Element | JSX.Element[];
    name: string;
}

export class Table extends Component<{}, TableProps> {
    render() {
        return <TableMantine striped>{this.props.children}</TableMantine>;
    }
}