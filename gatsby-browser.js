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

export const onInitialClientRender = () => { 
    // let iframe = document.querySelectorAll('iframe[src]');
    let iframe = document.querySelector('.iframe');
    iframe.src = iframe.dataset.src
    iframe.removeAttribute('data-src')

    // iframe.forEach((v) => {
    //     console.log(v)

    //     v.setAttribute('src', v.data);
    //     v.removeAttribute('data');
    // });
}