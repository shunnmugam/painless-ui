import React, { ReactElement, useCallback, useState } from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Model from '../Modal/Modal';
import Button from '../Button/Button';
import './Confirm.css';

const Confirm:React.FC<ConfirmType> = (props) => {
    const [open, updateOpen] = useState(true);

    const close = useCallback(() => {
        updateOpen(false);
        removeElementReconfirm();
        if(props.onClose) {
            props.onClose()
        }
    },[props.onClose])
    return <>
        <Model className={"ui-confirm " + (props.className ?? '')} open={open} onClose={close} outsideListener={props.outsideListener ?? false} closeElement={<></>}>
            <div className="ui-confirm-body">
                {props.customUI ? props.customUI({onClose:() => {
                    close()
                }}) : <>
                    {props.title ? 
                        <h1 className={"ui-confirm-body__title " + (props.titleClassName ?? '')}>
                            {props.title}
                        </h1> :
                    null }
                    {
                        props.message ?
                            <p className={"ui-confirm-body__message " + (props.messageClassName ?? '')}>{props.message}</p> :
                        null
                    }
                    <div className="ui-confirm-body__button-group">
                        {
                            props.buttons?.map((b) => {
                                return <Button onClick={() => {
                                    b.onClick({onClose: () => {
                                        close()
                                    }})
                                }} className={b.className || ''} styleType={b.styleType || "text"}>
                                    {b.label}
                                </Button>
                            })
                        }
                    </div>
                </> }
            </div>
        </Model>
    </>
}

interface withCustomUI {
    customUI: ({ onClose }) => ReactElement
    buttons?: Array<{
        className? : string
        styleType?: 'outline' | 'text'
        label: string
        onClick: ({ onClose: Function }) => void
    }>
}

interface withoutCustomUI {
    customUI?: ({ onClose }) => ReactElement
    buttons: Array<{
        className? : string
        styleType?: 'outline' | 'text'
        label: string
        onClick: ({ onClose: Function }) => void
    }>
}

interface ConfirmInterface {
    className?: string
    title?: string
    message?: string
    titleClassName?: string
    messageClassName?: string
    outsideListener?: boolean
    onClose?: () => void
}

type ConfirmType = ConfirmInterface & (withoutCustomUI | withCustomUI)

function createElementReconfirm (properties) {
    let divTarget = document.getElementById('ui-confirm-alert')
    if (divTarget) {
      // Rerender - the mounted ReactConfirmAlert
      render(<Confirm {...properties} />, divTarget)
    } else {
      // Mount the ReactConfirmAlert component
      divTarget = document.createElement('div')
      divTarget.id = 'ui-confirm-alert'
      document.body.appendChild(divTarget)
      render(<Confirm {...properties} />, divTarget)
    }
}

function removeElementReconfirm () {
    const target = document.getElementById('ui-confirm-alert')
    if (target && target.parentNode) {
      unmountComponentAtNode(target)
      target.parentNode.removeChild(target)
    }
}

const confirm = (options: ConfirmType) => {
    createElementReconfirm(options);
}

export default confirm;