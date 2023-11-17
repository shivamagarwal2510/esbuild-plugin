figma.showUI(__html__, { width: 1000, height: 600 });

function extractProperties(node:SceneNode){
    if('fills' in node){
        const fillColorArr = [];
        const fills : readonly Paint[] = node.fills as readonly Paint[];
        for(const fill of fills){
            if ('color' in fill && fill.type === 'SOLID'){
            const r = Math.round(fill.color.r * 255);
            const g = Math.round(fill.color.g * 255);
            const b = Math.round(fill.color.b * 255);
            fillColorArr.push({r,g,b});
            }
        }
        return fillColorArr;
    }
}
figma.on('selectionchange', ()=>{
    const nodes = figma.currentPage.selection;
    console.log(nodes);
    const node = nodes.length>0?nodes[0]:null;
    // console.log(node);
    if(nodes.length>0){
        const colorArr = [];
        for(const node of nodes){
            const nodeColor = extractProperties(node);
            // console.log(nodeColor);
            colorArr.push(nodeColor);
        }
        console.log(colorArr);
        figma.ui.postMessage({type:'nodes-arr', colorArr});
    } 
})
