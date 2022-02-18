import{W as L,s as t,S as v,j as i,a as e,G as j,A as T,r as d,H as f,u as F,T as M,e as O,t as b,B as I,b as P,R as u,c as N,d as R,f as $}from"./vendor.b13ddb78.js";const A=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function c(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=c(r);fetch(r.href,a)}};A();var E=L`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html.sr .load-hidden {
        visibility: hidden;
    }

    [data-simplebar]:not(.simplebar-dragging) .simplebar-content-wrapper {
	    scroll-behavior: smooth;
    }

    :root {
        --colorBg: #252525;
        --colorOutline: #ffffff;
        --colorOutlineFade: #4e5559;

        --widthMouse: 45px;
        --heightMouse: 75px;
        --borderMouse: 6px;

        --posMouse: 8px;
        --posText: 2px;

        --sizeTrackball: 5px;
        --posTrackball: 20px;
        --shrinkTrackball: 0.4;

        --animDuration: 5s;

        --bgGradient: var(--colorOutlineFade) linear-gradient(transparent 0%,transparent 50%,var(--colorOutline) 50%,var(--colorOutline) 100%);
    }
    
    html, body, #root {
        height: 100%;
        width : 100%;
        scroll-behavior: smooth;
    }

    h1, h2, h3, h4, h5, span, button, p  {
        font-family: 'Inter', sans-serif;
        color: #949494;
    }

    b, strong {
        color: #ffb464;
    }

    textarea {
        resize: none;
    }

    textarea, select, input, input:focus, textarea:focus, select:focus{
        border: 0;
        outline: none;
    }

    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }

    *, button, input {
        font-family: 'Inter', sans-serif;
        text-decoration: none;
    }

    ul {
        color: #000;
    }

    @media (min-width: 1600px) {
        html {
            font-size: 92%;
        }
    }

    @media (max-width: 1200px) {
        html {
            font-size: 89%;
        }
    }

    @media (max-width: 1024px) {
        html {
            font-size: 85%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 80%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 78%;
        }
    }

    @media (max-width: 320px) {
        html {
            font-size: 75%;
        }
    }
`;const J=t(v)`
    max-height: 99.9999999vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
`,H=t.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin: 50px 0 0 0;
`,_=t.img`
  height: 5rem;
  object-fit: cover;
`,D=t.span`
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color:#ffb464;
  }
`;var Y="/assets/profile-ruivo.c3bbeab7.svg";function G(){return i(H,{children:[e(_,{src:Y,loading:"lazy",alt:"Footer Img"}),e("a",{href:"https://github.com/luizfelipebraga",target:"_blank",rel:"noreferrer",children:e(D,{children:"Created by: Luiz Felipe"})})]})}const V=t.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 50px;
  z-index: 10;  

  @media (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-height: 768px) and (max-width: 800px) {
    display: none;
  }

  @media screen and (max-height: 1024px) and (max-width: 1200px) {
    display: none
  }
`,q=t.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  a {
    margin: 20px auto;
    color: #fff;
    padding: 10px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: #f9a251;
      transform: translateY(-3px);
    }

    @media(max-width: 768px) {
      writing-mode: horizontal-tb;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background: #fff;

    @media(max-width: 768px) {
      width: 0px;
    }
  }
`;function K(){return e(V,{children:e(q,{children:e("a",{href:"mailto:luizfelipebragaa@gmail.com",target:"_blank",rel:"noreferrer",children:"luizfelipebragaa@gmail.com"})})})}const W=t.nav`
  display: flex;
  align-items: ${n=>n.isOpen?"none":"center"};
  justify-content: space-between;
  width: 100%;

  transition: all 0.5s ease-in-out;

  background: #121111;

  position: fixed;
  z-index: 5555;

  font-size: ${n=>n.navScroll&&!n.isOpen?".8rem":"1rem"};

  padding: 0.3rem 2rem;

  img {
    display: ${n=>n.isOpen?"none":"flex"};
    height: 4rem;
    width: 4rem;
    cursor: pointer;

    transition: all 0.5s ease-in-out;
    &:hover {
      transform: rotate(50deg);
    }
  }

  ul {
    display: flex;
    align-items: center;
    position: relative;
    gap: 3rem;

    a {
      display: flex;
      gap: 0.5rem;
      color: #f2f2f2;
      font-size: ${n=>n.isOpen?"1.5rem":".9rem"};

      transition: all 0.2s ease-in-out;

      span {
        color: #f9a251;
      }

      &:hover {
        color: #f9a251;
      }
    }
  }

  @media (max-width: 1280px) {
    padding: 0;

    ul {
      display: ${n=>n.isOpen?"flex":"none"};
      height: 100%;
      margin: 0 auto;
      justify-content: space-evenly;
      flex-direction: column;
      height: ${n=>n.isOpen?"100vh":"0"};
      width: ${n=>n.isOpen?"100vw":"0"};

      padding: 2rem 0;

      transition: all 0.3s ease-in;
    }
  }
`,U=t.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transition: all .3s ease-in-out !important;

  @media (max-width: 1280px) {
    width: 100%;
    z-index: 1000;
  }
`,Q=t(j)`
  display: none;
  fill: #ffb464;
  height: 3rem;
  cursor: pointer;

  @media (max-width: 1280px) {
    display: block;
    align-items: right;
    margin-right: 2rem;
    size: 20px;
  }
`,X=t(T)`
  display: none;
  fill: #ffb464;
  height: 1.5rem;

  @media (max-width: 1280px) {
    display: block;
    height: 1.5rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    cursor: pointer;

    svg {
      height: 2rem;
    }
  }
`,Z=t.div`
  display: inline-flex;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 1280px) {
    display: none;
  }
`,w=t.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.7rem !important;
  margin-right: 1rem;

  font-weight: bold;
  color: #fff;

  padding: 15px 20px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
    color: #fff !important;
    &:before {
      background: #f55f19;
      width: 100%;
    }
  }

  &:before {
    width: 0;
    height: 100%;

    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: -1;
    transition: 0.7s ease;
  }
`;var y="/assets/orangeCircle.24187d42.png",ee="/assets/curriculo.6a724423.pdf",te="/assets/resume.b2cee159.pdf";const ie=()=>{const[n,l]=d.exports.useState(!1),[c,s]=d.exports.useState(!1);function r(){window.scrollY>10?l(!0):l(!1)}d.exports.useEffect(()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}),[]);function a(){window.scrollTo(0,1),s(!1)}return i(W,{isOpen:c,navScroll:n,children:[e(f,{to:"/home",onClick:a,children:e("img",{src:y,alt:"Logo"})}),i(U,{children:[c?e(X,{size:30,onClick:()=>s(!c)}):e(Q,{size:20,onClick:()=>s(!c)}),i("ul",{children:[i(f,{to:"#home",onClick:a,children:[e("span",{children:"01."}),"Home"]}),i(f,{to:"#about",onClick:()=>s(!1),children:[e("span",{children:"02."}),"About"]}),i(f,{to:"#projects",onClick:()=>s(!1),children:[e("span",{children:"03."}),"Projects"]}),i(f,{to:"#contact",onClick:()=>s(!1),children:[e("span",{children:"04."}),"Contact"]}),i(Z,{children:[e(w,{href:ee,target:"_blank",children:"Curriculo"}),e(w,{href:te,target:"_blank",children:"Resume"})]})]})]})]})},ne=t.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 50px;
  right: auto;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
`,re=t.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li a {
    padding: 15px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: all 0.5s ease-in-out;

    svg {
      fill: #fff;
      height: 1.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        fill: #f9a251;
        transform: translateY(-3px);
      }
    }
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 93px;
    margin: 0px auto;
    background-color: #fff;
  }

`;function oe(){return e(ne,{children:i(re,{children:[e("li",{children:e("a",{href:"https://github.com/luizfelipebraga",target:"_blank",rel:"noreferrer",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})}),e("li",{children:e("a",{href:"https://www.linkedin.com/in/luizfelipe-braga/",target:"_blank",rel:"noreferrer",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:e("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})})}),e("li",{children:e("a",{href:"mailto:luizfelipebragaa@gmail.com",target:"_blank",rel:"noreferrer",children:e("svg",{fill:"#ffffff",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",children:e("path",{d:"M 4 5 C 2.9069372 5 2 5.9069372 2 7 L 2 23 C 2 24.093063 2.9069372  25 4 25 L 26 25 C 27.093063 25 28 24.093063 28 23 L 28 7 C 28 5.9069372 27.093063  5 26 5 L 4 5 z M 6.6992188 7 L 23.300781 7 L 15 13.134766 L 6.6992188 7 z M 5 9.4746094  L 15 16.865234 L 25 9.4746094 L 25 23 L 5 23 L 5 9.4746094 z"})})})})]})})}t(v)`
  max-height: 100vh;
  overflow: hidden;

  .simplebar-scrollbar:before {
    background: #fff;
  }
`;const ae=t.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  background-image: linear-gradient(91.18deg, #0d0d0e 32.63%, #141416 62.22%);
`,le=t.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

    
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 100px 0;
  margin: 0px auto;
  max-width: 1300px;

  @media (max-width: 1400px) {
    max-width: 1000px;
  }
`,se=({children:n})=>e(ae,{children:i(J,{autoHide:!1,children:[e(ie,{}),e(oe,{}),e(K,{}),e(le,{children:n}),e(G,{})]})}),ce=t.section`
  background-image: linear-gradient(91.18deg,#0d0d0e 32.63%,#141416 62.22%);
  
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`,de=t.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;function pe(){const n=F();return d.exports.useEffect(()=>{setTimeout(()=>{n.push("/home")},3e3)},[n]),e(ce,{children:e(de,{src:y,alt:"Logo do Site"})})}const he=t.section`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.5rem;
`,me=t.section`
  width: 100%;
  height: 100%;

  padding: 150px 0 50px 0;
  max-width: 1000px;

  margin: 0 auto;
`,fe=t.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    justify-content: center;
    >img {
      display: none;
    }
  }
`,ue=t.img`
  height: 22rem;
  object-fit: cover;
  border-radius: 8px;
`,ge=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 550px;

  /* font-size: 1rem; */
  font-size: clamp(13px, 4vw, 16px);
  line-height: 30px;

  padding: 1rem;

  @media (max-width: 1024px) {
    background-color: #18181a;
    padding: 1.5rem;
  }
`;var xe="/assets/felipe-nobackground.081c3c19.jpg";const be=t.div`
    display: flex;
    align-items: center;
    position: relative;

    margin: 10px 0 40px;

    h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;

    gap: 10px;
    font-size: 1.7rem;
    color: #f2f2f2;

    &:after {
      content: "";
      display: block;
      position: relative;
      top: 0px;
      left: 15px;
      width: 650px;
      height: 1px;
      background-color: #686868;
    }

    span {
      color: #ffb464;
      font-size: 1.3rem;
    }
  }
`,x=({number:n,title:l})=>e(be,{children:i("h2",{children:[i("span",{children:[n,"."]}),l]})});function we(){return i(me,{id:"about",children:[e(x,{number:"02",title:"About Me"}),i(fe,{children:[e(ue,{src:xe,alt:"Felipe image",loading:"lazy"}),i(ge,{children:[i("p",{children:["Hi! My name Luiz, 18 years. - ",e("strong",{children:"JavaScript Full Stack Developer"}),e("br",{})," I am a person who always looking for constant technical and personal evolution. My programming world started when i was 16 years at the ",e("strong",{children:"Senai Technical School of Informatics"}),", where I saw principles that opened my eyes to the world of programming."]}),i("p",{children:["I've learned languages like: Csharp, SqlServer, HTML, CSS and JavaScript and beyond, I've been learning other concepts like ",e("br",{})," ",e("strong",{children:"NodeJs and ReactJs with TypeScript"}),", Firebase, MongoDb (basic), Spring Framework, Docker and currently studying to get my AWS Solutions Architect certification."]})]})]})]})}const ve=t.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`,ye=t.a`
  text-decoration: none;
  font-size: 1rem;
  margin-right: 1rem;

  overflow: hidden;
  font-weight: bold;
  color: #fff;

  padding: 16px 35px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
      color: #fff;
      &:before {
          background: #f55f19;
          width: 100%;
      }
  }

  &:before {
      width: 0;
      height: 100%;

      content: "";
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      z-index: -1;
      transition: 0.7s ease;
    }
`;function k({href:n,target:l,type:c,rel:s,children:r}){return e(ve,{children:e(ye,{href:n,target:l,rel:"noreferrer",children:r})})}const ke=t.a`
    display: flex;
    justify-content:space-between;
    flex-direction: column;

    max-width: 500px;
    min-height: 300px;

    border-radius: 2px;

    &:hover{
        transform: translateY(-3px);

        h2 {
            color: #ffb464;
        }
    }

    padding: 2rem 1.75rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: #18181a;
    box-shadow: 0 10px 30px -15px #0f0f10e8;

`,ze=t.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`,Ce=t.h2`
    font-size: 1.8rem;
    color: #FFF;
`,Se=t.span`
    color: #c7c3c3;
    font-size: clamp(14px, 2vw, 10px);
    line-height: 25px;
`,Be=t.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: clamp(13px, 2vw, 10px);
    cursor: pointer;
    list-style: none;
    text-decoration: none;

    a {
        span {
            &:hover {
            color: #e18451;
            }
        }
    }
`;function p({title:n,content:l,url:c,children:s}){return i(ke,{href:c,target:"_blank",rel:"noreferrer",children:[i(ze,{children:[e(Ce,{children:n}),e(Se,{children:l})]}),e(Be,{children:s})]})}const Le=t.section`
    height: 100%;
    width: 100%;

    margin: 0 auto;
    padding: 100px 0 50px 0;

    max-width: 1000px;
`,je=t.div`
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
    position: relative;
`;function Te(){return i(Le,{id:"projects",children:[e(x,{number:"03",title:"Projects"}),i(je,{children:[i(p,{title:"Nlw - Let me Ask",content:"Question and Answer Project similar to Brainly, in order to learn a little more about Context API and Styled Components.",url:"https://github.com/luizfelipebraga/react-letmeask-nlw",children:[e("span",{children:"ReactJs"}),e("span",{children:"TypeScript"}),e("span",{children:"Firebase"})]}),i(p,{title:"Uber Clone",content:"GoogleMapApi. The user chooses a location that they want to go showing the place of origin after the vehicle of their choice.",url:"https://github.com/luizfelipebraga/react-native-uber",children:[e("span",{children:"React Native"}),e("span",{children:"Redux"}),e("span",{children:"Tailwind"}),e("span",{children:"Maps"})]}),i(p,{title:"Senai Vagas",content:"Project completion of course in Senai.  System to improve the connection between company and student, which only Senai students could access the plataform.  FrontEnd - BackEnd - Mobile",url:"https://github.com/luizfelipebraga/csharp-senai-vagas",children:[e("span",{children:"ReactJs"}),e("span",{children:"TypeScript"}),e("span",{children:"C#"}),e("span",{children:"SQL Server"})]}),i(p,{title:"Busi",content:"Simple API to understand a little more about the world of functional programming with Elixir",url:"https://github.com/luizfelipebraga/elixir-busi-api",children:[e("span",{children:"Elixir"}),e("span",{children:"Docker"})]}),i(p,{title:"Portfolio Vanilla",content:"Portfolio using only Html, Css and Vanilla JavaScript. No use of Frameworks.",url:"https://luizfelipebraga.github.io/",children:[e("span",{children:"Html"}),e("span",{children:"Css"}),e("span",{children:"JavaScript"})]}),i(p,{title:"Html and Css Tips",content:"Repository where I save some code templates to use in future projects.",url:"https://github.com/luizfelipebraga/html_css-tips",children:[e("span",{children:"Html"}),e("span",{children:"Css"}),e("span",{children:"Js"})]})]}),e(k,{href:"https://github.com/luizfelipebraga?tab=repositories",target:"_blank",rel:"noreferrer",children:"See more projects"})]})}const Fe=t.div`

  @media (max-width: 1024px) {
    display: none;
  }

  span {
    font-size: clamp(1.5rem, 3vw, 2.4rem);
    color: #c5c5c5;
  }

  p {
    margin: 20px 0 0 0;
    max-width: 300px;
    line-height: 25px;
  }
`;function Me(){return i(Fe,{children:[e("span",{children:"Get In Touch"}),e("p",{children:"Currently, I'm looking forward for a opportunity to show my skills in real projects. If you are interested in talking to me, send me an email. \u2192 "})]})}const Oe=t.section`
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 450px;

    @media (max-width: 1024px) {
      margin: 0 auto;
    }

    @media (max-width: 360px) {}
  }
`,Ie=t.div`
  display: flex;
  justify-content: space-between;
`,Pe=t.div`
  display: flex;
  gap: 16px;

  input {
    width: 50%;
  }
`,g=t.input`
  margin-right: 0px !important;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1.5rem;
  border-radius: 1rem;
`,Ne=t.select`
  background: transparent;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;

  option {
    &::disabled {
      background: transparent;
    }
    padding: 1rem;
    background-color: transparent;
    margin-top: 1rem;
  }
`,Re=t.textarea`
  background: transparent;
  color: #fff;
  font-size: 1rem;
  background: rgba(51, 51, 51, 1);
  box-shadow: 0 10px 30px -15px #0f0f10e8;
  padding: 1rem;
  border-radius: 1rem;
`,$e=t.input`
  background-color: transparent;
  font-size: 1rem;
  padding: 1rem;

  color: #fff;
  border: 2px solid #f55f19;
  cursor: pointer;

  transition: background 0.3s ease-in-out;

  &:focus {
    outline:none;
    border: 2px solid #f55f19;
}
`;function Ae(){const[n,l]=d.exports.useState(""),[c,s]=d.exports.useState(""),[r,a]=d.exports.useState(""),[h,z]=d.exports.useState("type"),[C,S]=d.exports.useState("");return i(Oe,{id:"formEmail",children:[e(M,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),i(Ie,{children:[e(Me,{}),i("form",{onSubmit:o=>{o.preventDefault(),O.sendForm("service_beg4kfb","gmail",o.target,"user_WRCVefRiFlT2Ki4K4A3tR").then(()=>{const m=()=>new Promise(B=>setTimeout(B,2e3));b.promise(m,{pending:"Loading",success:"Email has sent, thank you!",error:"Something happened, try again."})},m=>{b.error("Something happened, try again."),console.error(m.text)})},children:[i(Pe,{children:[e(g,{required:!0,type:"text",name:"first",id:"first",placeholder:"First Name",value:n,onChange:o=>l(o.target.value)}),e(g,{required:!0,type:"text",name:"last",id:"last",placeholder:"Last Name",value:c,onChange:o=>s(o.target.value)})]}),e(g,{required:!0,type:"email",name:"email",id:"email",placeholder:"Email",value:r,onChange:o=>a(o.target.value)}),e(Ne,{required:!0,name:"type",id:"type",placeholder:"Select your Message",value:h,onChange:o=>z(o.target.value),children:[{disabled:!0,defaultValue:"type",label:"What type of message?",value:"type"},{label:"Full Stack Job",value:"FULL STACK JOB"},{label:"Back-end Job",value:"BACKEND JOB"},{label:"Front-end Job",value:"FRONTEND JOB"},{label:"Other",value:"OTHERS"}].map((o,m)=>e("option",{value:o.value,disabled:o.disabled,defaultValue:o.defaultValue,children:o.label},m))}),e(Re,{name:"message",id:"message",value:C,onChange:o=>S(o.target.value),placeholder:"Message",rows:3,cols:50}),e($e,{type:"submit",value:"Send"})]})]})]})}const Ee=t.section`
  height: 100%;
  width: 100%;

  margin: 0 0 150px 0; 
`,Je=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  gap: 2rem;

  span {
    letter-spacing: .6rem;
    font-size: clamp(1.5rem, 5vw, 2.7rem);
  }

  a {
    span {
      display: inline-block;

      &:after {
        content: '';
        color: #fff;
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 300ms;
      }

      &:hover::after {
        width: 100%;
        background: #fff;
      }
      letter-spacing: normal !important;
      font-size: clamp(2rem, 5vw, 4.5rem) !important; 
      color: #fff;
    }
  }
`;function He(){return e(Ee,{children:i(Je,{children:[i("span",{children:["Need a ",e("b",{children:" Dev Jr?"})]}),e("a",{href:"#formEmail",children:e("span",{children:"Let's work together"})})]})})}const _e=t.section`
  height: 100%;
  width: 100%;

  padding: 150px 0 0 0;

  margin: 0 auto;

  max-width: 850px;

`;function De(){return i(_e,{id:"contact",children:[e(He,{}),e(x,{number:"04",title:"Contact"}),e(Ae,{})]})}const Ye=t.section`
  height: 100%;
  width: 100%;

  padding: 100px 0 0 0;
`,Ge=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  >img {
    max-height: 15rem;
    transform: translateY(0px);
    animation: float 4000ms ease-in-out infinite;

    @keyframes float {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(.9rem);
      }

      100% {
        transform: translateY(0px);
      }
    }
  }

  @media(max-width:1400px) {
    >img {
      display: none;
    }
  }
`,Ve=t.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: left;

  z-index: 5;

  span {
    display: flex;
    font-size: .8rem;
    color: #fff;
    white-space: nowrap;

    &:first-child {
      color: #ffb464;
      font-weight: 600;
      font-size: 1.4rem;
      width: 100%;
      max-width: 540px;
      text-align: left;

    @media (max-width:1400px) {
        font-size: 1.1rem;
      }

      @media (max-width:690px) {
        display: none;
      }
    }

    &:nth-child(2), &:nth-child(3) {
      font-size: clamp(35px, 8vw, 65px);
      text-transform: capitalize;
      font-weight: bold;
    }

    &:nth-child(3) {
      font-size: clamp(20px, 8vw, 45px);
      color: #b09c88;
    }
  }

  p {
      color: #949494;
      font-size: clamp(13px, 2vw, 16px);
      max-width: 540px;
      line-height: 25px;
      align-items: right;

      b {
        color: #ffb464;
      }
    }
`;t.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  margin-top: 3rem;
`;t.a`
  text-decoration: none;
  font-size: 1rem;
  margin-right: 1rem;

  overflow: hidden;
  font-weight: bold;
  color: #fff;

  padding: 16px 35px;

  position: relative;

  z-index: 1;

  border: 2px solid #f55f19;

  &:hover {
      color: #fff;
      &:before {
          background: #f55f19;
          width: 100%;
      }
  }

  &:before {
      width: 0;
      height: 100%;

      content: "";
      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);

      z-index: -1;
      transition: 0.7s ease;
    }
`;t.div`
  width: 100%;
  height: 5rem;
  position: inherit;

  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  align-items: center;
`;t.a`
  img {
    width: 3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;var qe="/assets/hello-animated.c6998162.svg";function Ke(){return e(Ye,{id:"home",children:i(Ge,{children:[e("img",{src:qe,alt:"Imagem de uma pessoa programando"}),i(Ve,{children:[e("span",{children:"Hello, my name is"}),e("span",{children:"Luiz Felipe Braga"}),e("span",{children:"FullStack Jr."}),i("p",{children:["Specializing to become a exceptional web developer. Currently, I\u2019m focused on building ",e("b",{children:"ReactJs"})," & ",e("b",{children:"NodeJs"})," applications using ",e("b",{children:"TypeScript"}),". Click on the button below to see my knowlegements and projects."]}),e(k,{href:"#projects",children:"Check out my projects!"})]})]})})}function We(){return i(he,{children:[e(Ke,{}),e(we,{}),e(Te,{}),e(De,{})]})}function Ue(){return e("h1",{children:"Page Not Found 404"})}function Qe(){return e(I,{children:i(P,{children:[e(u,{path:"/",exact:!0,component:pe}),e(se,{children:e(u,{path:"/home",exact:!0,component:We})}),e(u,{path:"/404",exact:!0,component:Ue}),e(N,{from:"*",to:"/404"})]})})}function Xe(){return i("div",{children:[e(E,{}),e(Qe,{})]})}R.render(e($.StrictMode,{children:e(Xe,{})}),document.getElementById("root"));
