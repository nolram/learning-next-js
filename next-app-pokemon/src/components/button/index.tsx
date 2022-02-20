import React, { Component } from "react";
import { Button as ButtonMantine } from '@mantine/core';

interface ButtonProps {
    // children: JSX.Element | JSX.Element[];
    name: string;
    disable: boolean
  }

export class Button extends Component<{}, ButtonProps> {
    render() {
        return <ButtonMantine>{this.props.children}</ButtonMantine>;
    }
}