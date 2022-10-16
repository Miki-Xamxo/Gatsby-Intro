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
  
// export const onClientEntry = () => {
//     console.log(document.readyState )

//     // window.onload = () => {
//     //     console.log('ReactDOM.render has executed')
//     // }
// }

export const onInitialClientRender = () => {
    // console.log('ReactDOM.render has executed')
    let iframe = document.querySelector('.iframe');
    console.log(iframe)
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