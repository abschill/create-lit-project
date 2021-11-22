import { LitElement, html, css } from 'lit';
import drawerTemplate from './drawer/template';
import drawerStyles from './drawer/styles';
export class BurgerNav extends LitElement {
    
    drawerIcon: string;
    open: boolean;

    static get styles(){
        return drawerStyles({backgroundColor:css`#fff`, color:css`#222222`});
    }
    static get properties(){
        return{
            open: {type:Boolean, state:true},
            drawerIcon: {type: String}
        }
    }
    constructor(){
        super();
        this.open = false;
        this.drawerIcon = this.getAttribute('src');
    }
    closeDrawer(){
        this.open = false;
    }
    openDrawer(){
        this.open = true;
    }
    drawer(){
        if(this.open){
            return html`
            <div class="drawer">
                <svg @click=${this.closeDrawer} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                ${drawerTemplate(this.drawerIcon)}
            </div>
            `
        }else{
            return html``;
        }
    }
    render(){
        return html`
        <div class="nav">
            <svg @click=${this.openDrawer} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            ${this.drawer()}
        </div>
        `;
    }
}

customElements.define( 'burger-nav', BurgerNav );