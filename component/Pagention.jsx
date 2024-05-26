import { React, useState } from 'react'
import animalJ from '../src/animals.json'
import AnimalNoImg from './AnimalNoImg';
import SForm from './SForm';
import Animal from './Animal';


const Gallery2 = () => {
    const [counter, setCounter] = useState(0);
    const next = () => {
        if (counter < animalJ.length - 1)
            setCounter(counter + 1);
        else setCounter(0)
    }

    const back = () => {
        if (counter > 0)
            setCounter(counter - 1);
        else setCounter(animalJ.length - 1)
    }


    return (
        <div>
            <div className="container text-center p-4">
                <img src={animalJ[counter].image} className='img-fluid' width="75%" />
                <div className='mt-4'>
                    <button onClick={next} className='btn btn-dark m-2'>Next</button>
                    <button onClick={back} className='btn btn-danger m-2'>Back</button>
                </div>
            </div>

        </div>
    )
}


const Pagention = () => {
    const originArray = animalJ;
    const ANIMALS_PER_PAGE = 4;
    const [arr, setArr] = useState(originArray.slice(0, ANIMALS_PER_PAGE));
    const [start, setStart] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [choice, setChoice] = useState("name");
    const [totalPages, setTotalPages] = useState(Math.ceil(originArray.length / ANIMALS_PER_PAGE));
    const [filterArr, setFilterArr] = useState(originArray);
    const [activeButton, setActiveButton] = useState(1);
    const [btnNum, setBtnNum] = useState(1);

    const filterArray = () => {
        let newArray = animalJ.filter((item) => {
            if (choice == "name")
                return item.name.toLocaleLowerCase() ==
                    searchValue.toLocaleLowerCase();
            if (choice == "food")
                return item.food.toLocaleLowerCase() ==
                    searchValue.toLocaleLowerCase();
            if (choice == "habitat")
                return item.habitat.toLocaleLowerCase() ==
                    searchValue.toLocaleLowerCase();
            if (choice == "lifespan")
                return item.lifespan.toLocaleLowerCase() ==
                    searchValue.toLocaleLowerCase();


        })
        return newArray;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filterArr = filterArray();
        if (filterArr.length > 0) {
            setArr(filterArr.slice(0, ANIMALS_PER_PAGE));
            setFilterArr(filterArr);
            setTotalPages(Math.ceil(filterArr.length / ANIMALS_PER_PAGE));
        }
        else {
            alert("נסה שנית ")
            setArr(compsArr)
        }

    }

    const createPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <a href={"#up"}><button
                    key={i}
                    className='btn btn-primary m-2 d-none d-md-block '
                    onClick={() => onEachBtn(i)}
                >
                    {i}
                </button></a>
            );
        }
        return buttons;
    };

    const onEachBtn = (pageNum) => {
        const startIndex = (pageNum - 1) * ANIMALS_PER_PAGE;
        const endIndex = startIndex + ANIMALS_PER_PAGE;
        const tempArr = filterArr.slice(startIndex,
            endIndex);
        setArr(tempArr);
        setStart(startIndex);
        setBtnNum(pageNum);
        setActiveButton(pageNum);
    };



    const onNextBtn = () => {
        const startIndex = start + ANIMALS_PER_PAGE;
        const tempArr = filterArr.slice(startIndex,
            startIndex + ANIMALS_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        setBtnNum(btnNum + 1);
    };

    const onBackBtn = () => {
        const startIndex = start - ANIMALS_PER_PAGE;
        const tempArr = filterArr.slice(startIndex,
            startIndex + ANIMALS_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        setBtnNum(btnNum - 1);

    };

    const createAllAnimal = (arr) => {
        const compsArr =
            arr.map((item) => {
                return <Animal
                    // key={item.id}
                    image={item.image}
                    name={item.name}
                    habitat={item.habitat}
                    lifespan={item.lifespan}
                    Food={item.Food}
                />
            });
        return compsArr;
    };


    return (
        <div className='bg-success-subtle'>
            
           
            <main className="container-fluid bg-light justify-content-center  bg-success-subtle">
                <div className='justify-content-center d-flex '>
                    <form onSubmit={handleSubmit} className='pt-4 text-center formCss'>
                        <div className="input-group justify-content-center d-flex " >
                            <button className="btn-primary  btn">חפש</button>
                            <input onChange={(e) =>
                                setSearchValue(e.target.value)} type="text" className=' w-25 m-auto form-control'
                            />
                            <select onChange={(e) =>
                                setChoice(e.target.value)} className='w-25  form-select'>
                                <option selected>חפש לפי:</option>
                                <option value='name'>שם</option>
                                <option value='food' >אוכל</option>
                                <option value='lifespan'>תוחלת חיים</option>
                                <option value='habitat'>מיקום</option>
                            </select>

                        </div>
                    </form>
                </div>
                <div className="container text-center">
                    <div className="container mt-4 mb-4 ">
                        <div className="row justify-content-evenly">
                            {createAllAnimal(arr)}
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center pb-4 '>
                    <a href={"#up"}><button className='btn btn-dark me-2 ' onClick={onBackBtn} disabled={start === 0}>Back </button></a>
                    {createPaginationButtons()}
                    <a href={"#up"}><button className='btn btn-dark ms-2' onClick={onNextBtn} disabled={start + ANIMALS_PER_PAGE >=
                            filterArr.length}>Next</button></a>
                </div>
            </main>
           
        </div>

    )
}

export default Pagention