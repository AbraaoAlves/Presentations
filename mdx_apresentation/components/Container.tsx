import { WebContainer } from '@webcontainer/api';

const webcontainerInstance = await WebContainer.boot();

export function Container() {
    return(
        webcontainerInstance
    )
}