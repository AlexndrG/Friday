import React, {ReactNode} from 'react';
import s from './ShowComponent.module.css'

type PropsType = {
    name: string
    node: ReactNode
}

export function ShowComponent(props: PropsType) {
    return (
        <div className={s.item}>
            <div>
                <h3 className={s.h3}>{props.name}</h3>
            </div>
            {props.node}
        </div>
    )
}