/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string
}