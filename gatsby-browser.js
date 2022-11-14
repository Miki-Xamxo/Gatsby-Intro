// import 'lazysizes'

// import loadable, { loadableReady } from '@loadable/component'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// export const onInitialClientRender = () => {
//   // wait to init GTM until after React has hydrated in this lifecycle
//     console.log("ReactDOM.render has executed")
//     const dataLayer = window.dataLayer || []
//     dataLayer.push({ "base.start": new Date().getTime(), event: "base.js" })
// }

import smoothscroll from 'smoothscroll-polyfill'




export const onClientEntry = () => {
    // console.log(document.readyState)
    smoothscroll.polyfill()
}

export const onInitialClientRender = () => {
    // window.requestAnimationFrame(() => {
    //     let iframe = document.querySelector('.iframe');
    //     iframe.src = iframe.dataset.src
    //     iframe.removeAttribute('data-src')
    //     console.log(iframe)  
    // })
    // loadableReady(() => {
    //             console.log('ReactDOM.render has executed')
    //     let iframe = document.querySelector('.iframe');
    //     console.log(iframe)
    //         iframe.src = iframe.dataset.src
    // iframe.removeAttribute('data-src')
    // })
    // window.lod = () => {
    //     console.log('ReactDOM.render has executed')
    //     let iframe = document.querySelector('.iframe');
    //     console.log(iframe)

    // iframe.src = iframe.dataset.src
    // iframe.removeAttribute('data-src')

    // }
    // console.log('ReactDOM.render has executed')
    // let iframe = document.querySelector('.iframe');
    // iframe.src = iframe.dataset.src
    // iframe.removeAttribute('data-src')
    // console.log(document.readyState )
    // setTimeout(() => {
    //     iframe.src = iframe.dataset.src
    //     iframe.removeAttribute('data-src')
    // }, 1000);

// //     // let iframe = document.querySelectorAll('iframe[src]');
// //     let iframe = document.querySelector('.iframe');
// //     window.onload = () => {
// //         iframe.src = iframe.dataset.src
// //         iframe.removeAttribute('data-src')
// //     }

// //     // iframe.forEach((v) => {
// //     //     console.log(v)

// //     //     v.setAttribute('src', v.data);
// //     //     v.removeAttribute('data');
// //     // });
    
// //     // setTimeout(function() { 
// //     //     const iframe = document.getElementsByClassName("iframe").dataset.src
// //     //     console.log(iframe)
// //     // }, 1000) 
}