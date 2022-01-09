import React from "react";
import './SortingVisualizer.css';
import { getMergeSortAnimations } from "../sortingAlgorithms/MergeSort";
import { getQuickSortAnimations } from "../sortingAlgorithms/QuickSort";
import { getBubbleSortAnimations } from "../sortingAlgorithms/Bubblesort";
import { getHeapSortAnimations } from "../sortingAlgorithms/HeapSort";

const ANIMATION_SPEED_MS = 3;
//const NUMBER_OF_ARRAY_BARS = 310;
export class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state={
            array: [],
        };
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray(){
        const array = [];
        for (let i=0 ; i<305 ; i++){
            array.push(randomInt(5,630))
        }
        this.setState({array});
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        console.log(animations);
        for(let i = 0; i< animations.length; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? 'yellow' : 'rgb(115, 115, 245)';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i*ANIMATION_SPEED_MS);
            }else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS );
            }
        }
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? 'yellow' : 'rgb(115, 115, 245)';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i*ANIMATION_SPEED_MS);
            }else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS );
            }
        }

    }

    heapSort() {
            const animations = getHeapSortAnimations(this.state.array);
            for(let i = 0; i<animations.length; i++ ){
                const arrayBars = document.getElementsByClassName('array-bar');
                const isColorChange = i%3 !==2;
                if (isColorChange){
                    const [barOneIdx,barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i%3 === 0 ? 'yellow' : 'rgb(115, 115, 245)';
                    setTimeout(()=>{
                        barOneStyle.backgroundColor = color;
                        barTwoStyle.backgroundColor = color;
    
                    }, i*ANIMATION_SPEED_MS);
                }else{
                    setTimeout(()=>{
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, i*ANIMATION_SPEED_MS );
                }
            }
    } 

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i = 0; i<animations.length; i++ ){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !==2;
            if (isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? 'yellow' : 'rgb(115, 115, 245)';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;

                }, i*ANIMATION_SPEED_MS);
            }else{
                setTimeout(()=>{
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS );
            }
        }
}


    render(){
        const {array} = this.state;
        
        return(
            <div className="array-container">
            <nav>
                <div class="logo">
                    <p>Sorting visualizer</p> 
                </div>
                <ul>
                <li><button onClick={()=> this.resetArray()}> Generate new aray</button></li>
                <li><button onClick={()=> this.mergeSort()}> merge Sort</button></li>
                <li><button onClick={()=> this.quickSort()}> quick Sort</button></li>
                <li><button onClick={()=> this.heapSort()}> heap Sort</button></li>
                <li><button onClick={()=> this.bubbleSort()}> bubble Sort</button></li>
                </ul>
            </nav>
            {array.map((value, idx) =>(
                <div className="array-bar" key={idx}
                style={{height:`${value}px`}}>
                </div>
            ))}
            </div>
        );
        
    }
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
