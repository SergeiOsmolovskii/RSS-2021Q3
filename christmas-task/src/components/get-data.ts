import { Idata } from "../interfases/interfaces";

export const getData = async () => {

    const url:string = `https://raw.githubusercontent.com/sergeiosmolovskii/stage1-tasks/christmas-task/ru_data.json`;
    const res: Response = await fetch(url);  
    const data: Array<Idata> = await res.json();
    return data;
}

