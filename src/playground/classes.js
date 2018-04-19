class Person {
    constructor(name = "Anomous", age = 27){
        this.name = name;
        this.age = age;

    }

    getGreating(){
        return `Hi, i am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }

}


class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    getDescription(){
        return "yyy"
    }
}

const me = new Student("YUra", 27, "Architecr") 
console.log(me.getDescription())

//

const app = {
    title:"IndecisionApp",
    subtitle:"Put your life in the hands of computer",
    options:[]
};

const onFormSubmit = (e)=>{;
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
    }
    e.target.elements.option.value = '';
    render();
};

const onRemoveAll = ()=>{
    app.options = [];
    render();
}

const onMakeDecision = () =>{
    const randomeNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomeNum];
    alert(option);
}



const appRoot = document.getElementById("app");

const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? "Here are your options": "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove all</button>
            <ol>
                {
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>)
        ReactDOM.render(template,appRoot);
}

render();













