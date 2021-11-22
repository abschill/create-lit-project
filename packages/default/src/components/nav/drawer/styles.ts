import { css } from 'lit';
export default function drawerStyles({...opts}){
    return css`
    .nav{
        border-radius:999rem;
        cursor:pointer;
        display:flex;
        margin:.25rem;
        padding:.25rem;
        position:sticky;
        width:fit-content;
    }
    
    svg{
        border-radius:999rem;
        height:min-content;
        padding:0;
    }
    .nav:hover,
    .drawer svg:hover{
        background-color:rgba(128,128,128,0.15);
        box-shadow:0 0 2px 1px rgba(128,128,128,0.25);
    }
    @media(min-width:1024px){
        a{
            font-size:18px;
        }
        
    }
    .drawer{
        box-shadow: 1px 0 2px 1px rgba(128,128,128,0.25);
        height:100vh;
        width:14em;
        top:0;
        left:0;
        position:fixed;
        z-index:2;
        padding:.35rem;
        background-color:${opts.backgroundColor ?? "white"};
        animation-name:drawerOpen;
        animation-duration:120ms;
        animation-timing-function:ease-in;
    }
    .drawer-nav{
        padding-top:1em;
        padding-left:.5em;
    }
    .drawer-nav img{
        max-width:100%;
    }
    .drawer svg{
        float:right;
    }
    .drawer-item a{
        color:${opts.color ?? "black"};
        display:block;
        font-size:18px;
        padding:.5em 0;
        text-decoration:none;
    }
    .drawer-item a:hover{
        text-decoration:underline;
    }
    
    @keyframes drawerOpen{
        
        0%{
            opacity:0;
            width:0em;
        }
        50%{
            opacity:0.5;
            width:7em;
        }
    }
    @media(max-width:768px){
        .drawer{
            width:8em;
        }
    } 
    `
}