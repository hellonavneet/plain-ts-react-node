import * as React from 'react';
import './Hello.scss';

export interface HelloProps {
    name: string;
}

export interface HelloState {
    age: number;
}

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
    }

    public render() {
        return <div> Hello {this.props.name} </div>;
    }
}
