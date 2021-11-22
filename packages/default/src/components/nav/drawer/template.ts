import { html } from 'lit';
export default function drawerTemplate( icon ){
    return html `
        <div class="drawer-nav">
            <img src="${icon}"/>
                <nav>
                    <div class="drawer-item"><a href="/">Home</a></div>
                    <div class="drawer-item"><a href="/components">Components</a></div>
                    <div class="drawer-item"><a href="/resets">Resets</a></div>
                </nav>
            </div>
    `
}