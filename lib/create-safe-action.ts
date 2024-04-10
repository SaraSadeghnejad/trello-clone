import {z} from 'zod'
import type FieldErrors<T> ={
    [K in keyof T]?: string[];
};
export type ActionState<TInput, TOutput> ={
    fieldErrors?: FieldErrors<TInput>;
    error?:string | null;
    data?: TOutput;
};
export const createSafeAction =<TInput, TOutput>(z.Schema<TInput>,handler:ActionState<TInput, TOutput>):ActionState<>=>{}