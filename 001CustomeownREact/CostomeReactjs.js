
function CustomeRander(reactElement, mainContainer) {
    const DomeElement = document.createElement(reactElement.type);
    
    // Fix: Capital 'L' in innerHTML
    DomeElement.innerHTML = reactElement.children;

    // Fix: Typo in 'target'
    DomeElement.setAttribute('href', reactElement.props.href);
    DomeElement.setAttribute('target', reactElement.props.target);

    mainContainer.appendChild(DomeElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector("#root");

// ✅ Call the function instead of redefining it
CustomeRander(reactElement, mainContainer);
